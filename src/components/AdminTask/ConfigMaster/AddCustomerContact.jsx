import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createCustomer, customerList, customerUpdate } from '../../../utills/api/Customer';
import { contactList } from '../../../utills/api/Contact';
import { createCustomerContact, customerContactUpdate } from '../../../utills/api/CustomerContact';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddCustomerContact = ({modalName, ids, customerId, contactId, customerContactFetch, isActive  }) => {
    const [ isOpen, setIsOpen] = useState(false)

    const { mutateAsync : customerContactDetails } = useMutation('createCustomer',createCustomerContact)
    const { mutateAsync : updatedContactDetails } = useMutation('customerUpdate',customerContactUpdate)


    const [customerContactData, setCustomeContactData] = useState({
        customerId : customerId ? customerId :  "",
        contactId : contactId ? contactId : "",
        isActive : isActive ? isActive : true,
    })


    const [ customerContactDataErr, setCustomeContactDataErr ] = useState({
        customerIdErr : "",
        contactIdErr : "",
    })

    const resetState = () =>{
        setCustomeContactData({
            customerId : customerId ? customerId :  "",
            contactId : contactId ? contactId : "",
            isActive : isActive ? isActive : true,
        })
        setCustomeContactDataErr({
            customerIdErr : "",
            contactIdErr : "",
        })
    }



    const [ customerDrop , setCustomerDrop ] = useState([])
    const [ contactDrop , setcontactDrop ] = useState([])

    const [ customerFilter, setCustomerFilter ] = useState({
        sortOrder : "ModifiedOn",
        sortDirection : "desc",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

    const [ contactFilter, setContactFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })

   

    const {} = useQuery('customerList',customerList.bind(this,customerFilter),{ onSuccess : (x)=>setCustomerDrop(x?.items) })
    const {} = useQuery('userTypeList',contactList.bind(this,contactFilter),{ onSuccess : (x)=>setcontactDrop(x?.items) })


    const changeHandler = (e) =>{
        setCustomeContactData(old => ({...old,[e.target.name] : e.target.value  }) )
        setCustomeContactDataErr( old => ({...old,[`${e.target.name}Err`] : "" }) )

    }

    const activeHandler = (e) =>{
        setCustomeContactData( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault();

        const { customerId, contactId } = customerContactData
        const updatedData = {...customerContactData,id : ids }

        const newErr = {
            customerIdErr : "",
            contactIdErr : "",
        }
        let isValid = true

        if(!customerId){
            newErr.customerIdErr = 'please select',
            isValid = false
        }
        if(!contactId){
            newErr.contactIdErr = 'please select',
            isValid = false

        }

        if(!isValid){
            setCustomeContactDataErr(newErr)
            return
        }

        modalName === 'add' ?
            await customerContactDetails(customerContactData)
            .then((res)=>{
                setIsOpen(false)
                customerContactFetch()
                toast.success("added successfully")
                resetState()
      toast.error(err?.response?.data)

            })
            .catch((err)=>{
                console.log(err)
            })
        :
            await updatedContactDetails(updatedData)
            .then((res)=>{
                setIsOpen(false)
                customerContactFetch()
                toast.success("updated successfully")
                toast.error(err?.response?.data)

            })
            .catch((err)=>{
                console.log(err)
            })

    }





  return (
    <div>
        {
            modalName === 'add' ?
            <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                <span> Add Customer Contact </span>
            </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }



<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Customer Contact Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                    <form className="relative w-full   px-4 pb-3 pt-6 " onSubmit={submitHandler}  >
                        <div className='flex flex-col md:grid md:grid-cols-2 gap-2 w-full' >

                            <div  className='' >
                                <label className="block mb-2 text-sm text-black dark:text-white">Customer Name</label>
                                
                                <select onChange={changeHandler}  name='customerId' defaultValue={customerContactData.customerId} className="block w-full text-black px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                    <option disabled selected value='' >Select</option>
                                    {
                                        customerDrop?.map(((x)=>(
                                            <option value={x.id}>{x.name}</option>
                                        )))
                                    }
                                </select>
                                <p className='font-mono text-red-700' >{customerContactDataErr.customerIdErr}</p>

                            </div>

                            <div  className='' >
                                <label className="block mb-2 text-sm text-black dark:text-white">Contact</label>
                                
                                <select onChange={changeHandler}  name='contactId' defaultValue={customerContactData.contactId} className="block w-full text-black px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                    <option disabled selected value='' >Select</option>
                                    {
                                        contactDrop?.map(((x)=>(
                                            <option value={x.id}>{x.firstName}</option>
                                        )))
                                    }
                                </select>
                            <p className='font-mono text-red-700' >{customerContactDataErr.contactIdErr}</p>

                            </div>
                        </div>
                        <div className="flex items-center pt-4">
                            <input onChange={activeHandler}  id="disabled-checked-checkbox" type="checkbox" name='isActive' checked={customerContactData.isActive} className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white ">Is Active</label>
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

export default AddCustomerContact