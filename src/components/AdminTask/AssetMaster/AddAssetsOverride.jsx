import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { assetList } from '../../../utills/api/Asset';
import { customerSiteList } from '../../../utills/api/CustomerSite';
import { useMutation, useQuery } from 'react-query';
import { createAssetOverride, updateAssetOverride } from '../../../utills/api/AssetOverride';
import { toast } from 'react-toastify';
import { InputDate } from '../../../utills/helpers/DateFormat';
import { Modal } from '@mantine/core';


const AddAssetOverride = ({modalName,overId,overName,overStart,overEnd,overActive,ids, assetOverFetch}) => {
    const [ isOpen, setIsOpen] = useState(false)
    const { mutateAsync : assetOverData } = useMutation('createAssetOverride',createAssetOverride)
    const { mutateAsync : updatedOverride } = useMutation('updateAssetOverride',updateAssetOverride)

    const [assetDrop, setAssetDrop] = useState([])    
    const [siteDrop, seSiteDrop] = useState([])    
    const [ assetFilter, setAssetFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })
    const [ siteFilter, setSiteFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })
    const { isFetching : listFetch } = useQuery(['assetList', assetFilter],assetList.bind(this,assetFilter),{ onSuccess : (x)=> setAssetDrop(x?.items) })
    const { isFetching : siteFetch } = useQuery(['customerSiteList', siteFilter],customerSiteList.bind(this,siteFilter),{ onSuccess : (x)=> seSiteDrop(x?.items) })

    const [ assetOverDetails, setAsssetOverDetails ] = useState({
        isActive : overActive ? overActive : true,
        assetId : overId ? overId : '',
        customerSiteId : localStorage.getItem('siteId'),
       
        startDate : overStart ? overStart : '',
        endDate : overEnd ? overEnd : '',
    })
    const [ assetOverErr, setAssetOverErr ] = useState({
        assetIdErr : '',
        nameErr : '',  siteIdErr : '',
        startDateErr : '',
        endDateErr : '',
    })

    const resetState = () =>{
        setAsssetOverDetails({
            isActive : overActive ? overActive : true,
            assetId : overId ? overId : '',
            customerSiteId : localStorage.getItem('siteId'),
           
            startDate : overStart ? overStart : '',
            endDate : overEnd ? overEnd : '',
        })
        setAssetOverErr({
            assetIdErr : '',
            siteIdErr : '',
           
            startDateErr : '',
            endDateErr : '',
        })
    }

    const changeHandler = (e) =>{
        setAsssetOverDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setAssetOverErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    const changeSiteHandler = (e) =>{
         setAsssetOverDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setAssetOverErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    

    const activeHandler = (e) =>{
        setAsssetOverDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault();
        const customerId = parseInt(localStorage.getItem('customerId'), 10) 

        const { assetId,  startDate, endDate,customerSiteId } = assetOverDetails;
        const updatedData = {...assetOverDetails,id : ids,customerId}
        const newOver = {...assetOverDetails,customerId}


        const newErr = {
            assetIdErr : '',
            siteIdErr : '',
          
            startDateErr : '',
            endDateErr : '',
        }

        let isValid = true;

        if(!customerSiteId){
            newErr.siteIdErr = 'please select Site',
            isValid = false
        }
        if(!assetId){
            newErr.assetIdErr = 'please select Asset',
            isValid = false
        }
       
        if(!startDate){
            newErr.startDateErr = 'please select',
            isValid = false
        }
        if(!endDate){
            newErr.endDateErr = 'please select',
            isValid = false
        }
        if(!isValid){
            setAssetOverErr(newErr)
            return
        }

        modalName === 'add' ?
            await assetOverData(newOver)
            .then((res)=>{
                setIsOpen(false)
                assetOverFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })
        :
            await updatedOverride(updatedData)
            .then((res)=>{
                setIsOpen(false)
                assetOverFetch()
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
                <span> Add Asset Override </span>
            </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Asset Override Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full  px-4 pb-3 pt-6  "  >
                <div className='w-full flex flex-col md:grid md:grid-cols-2 gap-2 ' >
 
                        {/* <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Customer Site</label>
                            <select name='customerSiteId' value={assetOverDetails.customerSiteId}  onChange={changeSiteHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    siteDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.name}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{assetOverErr.siteIdErr}</p>
                        </div> */}
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Asset</label>
                            <select name='assetId' value={assetOverDetails.assetId}  onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    assetDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.name}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{assetOverErr.assetIdErr}</p>
                        </div>
                    
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Start Date Time</label>
                            <input type="date" name='startDate' value={InputDate(assetOverDetails.startDate)} onChange={changeHandler} placeholder="Start Date Time" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{assetOverErr.startDateErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">End Date Time</label>
                            <input type="date" name='endDate' value={InputDate(assetOverDetails.endDate)} onChange={changeHandler} placeholder="End Date Time" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{assetOverErr.endDateErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={assetOverDetails.isActive} name='isActive' className="w-4 h-4 " />
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

export default AddAssetOverride