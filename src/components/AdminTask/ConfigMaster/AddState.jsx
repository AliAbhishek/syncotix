import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { useMutation } from 'react-query';
import { createState, updateState } from '../../../utills/api/State';
import { AiFillEdit } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddState = ({modalName,stateName,stateCode,countryNames,stateId,active, stateFetch }) => {
    const [ isOpen, setIsOpen] = useState(false)
    const { mutateAsync : stateData } = useMutation('createState',createState)
    const { mutateAsync : updatedState } = useMutation('updateState',updateState)

    const [ stateDetails, setStateDetails ] = useState({
        name: stateName ? stateName : "",
        code: stateCode ? stateCode : "",
        countryId: 1,
        countryName: countryNames ? countryNames : "",
        IsActive : active ? active : true
    })

    const [ stateErr, setStateErr ] = useState({
        nameErr : "",
        codeErr : "",
        countrNameyErr : ""
    })
    const resetState = () =>{
        setStateDetails({
            name: stateName ? stateName : "",
            code: stateCode ? stateCode : "",
            countryId: 1,
            countryName: countryNames ? countryNames : "",
            IsActive : active ? active : true
        })

        setStateErr({
            nameErr : "",
            codeErr : "",
            countryNameErr : ""
        })
    }

    const changeHandler = (e) =>{
        setStateDetails( old => ({...old,[e.target.name] : e.target.value }))
        setStateErr( old => ({...old,[`${e.target.name}Err`] : "" }) )

    }

    const activeHandler = (e) =>{
        setStateDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async (e) =>{
        e.preventDefault()
        const { name, code, countryName } = stateDetails
        const updated = {...stateDetails,id : stateId}

        let isValid = true;

        const newErr = {
            nameErr : "",
            codeErr : "",
            countryNameErr : ""
        }

        if(name.length < 3){
            newErr.nameErr = "please provide a valid name",
            isValid = false
        }
        if(!code ){
            newErr.codeErr = "please provide a valid code",
            isValid = false

        }
        if(countryName.length < 3){
            newErr.countryNameErr = "please provide a valid name",
            isValid = false

        }
        if(!isValid){
            setStateErr(newErr)
            return
        }

        modalName === 'add' ?
            await stateData(stateDetails)
            .then((res)=>{
                setIsOpen(false)
                stateFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
            })
        :
            await updatedState(updated)
            .then((res)=>{
                setIsOpen(false)
                stateFetch()
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
                    <span> Add State </span>
                </button>
                :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
            }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="State Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full   px-4 pb-3 pt-6  "  >
                <div className='relative flex flex-col md:grid md:grid-cols-2 gap-2'>

                        <div  >
                            <label className="block mb-2  text-sm text-black dark:text-white">State Name</label>
                            <input  onChange={changeHandler} type="text" name='name' value={stateDetails.name} placeholder="State Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{stateErr.nameErr}</p>
                        </div>
                        <div className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">State Code</label>
                            <input onChange={changeHandler} type="text" name='code' value={stateDetails.code}  placeholder="State Code" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{stateErr.codeErr}</p>
                        </div>
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Country</label>
                            <select  onChange={changeHandler} name='countryName' value={stateDetails.countryName}  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option value='' >Select</option>
                                <option value='India'  >India</option>
                                <option value='Pakistan'  >Pakistan</option>
                            </select>
                            <p className='font-mono text-red-700' >{stateErr.countryNameErr}</p>

                        </div>
                        <div className="flex items-center pt-4">
                            <input onChange={activeHandler}  id="disabled-checked-checkbox" type="checkbox" name='IsActive' checked={stateDetails.IsActive} className="w-4 h-4 " />
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

export default AddState