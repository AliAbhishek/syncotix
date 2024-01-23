import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createDeviceType, updateDeviceType } from '../../../utills/api/DeviceType';
import { toast } from 'react-toastify';
import { deviceList } from '../../../utills/api/Device';
import { createDeviceEnergy, updateDeviceEnergy } from '../../../utills/api/DeviceEnery';
import { Modal } from '@mantine/core';


const AddDeviceEnergy = ({modalName,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,deviceId,calcKvah,kwh,acrunhrs,toatalPwr,isActive,ids,energyFetch}) => {
    const [ isOpen, setIsOpen] = useState(false)



    const { mutateAsync : energyData } = useMutation('createDeviceEnergy',createDeviceEnergy)
    const { mutateAsync : updateEnergy } = useMutation('updateDeviceEnergy',updateDeviceEnergy)

    const [ deviceEnergyDetails, setDeviceEnergyDetails ] = useState({
        
        p1: p1 ? p1 :"",
        p2: p2 ? p2 :"",
        p3: p3 ? p3 :"",
        p4: p4 ? p4 :"",
        p5: p5 ? p5 :"",
        p6: p6 ? p6 :"",
        p7: p7 ? p7 :"",
        p8: p8 ? p8 :"",
        p9: p9 ? p9 :"",
        p10: p10 ? p10 :"",
        p11: p11 ? p11 :"",
        p12: p12 ? p12 :"",
        p13: p13 ? p13 :"",
        p14: p14 ? p14 :"",
        p15: p15 ? p15 :"",
        p16: p16 ? p16 :"",
        p17: p17 ? p17 :"",
        p18: p18 ? p18 :"",
        p19: p19 ? p19 :"",
        p20: p20 ? p20 :"",
        deviceId: deviceId ? deviceId :"",
        calcKvah: calcKvah ? calcKvah :"",
        kwh: kwh ? kwh :"",
        acrunhrs: acrunhrs ? acrunhrs :"",
        toatalPwr: toatalPwr ? toatalPwr :"",
        isActive: isActive ? isActive : true,
    })

    const [ deviceEnergyDetailsErr, setDeviceEnergyDetailsErr ] = useState({
        
        p1Err: "",
        p2Err: "",
        p3Err: "",
        p4Err: "",
        p5Err: "",
        p6Err: "",
        p7Err: "",
        p8Err: "",
        p9Err: "",
        p10Err: "",
        p11Err: "",
        p12Err: "",
        p13Err: "",
        p14Err: "",
        p15Err: "",
        p16Err: "",
        p17Err: "",
        p18Err: "",
        p19Err: "",
        p20Err: "",
        deviceIdErr: "",
        calcKvahErr: "",
        kwhErr: "",
        acrunhrsErr: "",
        toatalPwrErr: "",
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
        setDeviceEnergyDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setDeviceEnergyDetailsErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    

    const activeHandler = (e) =>{
        setDeviceEnergyDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) => {
        e.preventDefault();

        let isValid = true
        const newErr ={
            p1Err: "",
            p2Err: "",
            p3Err: "",
            p4Err: "",
            p5Err: "",
            p6Err: "",
            p7Err: "",
            p8Err: "",
            p9Err: "",
            p10Err: "",
            p11Err: "",
            p12Err: "",
            p13Err: "",
            p14Err: "",
            p15Err: "",
            p16Err: "",
            p17Err: "",
            p18Err: "",
            p19Err: "",
            p20Err: "",
            deviceIdErr: "",
            calcKvahErr: "",
            kwhErr: "",
            acrunhrsErr: "",
            toatalPwrErr: "",
        }

        const {p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,deviceId,calcKvah,kwh,acrunhrs,toatalPwr} = deviceEnergyDetails
        const updatedDetails = {...deviceEnergyDetails,id : ids}
        if(!deviceId){
            newErr.deviceIdErr = 'please select',
            isValid = false
        }
        if(!p1){
            newErr.p1Err = 'please enter valid details',
            isValid = false
        }
        if(!p2){
            newErr.p2Err = 'please enter valid details',
            isValid = false
        }
        if(!p3){
            newErr.p3Err = 'please enter valid details',
            isValid = false
        }
        if(!p4){
            newErr.p4Err = 'please enter valid details',
            isValid = false
        }
        if(!p5){
            newErr.p5Err = 'please enter valid details',
            isValid = false
        }
        if(!p6){
            newErr.p6Err = 'please enter valid details',
            isValid = false
        }
        if(!p7){
            newErr.p7Err = 'please enter valid details',
            isValid = false
        }
        if(!p8){
            newErr.p8Err = 'please enter valid details',
            isValid = false
        }
        if(!p9){
            newErr.p9Err = 'please enter valid details',
            isValid = false
        }
        if(!p10){
            newErr.p10Err = 'please enter valid details',
            isValid = false
        }
        if(!p11){
            newErr.p11Err = 'please enter valid details',
            isValid = false
        }
        if(!p12){
            newErr.p12Err = 'please enter valid details',
            isValid = false
        }
        if(!p13){
            newErr.p13Err = 'please enter valid details',
            isValid = false
        }
        if(!p14){
            newErr.p14Err = 'please enter valid details',
            isValid = false
        }
        if(!p15){
            newErr.p15Err = 'please enter valid details',
            isValid = false
        }
        if(!p16){
            newErr.p16Err = 'please enter valid details',
            isValid = false
        }
        if(!p17){
            newErr.p17Err = 'please enter valid details',
            isValid = false
        }
        if(!p18){
            newErr.p18Err = 'please enter valid details',
            isValid = false
        }
        if(!p19){
            newErr.p19Err = 'please enter valid details',
            isValid = false
        }
        if(!p20){
            newErr.p20Err = 'please enter valid details',
            isValid = false
        }
        if(!calcKvah){
            newErr.calcKvahErr = 'please enter valid details',
            isValid = false
        }
        if(!kwh){
            newErr.kwhErr = 'please enter valid details',
            isValid = false
        }
        if(!acrunhrs){
            newErr.acrunhrsErr = 'please enter valid details',
            isValid = false
        }
        if(!toatalPwr){
            newErr.toatalPwrErr = 'please enter valid details',
            isValid = false
        }
       if(!isValid){
            setDeviceEnergyDetailsErr(newErr)
            return
       }

       modalName === 'add' ? 
            await energyData(deviceEnergyDetails)
            .then((res)=>{
                setIsOpen(false)
                energyFetch()
                toast.success('added successfully')
            })
            .catch((err)=>{
                console.log(err)
            })
        :
            await updateEnergy(updatedDetails)
            .then((res)=>{
                setIsOpen(false)
                energyFetch()
                toast.success('updated successfully')
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
                    <span> Add Device Energy </span>
                </button>
            :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }
            
            <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Device Energy Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative flex flex-col md:grid md:grid-cols-4 gap-2 w-full  px-8 pb-3 pt-6  "  >
                    <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Device Name</label>
                            <select  defaultValue={deviceEnergyDetails.deviceId} name='deviceId' onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    deviceDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.deviceName}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.deviceIdErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p1</label>
                            <input type="text" name='p1' onChange={changeHandler} value={deviceEnergyDetails.p1}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p1Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p2</label>
                            <input type="text" name='p2' onChange={changeHandler} value={deviceEnergyDetails.p2}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p2Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p3</label>
                            <input type="text" name='p3' onChange={changeHandler} value={deviceEnergyDetails.p3}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p3Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p4</label>
                            <input type="text" name='p4' onChange={changeHandler} value={deviceEnergyDetails.p4}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p4Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p5</label>
                            <input type="text" name='p5' onChange={changeHandler} value={deviceEnergyDetails.p5}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p5Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p6</label>
                            <input type="text" name='p6' onChange={changeHandler} value={deviceEnergyDetails.p6}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p6Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p7</label>
                            <input type="text" name='p7' onChange={changeHandler} value={deviceEnergyDetails.p7}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p7Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p8</label>
                            <input type="text" name='p8' onChange={changeHandler} value={deviceEnergyDetails.p8}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p8Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p9</label>
                            <input type="text" name='p9' onChange={changeHandler} value={deviceEnergyDetails.p9}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p9Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p10</label>
                            <input type="text" name='p10' onChange={changeHandler} value={deviceEnergyDetails.p10}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p10Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p11</label>
                            <input type="text" name='p11' onChange={changeHandler} value={deviceEnergyDetails.p11}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p11Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p12</label>
                            <input type="text" name='p12' onChange={changeHandler} value={deviceEnergyDetails.p12}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p12Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p13</label>
                            <input type="text" name='p13' onChange={changeHandler} value={deviceEnergyDetails.p13}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p13Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p14</label>
                            <input type="text" name='p14' onChange={changeHandler} value={deviceEnergyDetails.p14}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p14Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p15</label>
                            <input type="text" name='p15' onChange={changeHandler} value={deviceEnergyDetails.p15}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p15Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p16</label>
                            <input type="text" name='p16' onChange={changeHandler} value={deviceEnergyDetails.p16}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p16Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p17</label>
                            <input type="text" name='p17' onChange={changeHandler} value={deviceEnergyDetails.p17}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p17Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p18</label>
                            <input type="text" name='p18' onChange={changeHandler} value={deviceEnergyDetails.p18}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p18Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p19</label>
                            <input type="text" name='p19' onChange={changeHandler} value={deviceEnergyDetails.p19}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p19Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> p20</label>
                            <input type="text" name='p20' onChange={changeHandler} value={deviceEnergyDetails.p20}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.p20Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> calcKvah</label>
                            <input type="text" name='calcKvah' onChange={changeHandler} value={deviceEnergyDetails.calcKvah}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.calcKvahErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> kwh</label>
                            <input type="text" name='kwh' onChange={changeHandler} value={deviceEnergyDetails.kwh}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.kwhErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> acrunhrs</label>
                            <input type="text" name='acrunhrs' onChange={changeHandler} value={deviceEnergyDetails.acrunhrs}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.acrunhrsErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> toatalPwr</label>
                            <input type="text" name='toatalPwr' onChange={changeHandler} value={deviceEnergyDetails.toatalPwr}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{deviceEnergyDetailsErr.toatalPwrErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" onChange={activeHandler} type="checkbox" checked={deviceEnergyDetails.isActive} name='isActive' className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white  ">Is Active</label>
                        </div>
                        <div></div>
                        <div></div>

                    <button type='submit' className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                        <span> Submit </span>
                    </button>

                    </form>
              </Modal>
    </div>
  )
}

export default AddDeviceEnergy