import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createRole, roleList, roleUpdate } from '../../../utills/api/Role';
import { toast } from 'react-toastify';
import Modals from '../../GlobalUses/Modals';
import { Modal } from '@mantine/core';


const AddRole = ({modalName,roleName,roleActive,roleId,roleFetch,code}) => {

    const [ isOpen, setIsOpen] = useState(false)

    const { mutateAsync : roleData } = useMutation('createRole',createRole)
    const { mutateAsync : updatedData } = useMutation('roleUpdate',roleUpdate)

    const [ roleDetails, setRoleDetails ] = useState({
        name : roleName ? roleName : "",
        code : code ? code : "",
        isActive : roleActive ? roleActive : true
    })

    const [ roleErr, setRoleErr ] = useState({
        nameErr : "",
        codeErr : ""
    })
    const resetState = () =>{
        setRoleDetails({
            name : roleName ? roleName : "",
        code : code ? code : "",
        isActive : roleActive ? roleActive : true
        })
        setRoleErr({
            nameErr : "",
            codeErr : ""
        })
    }

    const [ data, setData] = useState([])

    const [ roleFilter, setRoleFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10000
    })
   
    
    const {    } = useQuery(['roleList', roleFilter],roleList.bind(this,roleFilter),{ onSuccess : (x)=> {
        setData(x?.items);
    }})

    const changeHandler = (e) =>{
        setRoleDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setRoleErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }

    const activeHandler = (e) =>{
        setRoleDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const  submitHandler = async(e) =>{
        e.preventDefault()

        const { name, code } = roleDetails;
        const updatedRole = {...roleDetails,id : roleId}
        
        let isValid = true; 

        const newErr = {
            nameErr : "",
            codeErr : ""
        }

        if(!name){
            newErr.nameErr = "please provide valid name",
            isValid = false
        }

        if (data.some((x)=> x.name.toLowerCase() === name.toLowerCase())) {
            (newErr.nameErr = `${name} is already exist`), (isValid = false);
        }
        if(!code){
            newErr.codeErr = "please provide valid code",
            isValid = false
        }

        if(!isValid){
            setRoleErr(newErr)
            return
        }

        modalName === 'add' ?
            await roleData(roleDetails)
            .then((res)=>{
                setIsOpen(false)
                roleFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
                toast.error(err?.response?.data)

            })
        :
            await updatedData(updatedRole)
            .then((res)=>{
                setIsOpen(false)
                roleFetch()
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
                    <span> Add Role </span>
                </button>
            :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }

        <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Role Details"
                size='lg'
                closeOnClickOutside={false}
                classNames='bg-white dark:bg-black'
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form className="relative w-full  px-4 pb-3 pt-6  " onSubmit={submitHandler}  >
                    <div className='lg:grid lg:grid-cols-2 lg:gap-4' >

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Name</label>
                            <input type="text" name='name' value={roleDetails.name}  onChange={changeHandler}  placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{roleErr.nameErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm  text-black dark:text-white">Name Code</label>
                            <input type="text" name='code' value={roleDetails.code}  onChange={changeHandler}  placeholder="Name Code" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{roleErr.codeErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={roleDetails.isActive} name='isActive' className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white  ">Is Active</label>
                        </div>
                    </div>

                    <div className='w-full flex justify-end items-end gap-2'>
                        <button type='button' onClick={()=>{setIsOpen(false);resetState()}} className="flex w-24 bg-red-500 items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-red-400focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
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

export default AddRole