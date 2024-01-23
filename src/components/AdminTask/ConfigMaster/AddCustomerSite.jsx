import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { cityList } from '../../../utills/api/City';
import { createCustomerSite, updateCustomerSite } from '../../../utills/api/CustomerSite';
import { customerList } from '../../../utills/api/Customer';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddCustomerSite = ({ customerSiteFetch,modalName,siteAddOne,siteAddTwo,siteCityId,siteCusId,siteName,sitePincode,ids,siteActive }) => {
    const [ isOpen, setIsOpen] = useState(false)

    const { mutateAsync : customerSiteDetails } = useMutation('createCustomerSite',createCustomerSite)
    const { mutateAsync : updatedSiteDetails } = useMutation('updateCustomerSite',updateCustomerSite)


    const [customerSiteData, setCustomerSiteData] = useState({
        name : siteName ? siteName : "",
        address1 : siteAddOne ? siteAddOne :  "",
        address2 : siteAddTwo ? siteAddTwo : "",
        pinCode : sitePincode ? sitePincode : "",
        customerId : siteCusId ? siteCusId : 6,
        cityId : siteCityId ? siteCityId : "",
        isActive : siteActive ? siteActive : true,
    })


    const [ customerSiteErr, setCustomerSiteErr ] = useState({
        nameErr :  "",
        address1Err :  "",
        address2Err : "",
        pinCodeErr : "",
        customerIdErr : "",
        cityIdErr : "",
    })
    
    const resetState = () =>{
        setCustomerSiteData({
            name : siteName ? siteName : "",
            address1 : siteAddOne ? siteAddOne :  "",
            address2 : siteAddTwo ? siteAddTwo : "",
            pinCode : sitePincode ? sitePincode : "",
            customerId : siteCusId ? siteCusId : "",
            cityId : siteCityId ? siteCityId : "",
            isActive : siteActive ? siteActive : true,
        })
        setCustomerSiteErr({
            nameErr :  "",
            address1Err :  "",
            address2Err : "",
            pinCodeErr : "",
            customerIdErr : "",
            cityIdErr : "",
        })
    }

    const [ customerDrop , setCustomerDrop ] = useState([])
    const [ cityDrop , setCityDrop ] = useState([])

    const [ customerFilter, setCustomerFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })

    const [ contactFilter, setContactFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })

    const {} = useQuery('customerList',customerList.bind(this,customerFilter),{ onSuccess : (x)=>setCustomerDrop(x?.items) })
    const {} = useQuery('cityList',cityList.bind(this,contactFilter),{ onSuccess : (x)=>setCityDrop(x?.items) })


    const changeHandler = (e) =>{
        setCustomerSiteData(old => ({...old,[e.target.name] : e.target.value  }) )
        setCustomerSiteErr( old => ({...old,[`${e.target.name}Err`] : "" }) )

    }

    const activeHandler = (e) =>{
        setCustomerSiteData( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault();

        const { address1,address2,cityId,customerId,name,pinCode } = customerSiteData
        const newCustomerSite = {...customerSiteData,"isDstenabled": true,}
        const updatedDetails = {...customerSiteData, id : ids,"isDstenabled": true,}
        let isValid = true;
        const newErr = {
            nameErr :  "",
            address1Err :  "",
            address2Err : "",
            pinCodeErr : "",
            customerIdErr : "",
            cityIdErr : "",
        }
    

        if(!address1){
            newErr.address1Err = 'please enter valid details',
            isValid = false
        }
        if(!address2){
            newErr.address2Err = 'please enter valid details',
            isValid = false
        }
        if(!cityId){
            newErr.cityIdErr = 'please select',
            isValid = false
        }
        // if(!customerId){
        //     newErr.customerIdErr = 'please select',
        //     isValid = false
        // }
        if(!name){
            newErr.nameErr = 'please enter valid details',
            isValid = false
        }
        if(!pinCode){
            newErr.pinCodeErr = 'please enter valid details',
            isValid = false
        }
        if(!isValid){
            setCustomerSiteErr(newErr)
            return
        }

        modalName === 'add' ? 
            await customerSiteDetails(newCustomerSite)
            .then((res)=>{
                setIsOpen(false)
                customerSiteFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })
        :
            await updatedSiteDetails(updatedDetails)
            .then((res)=>{
                setIsOpen(false)
                customerSiteFetch()
                toast.success("updated successfully")

            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })
    }





  return (
    <div>
        {
            modalName === 'add' ?
            <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                <span> Add Customer Site </span>
            </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />

        }



<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Customer Site Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                    <form className="relative w-full   px-4 pb-3 pt-6  " onSubmit={submitHandler}  >
                        <div className='flex flex-col md:grid md:grid-cols-2 gap-2 w-full' >
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Name</label>
                                <input type="text" name='name' value={customerSiteData.name} onChange={changeHandler}  placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{customerSiteErr.nameErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Address 1</label>
                                <input type="text" name='address1' value={customerSiteData.address1} onChange={changeHandler}    placeholder="Address" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{customerSiteErr.address1Err}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Address 2</label>
                                <input type="textbox" name='address2' value={customerSiteData.address2} onChange={changeHandler}   placeholder="Address" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{customerSiteErr.address2Err}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Pincode</label>
                                <input type="textbox" name='pinCode' value={customerSiteData.pinCode} onChange={changeHandler}   placeholder="Pincode" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{customerSiteErr.pinCodeErr}</p>
                            </div>
                    
                        <div  className='' >
                                <label className="block mb-2 text-sm text-black dark:text-white">Customer Name</label>
                                
                                <select onChange={changeHandler}  name='customerId' defaultValue={customerSiteData.customerId} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                    <option disabled selected value='' >Select</option>
                                    {
                                        customerDrop?.map(((x)=>(
                                            <option value={x.id}>{x.name}</option>
                                        )))
                                    }
                                </select>
                                <p className='font-mono text-red-700' >{customerSiteErr.customerIdErr}</p>

                            </div>
                            <div  className='' >
                                <label className="block mb-2 text-sm text-black dark:text-white">City Name</label>
                                
                                <select onChange={changeHandler}  name='cityId' defaultValue={customerSiteData.cityId} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                    <option disabled selected value='' >Select</option>
                                    {
                                        cityDrop?.map(((x)=>(
                                            <option value={x.id}>{x.name}</option>
                                        )))
                                    }
                                </select>
                                <p className='font-mono text-red-700' >{customerSiteErr.cityIdErr}</p>

                            </div>
                            
                            <div className="flex items-center pt-4">
                                <input onChange={activeHandler}  id="disabled-checked-checkbox" type="checkbox" name='isActive' checked={customerSiteData.isActive} className="w-4 h-4 " />
                                <label  className="ml-2 text-md font-medium text-black dark:text-white  ">Is Active</label>
                            </div>
                        </div>

                        <div className='w-full flex justify-end items-end gap-2'>
                            <button type='button' onClick={()=>{setIsOpen(false);resetState()}} className="flex w-24 bg-red-500 items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-red-400  ">
                                <span> Cancel </span>
                            </button>
                            <button type='submit' className="flex w-24 bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                                <span> Submit </span>
                            </button>
                        </div>
                    </form>
                </Modal>
    </div>
  )
}

export default AddCustomerSite