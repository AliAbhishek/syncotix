import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { customerSiteList } from '../../../utills/api/CustomerSite';
import { useMutation, useQuery } from 'react-query';
import { SiteOperationUser, createSiteOperation } from '../../../utills/api/SiteOperationDetails';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddSiteOpertaions = ({modalName,window,startTime,endTime,customerSiteId,dayOfWeek,isActive,ids,siteFetch }) => {
    const [ isOpen, setIsOpen] = useState(false)
    const [ siteDrop, setSiteDrop ] = useState([])

    const [ operationDetails, setOperationDetails ] = useState({
        window : window ? window : "",
        startTime : startTime ? startTime : "",
        endTime : endTime ? endTime : "" ,
        customerSiteId : customerSiteId ? customerSiteId : "",
        dayOfWeek : dayOfWeek ? dayOfWeek : 0,
        isActive : isActive ? isActive : true
    });
    const [ operationDetailsErr, setOperationDetailsErr ] = useState({
        windowErr : "",
        startTimeErr : "",
        endTimeErr : "" ,
        customerSiteIdErr : "",
        dayOfWeekErr : ""
    });

    const resetState = () =>{
        setOperationDetails({
            window : window ? window : "",
            startTime : startTime ? startTime : "",
            endTime : endTime ? endTime : "" ,
            customerSiteId : customerSiteId ? customerSiteId : "",
            dayOfWeek : dayOfWeek ? dayOfWeek : 0,
            isActive : isActive ? isActive : true
        })
        setOperationDetailsErr({
            windowErr : "",
            startTimeErr : "",
            endTimeErr : "" ,
            customerSiteIdErr : "",
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

    const { mutateAsync : siteData } = useMutation('createSiteOperation',createSiteOperation )
    const { mutateAsync : siteUpdatedData } = useMutation('SiteOperationUser',SiteOperationUser )
    
    const changeHandler = (e) =>{
        
        setOperationDetails(old =>({...old,[e.target.name] : e.target.value }) )
        setOperationDetailsErr(old =>({...old,[`${e.target.name}Err`] : "" }) )
    }
    const TimeHandler = (e) =>{
        setOperationDetails(old =>({...old,[e.target.name] : `${e.target.value}:00` }) )
        setOperationDetailsErr(old =>({...old,[`${e.target.name}Err`] : "" }) )
    }

    const activeHandler = (e) =>{
        setOperationDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault()
        const customerId = parseInt(localStorage.getItem('customerId'), 10) 

        let isValid = true
        const  { customerSiteId,endTime,startTime,window,dayOfWeek } = operationDetails
        const updatedDetails = {...operationDetails,id : ids,customerId}
        const newOperation = {...operationDetails,customerId}
        const newErr = {
            windowErr : "",
            startTimeErr : "",
            endTimeErr : "" ,
            customerSiteIdErr : "",
        }


        if(!customerSiteId){
            newErr.customerSiteIdErr = 'please select',
            isValid = false
        }

        if(!endTime){
            newErr.endTimeErr = 'please enter valid details',
            isValid = false
        }
        if(!startTime){
            newErr.startTimeErr = 'please enter valid details',
            isValid = false
        }
        if(!window){
            newErr.windowErr = 'please enter valid details',
            isValid = false
        }
        if(!dayOfWeek){
            newErr.dayOfWeekErr = 'please enter valid details',
            isValid = false
        }

        if(!isValid){
            setOperationDetailsErr(newErr)
            return
        }

        modalName === 'add' ?
            await siteData(newOperation)
            .then((res)=>{
                resetState()
                toast.success("added successfully")
                siteFetch()
                setIsOpen(false)
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })

        :
            await siteUpdatedData(updatedDetails)
            .then((res)=>{
                toast.success("Updated successfully")
                siteFetch()
                setIsOpen(false)

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
            <button onClick={()=>setIsOpen(true)}  className="flex items-center justify-between bg-[#4884C0]  px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span> Add Site Operations </span>
            </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }
        
        <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Site operation Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full  px-4 pb-3 pt-6   "  >
                    <div className='lg:grid lg:grid-cols-2 gap-2  '>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Window</label>
                            <input  onChange={changeHandler} value={operationDetails.window} type="text" name='window'   placeholder="Window" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{operationDetailsErr.windowErr}</p>
                        </div>
                        <div  className='' >
                        
                            <label className="block mb-2 text-sm text-black dark:text-white">Customer Site </label>
                            <select  name='customerSiteId' onChange={changeHandler} defaultValue={operationDetails.customerSiteId}  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    siteDrop?.map(((x)=>(
                                        <option value={x.id}>{x.name}</option>
                                    )))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{operationDetailsErr.customerSiteIdErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">startTime</label>
                            <input type="time" name='startTime' onChange={TimeHandler} value={operationDetails.startTime}   placeholder="startTime" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{operationDetailsErr.startTimeErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">endTime</label>
                            <input type="time" name='endTime'  onChange={TimeHandler} value={operationDetails.endTime}  placeholder="endTime" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{operationDetailsErr.endTimeErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">dayOfWeek</label>
                            <input type="number" name='dayOfWeek' onChange={changeHandler} value={operationDetails.dayOfWeek}   placeholder="dayOfWeek" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{operationDetailsErr.dayOfWeekErr}</p>
                        </div>
                        
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={operationDetails.isActive} name='isActive' className="w-4 h-4 " />
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

export default AddSiteOpertaions