import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createDeviceSensor, updateDeviceSensor } from '../../../utills/api/DeviceSensor';
import { deviceList } from '../../../utills/api/Device';
import { toast } from 'react-toastify';
import { InputDate } from '../../../utills/helpers/DateFormat';
import { Modal } from '@mantine/core';



const AddDeviceSensor = ({modalName, sensorFetch,deviceId,sensorDeg,sensorFahr, sensorMeasure,sensorReserve,sensorActive,ids}) => {
    const [ isOpen, setIsOpen] = useState(false)

    const [ sensorData, setSensorData ] = useState({
        isActive : sensorActive ? sensorActive :  true,
        degree : sensorDeg ? sensorDeg : "",
        fahrenheit : sensorFahr ? sensorFahr : "",
        reserveValue : sensorReserve ? sensorReserve : '',
        measuredOn : sensorMeasure ? sensorMeasure : '',
        deviceId : deviceId ? deviceId :  ''

    })

    const [ sensorDataErr, setSensorDataErr ] = useState({
        degreeErr : '',
        fahrenheitErr : '',
        reserveValueErr : '',
        measuredOnErr :  '',
        deviceIdErr :  ''
    })

    const resetState = () =>{
        setSensorData({
            isActive : sensorActive ? sensorActive :  true,
        degree : sensorDeg ? sensorDeg : "",
        fahrenheit : sensorFahr ? sensorFahr : "",
        reserveValue : sensorReserve ? sensorReserve : '',
        measuredOn : sensorMeasure ? sensorMeasure : '',
        deviceId : deviceId ? deviceId :  ''

        })

        setSensorDataErr({
            degreeErr : '',
            fahrenheitErr : '',
            reserveValueErr : '',
            measuredOnErr :  '',
            deviceIdErr :  ''
        })
    }

    const [deviceDrop, setDeviceDrop] = useState([])
    const [ deviceFilter, setDeviceFilter ] = useState({
        "sortOrder": "",
        "sortDirection": "",
        "filterby": "",
        "pageNo": 1,
        "pageSize": 1000
    })
    
    const { } = useQuery('deviceList',deviceList.bind(this,deviceFilter),{ onSuccess : (x) =>setDeviceDrop(x?.items)} )

    const { mutateAsync : sensorDetails } = useMutation('createDeviceSensor',createDeviceSensor)
    const { mutateAsync : sensorUpdated } = useMutation('updateDeviceSensor',updateDeviceSensor)


    const changeHandler = (e) =>{
        setSensorData( old => ({ ...old, [e.target.name] : e.target.value }))
        setSensorDataErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }

    const activeHandler = (e) =>{
        setSensorData( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e)=>{
        e.preventDefault();

        const { deviceId, degree, fahrenheit,measuredOn,reserveValue } = sensorData
        const updatedSensor = {...sensorData,id : ids}
        const newErr = {
            degreeErr : '',
            fahrenheitErr : '',
            reserveValueErr : '',
            measuredOnErr :  '',
            deviceIdErr :  ''
        }
        let isValid = true


        if(!deviceId){
            newErr.deviceIdErr = "please Select",
            isValid = false

        }
        if(!degree  ){
            newErr.degreeErr = "please enter valid details",
            isValid = false

        }
        if(!fahrenheit  ){
            newErr.fahrenheitErr = "please enter valid details",
            isValid = false

        }
        if(!reserveValue){
            newErr.reserveValueErr = "please enter valid details",
            isValid = false

        }
        if(!measuredOn){
            newErr.measuredOnErr = "please Select",
            isValid = false

        }
        if(!isValid){
            setSensorDataErr(newErr)
            return
        }

        modalName === 'add' ? 

            await sensorDetails(sensorData)
            .then((res)=>{
                setIsOpen(false)
                sensorFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })

        :
        
            await sensorUpdated(updatedSensor)
            .then((res)=>{
                setIsOpen(false)
                sensorFetch()
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
                    <span> Add Device Sensor </span>
                </button>
                :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Device Sensor Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="w-full  px-4 pb-3 pt-6  "  >
                    <div className='relative flex flex-col md:grid md:grid-cols-2 gap-2 '>

                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Device Name</label>
                            <select  defaultValue={sensorData.deviceId} name='deviceId' onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    deviceDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.deviceName}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{sensorDataErr.deviceIdErr}</p>

                        </div>

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Degree </label>
                            <input type="number" name='degree' value={sensorData.degree} onChange={changeHandler}  placeholder="Degree" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{sensorDataErr.degreeErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Fahrenheit </label>
                            <input type="number" name='fahrenheit'  value={sensorData.fahrenheit}  onChange={changeHandler}  placeholder="Fahrenheit" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{sensorDataErr.fahrenheitErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Reserve Value </label>
                            <input type="text" name='reserveValue'  value={sensorData.reserveValue}  onChange={changeHandler}   placeholder="Reserve Value" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{sensorDataErr.reserveValueErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> Measured On</label>
                            <input type="date" name='measuredOn' value={InputDate(sensorData.measuredOn)}  onChange={changeHandler}   placeholder="Measured On" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{sensorDataErr.measuredOnErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={sensorData.isActive} name='isActive' className="w-4 h-4 " />
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

export default AddDeviceSensor