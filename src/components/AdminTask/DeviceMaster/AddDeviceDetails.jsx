import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { assetList } from '../../../utills/api/Asset';
import { customerSiteList } from '../../../utills/api/CustomerSite';
import { useMutation, useQuery } from 'react-query';
import { createDevice, deviceList, updateDevice } from '../../../utills/api/Device';
import { deviceStatusList } from '../../../utills/api/DeviceStatus';
import { deviceTypeList } from '../../../utills/api/DeviceType';
import DeviceDetails from './DeviceDetails';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddDeviceDetails = ({ deviceFetch,deviceActive,deviceIdExternal, modalName,detailName,detailNum,detailTag,detailDesc,detailCust,detailStatus,detailType,detailAsset,ids,deviceImei }) => {
    const [ isOpen, setIsOpen] = useState(false)

    const [ deviceDetails, setDeviceDetails ] = useState({
        isActive : deviceActive ? deviceActive : true,
        deviceName : detailName ? detailName : "",
        displayName : detailName ? detailName : "",
        deviceIdExternal : deviceIdExternal ? deviceIdExternal : "",
        deviceNo : detailNum ? detailNum : "",
        imeiNo : deviceImei ? deviceImei : "",
        assetTag : detailTag ? detailTag : "",
        description : detailDesc ? detailDesc : "",
        customerSiteId : detailCust ? detailCust : "",
        statusId : detailStatus ? detailStatus : "",
        deviceTypeId : detailType ? detailType : "",
        assetId : detailAsset ? detailAsset : "",

    })

       

    const [ deviceDetailsErr, setDeviceDetailsErr ] = useState({
        deviceNameErr : "",
        deviceNoErr : "",
        displayNameErr : "",
        deviceIdExternalErr : "",
        imeiNoErr : "",
        assetTagErr : "",
        descriptionErr : "",
        customerSiteIdErr : "",
        statusIdErr : "",
        deviceTypeIdErr : "",
        assetIdErr : "",
    })

    const resetState = () =>{
        setDeviceDetails({
            isActive : deviceActive ? deviceActive : true,
        deviceName : detailName ? detailName : "",
        displayName : detailName ? detailName : "",
        deviceIdExternal : deviceIdExternal ? deviceIdExternal : "",
        deviceNo : detailNum ? detailNum : "",
        imeiNo : deviceImei ? deviceImei : "",
        assetTag : detailTag ? detailTag : "",
        description : detailDesc ? detailDesc : "",
        customerSiteId : detailCust ? detailCust : "",
        statusId : detailStatus ? detailStatus : "",
        deviceTypeId : detailType ? detailType : "",
        assetId : detailAsset ? detailAsset : "",
        })

        setDeviceDetailsErr({
            deviceNameErr : "",
            displayNameErr : "",
            deviceIdExternalErr : "",
            deviceNoErr : "",
            imeiNoErr : "",
            assetTagErr : "",
            descriptionErr : "",
            customerSiteIdErr : "",
            statusIdErr : "",
            deviceTypeIdErr : "",
            assetIdErr : "",
        })
    }


    const [ assetDrop, setAssetDrop ] = useState([])   
    const [ customerDrop, setCustomerDrop ] = useState([])    
    const [ statusDrop, setStatusDrop ] = useState([])
    const [ deviceDrop, setDeviceDrop ] = useState([]) 

    const [ assetFilter, setAssetFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })

    const [ customerFilter, setCustomerFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })
    
    const [ deviceStatusFilter, setDeviceStatusFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

    const [ deviceTypeFilter, setDeviceTypeFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

    const { isFetching : assetFetch } = useQuery(['assetList', assetFilter],assetList.bind(this,assetFilter),{ onSuccess : (x)=> setAssetDrop(x?.items) })
    const { isFetching : customerFetch } = useQuery(['customerSiteList', customerFilter],customerSiteList.bind(this,customerFilter),{ onSuccess : (x)=> setCustomerDrop(x?.items) })
    const { isFetching : statusFetch } = useQuery(['deviceStatusList', deviceStatusFilter],deviceStatusList.bind(this,deviceStatusFilter),{ onSuccess : (x)=> setStatusDrop(x?.items) })
    const { isFetching : typeFetch } = useQuery(['deviceTypeList', deviceTypeFilter],deviceTypeList.bind(this,deviceTypeFilter),{ onSuccess : (x)=> setDeviceDrop(x?.items) })
    const { mutateAsync : deviceData } = useMutation('createDevice',createDevice)
    const { mutateAsync : deviceUpdate } = useMutation('updateDevice',updateDevice)

    
    const changeHandler = (e) =>{
        setDeviceDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setDeviceDetailsErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    

    const activeHandler = (e) =>{
        setDeviceDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault();
        const customerId = parseInt(localStorage.getItem('customerId'), 10) 


        const newErr = {
            deviceNameErr : "",
            deviceNoErr : "",
            deviceIdExternalErr : "",
            imeiNoErr : "",
            assetTagErr : "",
            descriptionErr : "",
            customerSiteIdErr : "",
            statusIdErr : "",
            deviceTypeIdErr : "",
            assetIdErr : "",
        }

        let isValid = true;
        const { deviceName,deviceNo, displayName, assetTag,deviceIdExternal, description,customerSiteId, statusId, deviceTypeId,assetId,imeiNo} = deviceDetails
        const updatedDeviceDetails = {...deviceDetails,id : ids,customerId}
        const newDevice = {...deviceDetails,customerId}

        if(!deviceName){
            newErr.deviceNameErr = 'please enter valid name',
            isValid = false
        }
        if(!deviceNo){
            newErr.deviceNoErr = 'please enter valid number',
            isValid = false
        }
        if(!displayName){
            newErr.displayNameErr = 'please enter valid display name',
            isValid = false
        }
        if(!deviceIdExternal){
            newErr.deviceIdExternalErr = 'please enter valid deviceIdExternal',
            isValid = false
        }
        if(!imeiNo){
            newErr.imeiNoErr = 'please enter valid number',
            isValid = false
        }
        if(!assetTag){
            newErr.assetTagErr = 'please enter valid tag',
            isValid = false
        }
         
        if(!customerSiteId){
            newErr.customerSiteIdErr = 'please select',
            isValid = false
        }
        if(!statusId){
            newErr.statusIdErr = 'please select',
            isValid = false
        }
        if(!deviceTypeId){
            newErr.deviceTypeIdErr = 'please select',
            isValid = false
        }
        if(!assetId){
            newErr.assetIdErr = 'please select',
            isValid = false
        }
        if(!isValid){
            setDeviceDetailsErr(newErr)
            return
        }

        modalName === 'add' ? 
            await deviceData(newDevice)
            .then((res)=>{
                setIsOpen(false)
                deviceFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

                // var colonIndex = err?.response?.data.indexOf(':');
                // var errName = err?.response?.data.substring(0,colonIndex).trim();
                // const after = err?.response?.data.slice(colonIndex+1).trim()

                // if(errName == 'Device Name'){
                //     setDeviceDetailsErr( old => ({ ...old,deviceNameErr : after }))
                // }else  if(errName == 'Device Number'){
                //     setDeviceDetailsErr( old => ({ ...old,deviceNoErr : after }))
                // }
            })
        : 
            await deviceUpdate(updatedDeviceDetails)
            .then((res)=>{
                setIsOpen(false)
                deviceFetch()
                toast.success("updated successfully")
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

                // var colonIndex = err?.response?.data.indexOf(':');
                // var errName = err?.response?.data.substring(0,colonIndex).trim();
                // const after = err?.response?.data.slice(colonIndex+1).trim()

                // if(errName == 'Device Name'){
                //     setDeviceDetailsErr( old => ({ ...old,deviceNameErr : after }))
                // }else  if(errName == 'Device Number'){
                //     setDeviceDetailsErr( old => ({ ...old,deviceNoErr : after }))
                // } 
            })
    }



    
  return (
    <div>
        {
            modalName === 'add' ? 
            <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                <span> Add Device Details </span>
            </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />

        }
    
    <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Device Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="  px-4 pb-3 pt-6  "  >
                    <div className='relative w-full flex flex-col md:grid grid-cols-2 gap-2 '>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Device Name</label>
                            <input type="text" name='deviceName' value={deviceDetails.deviceName} onChange={changeHandler}   placeholder="Device Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceDetailsErr.deviceNameErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Display Name</label>
                            <input type="text" name='displayName' value={deviceDetails.displayName} onChange={changeHandler}   placeholder="Device Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceDetailsErr.displayNameErr}</p>
                          
                        </div>

                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Customer Site</label>
                            <select name='customerSiteId' value={deviceDetails.customerSiteId}  onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    customerDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.name}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{deviceDetailsErr.customerSiteIdErr}</p>
                        </div>
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Device Type</label>
                            <select name='deviceTypeId' value={deviceDetails.deviceTypeId}  onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    deviceDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.name}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{deviceDetailsErr.deviceTypeIdErr}</p>
                        </div>
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Status</label>
                            <select name='statusId' value={deviceDetails.statusId}  onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    statusDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.name}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{deviceDetailsErr.statusIdErr}</p>
                        </div>
                        
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Asset</label>
                            <select name='assetId' value={deviceDetails.assetId}  onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    assetDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.name}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{deviceDetailsErr.assetIdErr}</p>
                        </div> 
                          <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Device Number</label>
                            <input type="text" name='deviceNo' value={deviceDetails.deviceNo} onChange={changeHandler}    placeholder="Device Number" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceDetailsErr.deviceNoErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Device Id External</label>
                            <input type="text" name='deviceIdExternal' value={deviceDetails.deviceIdExternal} onChange={changeHandler}    placeholder="Device Number" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceDetailsErr.deviceIdExternalErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Imei No</label>
                            <input type="text" name='imeiNo' value={deviceDetails.imeiNo} onChange={changeHandler}    placeholder="Iemei No" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceDetailsErr.imeiNoErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Asset Tag</label>
                            <input type="text" name='assetTag' value={deviceDetails.assetTag} onChange={changeHandler}    placeholder="Asset Tag" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceDetailsErr.assetTagErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Description</label>
                            <input type="text" name='description' value={deviceDetails.description}  onChange={changeHandler}   placeholder="Description" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceDetailsErr.descriptionErr}</p>
                        </div>
                       
                        
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={deviceDetails.isActive} name='isActive' className="w-4 h-4 " />
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

export default AddDeviceDetails