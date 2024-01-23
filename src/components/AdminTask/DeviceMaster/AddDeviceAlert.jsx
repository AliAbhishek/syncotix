import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createDeviceStatus, updateDeviceStatus } from '../../../utills/api/DeviceStatus';
import { toast } from 'react-toastify';
import { deviceList } from '../../../utills/api/Device';
import { createDeviceAlert, updateDeviceAlert } from '../../../utills/api/DeviceAlert';
import { Modal } from '@mantine/core';


const AddDeviceAlert = ({modalName,deviceId,dt,aType,reportDate,temp_in_degree,isActive }) => {
    
    const [ isOpen, setIsOpen] = useState(false)

    const { mutateAsync: alertData} = useMutation('createDeviceAlert',createDeviceAlert)
    const { mutateAsync: updatedAlert} = useMutation('updateDeviceAlert',updateDeviceAlert)

    const [ alertDetails, setAlertDetails ] = useState({
        deviceId : deviceId ? deviceId : '',
        dt : dt ? dt : "",
        aType : aType ? aType : "",
        reportDate : reportDate ? reportDate : "",
        temp_in_degree : temp_in_degree ? temp_in_degree : "",
        isActive : isActive ? isActive :  false
    })

    const [ alertDetailsErr, setAlertDetailsErr ] = useState({
        deviceIdErr : '',
        dtErr : '',
        aTypeErr : '',
        reportDateErr : '',
        temp_in_degreeErr : '',
    })

    const [deviceDrop, setDeviceDrop] = useState([])
    const [ deviceFilter, setDeviceFilter ] = useState({
        "sortOrder": "",
        "sortDirection": "",
        "filterby": "",
        "pageNo": 1,
        "pageSize": 1000
    })
    
    const { } = useQuery('deviceList',deviceList.bind(this,deviceFilter),{ onSuccess : (x) =>setDeviceDrop(x?.items)} )



    const changeHandler = (e) =>{
        setAlertDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setAlertDetailsErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    

    const activeHandler = (e) =>{
        setAlertDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault();
        let isValid = true
        
        const { deviceId,dt,aType,reportDate,temp_in_degree } = alertDetails;

        const updatedDetails = {...alertDetails,id : ids}

        modalName === 'add' ?
            await statusData(alertDetails)
            .then((res)=>{
                setIsOpen(false)
                deviceStatusFetch()
                toast.success("added successfully")

            })
            .catch((err)=>{
                console.log(err)
            })

        :
            await updatedStatus(updatedDetails)
            .then((res)=>{
                setIsOpen()
                deviceStatusFetch()
                toast.success("updated successfully")

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
                <span> Add Device Alert </span>
            </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />

        }
          
          <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Device Alert Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full grid lg:grid-cols-2 gap-2  px-4 pb-3 pt-6  "  >

                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Device Name</label>
                            <select  defaultValue={alertDetails.de} name='deviceId' onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    deviceDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.deviceName}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{alertDetailsErr.deviceIdErr}</p>
                        </div>

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">DT</label>
                            <input type="text" name='dt' value={alertDetails.dt} onChange={changeHandler}   placeholder="DT" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{alertDetailsErr.dtErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">aType</label>
                            <input type="text" name='aType' value={alertDetails.aType} onChange={changeHandler}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{alertDetailsErr.aTypeErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">reportDate</label>
                            <input type="date" name='reportDate' value={alertDetails.reportDate} onChange={changeHandler}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{alertDetailsErr.reportDateErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Temp in Degree</label>
                            <input type="number" name='temp_in_degree' value={alertDetails.temp_in_degree} onChange={changeHandler}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{alertDetailsErr.temp_in_degreeErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={alertDetails.isActive} name='isActive' className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white  ">Is Active</label>
                        </div>

                        <button type='submit' className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                            <span> Submit </span>
                        </button>

                    </form>
          </Modal>
    </div>
  )
}

export default AddDeviceAlert