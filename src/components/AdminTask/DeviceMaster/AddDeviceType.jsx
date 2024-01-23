import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation } from 'react-query';
import { createDeviceType, updateDeviceType } from '../../../utills/api/DeviceType';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddDeviceType = ({modalName, typeName, typeActive, ids, deviceTypeFetch}) => {
    const [ isOpen, setIsOpen] = useState(false)


    const { mutateAsync : deviceData } = useMutation('createDeviceType',createDeviceType)
    const { mutateAsync : updateDevice } = useMutation('updateDeviceType',updateDeviceType)

    const [ deviceTypeDetails, setDeviceTypeDetails ] = useState({
        name : typeName ? typeName : '',
        isActive : typeActive ? typeActive : true
    })
    const [typeErr, setTypeErr ] = useState({
        nameErr : '',
    })

    const resetState = () =>{
        setDeviceTypeDetails({
            name : typeName ? typeName : '',
        isActive : typeActive ? typeActive : true
        })
        setTypeErr({
        nameErr : '',

        })
    }

    const changeHandler = (e) =>{
        setDeviceTypeDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setTypeErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    

    const activeHandler = (e) =>{
        setDeviceTypeDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) => {
        e.preventDefault();

        const { name } = deviceTypeDetails;
        const updatedData = {...deviceTypeDetails,id : ids}
        let isValid = true
        const newErr = {
            nameErr : '',
        }   

        if(!name){
            newErr.nameErr = 'please enter valid name',
            isValid = false
        }
        if(!isValid){
            setTypeErr(newErr)
            return
        }

        modalName === 'add' ?
        await deviceData(deviceTypeDetails)
        .then((res)=>{
            setIsOpen(false)
            deviceTypeFetch()
            toast.success("added successfully")
            resetState()
        })
        .catch((err)=>{
            console.log(err)
      toast.error(err?.response?.data)

        })

        :
        await updateDevice(updatedData)
        .then((res)=>{
                 setIsOpen(false)
            deviceTypeFetch()
            toast.success("updated successfully")

        })
        .catch((err)=>{
            console.log(err)
      toast.error(err?.response?.data)

        })
        console.log(deviceTypeDetails)
    }

  return (
    <div>
        {
            modalName === 'add' ?
                <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                    <span> Device type  Details</span>
                </button>
            :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }
            
            <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Device Type Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full  px-4 pb-3 pt-6  "  >
                <div className=' flex flex-col md:grid md:grid-cols-2 gap-2'>

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> Name</label>
                            <input type="text" name='name' onChange={changeHandler} value={deviceTypeDetails.name}   placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{typeErr.nameErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={deviceTypeDetails.isActive} name='isActive' className="w-4 h-4 " />
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

export default AddDeviceType