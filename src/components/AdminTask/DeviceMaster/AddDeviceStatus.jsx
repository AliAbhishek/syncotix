import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation } from 'react-query';
import { createDeviceStatus, updateDeviceStatus } from '../../../utills/api/DeviceStatus';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddDeviceStatus = ({modalName, statusName, ids, statusActive, deviceStatusFetch }) => {
    
    const [ isOpen, setIsOpen] = useState(false)

    const { mutateAsync: statusData} = useMutation('createDeviceStatus',createDeviceStatus)
    const { mutateAsync: updatedStatus} = useMutation('updateDeviceStatus',updateDeviceStatus)

    const [ statusDetails, setStatusDetails ] = useState({
        name : statusName ? statusName : '',
        isActive : statusActive ? statusActive :  true
    })

    const [ statusDetailsErr, setStatusDetailsErr ] = useState({
        nameErr : '',
    })

    const resetState = () =>{
        setStatusDetails({
            name : statusName ? statusName : '',
        isActive : statusActive ? statusActive :  true
        })
        setStatusDetailsErr({
        nameErr : '',

        })
    }

    const changeHandler = (e) =>{
        setStatusDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setStatusDetailsErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    

    const activeHandler = (e) =>{
        setStatusDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault();

        const { name } = statusDetails;
        const updatedDetails = {...statusDetails,id : ids}
        let isValid = true
        const newErr = {
            nameErr : ''
        }

        if(!name){
            newErr.nameErr = 'please enter valid name',
            isValid = false
        }

        if(!isValid){
            setStatusDetailsErr(newErr)
            return
        }

        modalName === 'add' ?
            await statusData(statusDetails)
            .then((res)=>{
                setIsOpen(false)
                deviceStatusFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

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
      toast.error(err?.response?.data)

            })





    }


  return (
    <div>
        {
            modalName === 'add' ? 
            <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                <span> Add Device Status </span>
            </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />

        }
          
          <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Device Status Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full  px-4 pb-3 pt-6  "  >
                <div className=' flex flex-col md:grid md:grid-cols-2 gap-2'>

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white"> Name</label>
                            <input type="text" name='name' value={statusDetails.name} onChange={changeHandler}   placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{statusDetailsErr.nameErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={statusDetails.isActive} name='isActive' className="w-4 h-4 " />
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

export default AddDeviceStatus