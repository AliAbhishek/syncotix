import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { customerSiteList } from '../../../utills/api/CustomerSite';
import { useMutation, useQuery } from 'react-query';
import { createSite, updateSite } from '../../../utills/api/Site';
import { toast } from 'react-toastify';
import { InputDate } from '../../../utills/helpers/DateFormat';
import { Modal } from '@mantine/core';


const AddSite = ({modalName,siteFetch,customerSiteId,icendTime,icsignOffGivenBy,icsignOffTime,icstartTime,ids, isActive, icsignOffFlag }) => {

    const [ isOpen, setIsOpen] = useState(false)
    const [ siteDrop, setSiteDrop ] = useState([])

    const [ siteDetails, setSiteDetails ] = useState({
        customerSiteId : customerSiteId ? customerSiteId : "",
        icstartTime : icstartTime ? icstartTime : "",
        icendTime : icendTime ? icendTime : "",
        icsignOffGivenBy : icsignOffGivenBy ? icsignOffGivenBy : "",
        icsignOffTime : icsignOffTime ? icsignOffTime : "",
        icsignOffFlag :  icsignOffFlag ? icsignOffFlag :"",
        isActive : isActive ? isActive : true
    })

    const [ siteDetailsErr, setSiteDetailsErr ] = useState({
        customerSiteIdErr : "",
        icstartTimeErr : "",
        icendTimeErr : "",
        icsignOffGivenByErr : "",
        icsignOffTimeErr : "",
    })

    const resetState = () =>{
        setSiteDetails({
            customerSiteId : customerSiteId ? customerSiteId : "",
            icstartTime : icstartTime ? icstartTime : "",
            icendTime : icendTime ? icendTime : "",
            icsignOffGivenBy : icsignOffGivenBy ? icsignOffGivenBy : "",
            icsignOffTime : icsignOffTime ? icsignOffTime : "",
            icsignOffFlag :  icsignOffFlag ? icsignOffFlag :"",
            isActive : isActive ? isActive : true
        })
        setSiteDetailsErr({
            customerSiteIdErr : "",
            icstartTimeErr : "",
            icendTimeErr : "",
            icsignOffGivenByErr : "",
            icsignOffTimeErr : "",
        })
    }

    const [ customerSiteFilter, setCustomerSiteFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

    const {} = useQuery(['customerSiteList', customerSiteFilter],customerSiteList.bind(this,customerSiteFilter),{ onSuccess : (x)=> setSiteDrop(x?.items) })
    const { mutateAsync : siteData } = useMutation('createSite',createSite)
    const { mutateAsync : updatedSite } = useMutation('updateSite',updateSite)

    
    const changeHandler = (e) =>{
        setSiteDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setSiteDetailsErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    

    const activeHandler = (e) =>{
        setSiteDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault();
        const customerId = parseInt(localStorage.getItem('customerId'), 10) 

        const newErr = {
            customerSiteIdErr : "",
            icstartTimeErr : "",
            icendTimeErr : "",
            icsignOffGivenByErr : "",
            icsignOffTimeErr : "",
        }
        const { customerSiteId,icendTime,icsignOffGivenBy,icsignOffTime,icstartTime } = siteDetails

        const updated = {...siteDetails, id : ids,customerId}
        const newSite = {...siteDetails,customerId}
        let isValid = true;

        if(!customerSiteId){
            newErr.customerSiteIdErr = "please Select",
            isValid = false
        }
        if(!icendTime){
            newErr.icendTimeErr = "please Select",
            isValid = false
        }
        if(!icsignOffGivenBy){
            newErr.icsignOffGivenByErr = "please enter valid details",
            isValid = false
        }
        if(!icsignOffTime){
            newErr.icsignOffTimeErr = "please Select",
            isValid = false
        }
        if(!icstartTime){
            newErr.icstartTimeErr = "please Select",
            isValid = false
        }
        if(!isValid){
            setSiteDetailsErr(newErr)
            return
        }


        modalName === 'add' ? 
        
            await siteData(newSite)
            .then((res)=>{
                setIsOpen(false)
                siteFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })
        :
            await updatedSite(updated)
            .then((res)=>{
                setIsOpen(false)
                siteFetch()
                toast.success("updated successfully")

            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })

    }

  return (
    <div>
        { modalName  === 'add' ?
            <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                <span> Add Site Information I&C </span>
            </button>
        :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }
        <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Site Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="  px-4 pb-3 pt-6 "  >
                    <div className='relative w-full flex flex-col md:grid md:grid-cols-2 gap-2'>
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Customer Site Name</label>
                            <select onChange={changeHandler}  name='customerSiteId' defaultValue={siteDetails.customerSiteId} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    siteDrop?.map(((x)=>(
                                        <option value={x.id}>{x.name}</option>
                                    )))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{siteDetailsErr.customerSiteIdErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">IC SignOff Given By</label>
                            <input type="text" name='icsignOffGivenBy' value={siteDetails.icsignOffGivenBy} onChange={changeHandler}   placeholder="IC SignOff Given By" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{siteDetailsErr.icsignOffGivenByErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">IC Start Time</label>
                            <input type="date" name='icstartTime' value={InputDate(siteDetails?.icstartTime)} onChange={changeHandler}   placeholder="IC Start Time" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{siteDetailsErr.icstartTimeErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">IC End Time</label>
                            <input type="date" name='icendTime' value={InputDate(siteDetails?.icendTime)} onChange={changeHandler} placeholder="IC End Time" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{siteDetailsErr.icendTimeErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">IC SignOff Time</label>
                            <input type="date" name='icsignOffTime' value={InputDate(siteDetails?.icsignOffTime)} onChange={changeHandler} placeholder="IC SignOff Time" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{siteDetailsErr.icsignOffTimeErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={siteDetails.icsignOffFlag} name='icsignOffFlag' className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white  ">IC signOff Flag</label>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={siteDetails.isActive} name='isActive' className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white  ">Is Active</label>
                        </div>
                        <div></div>
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

export default AddSite