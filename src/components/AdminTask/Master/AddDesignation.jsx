import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createDesignation, designationList, updateDesignation } from '../../../utills/api/Designation';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddDesignation = ({modalName,designationId,designationName,designationActive, desigFetch, code}) => {
    const [ isOpen, setIsOpen] = useState(false)
    
    const { mutateAsync : designationDetails } = useMutation('createDesignation',createDesignation)
    const { mutateAsync : updatedDetails } = useMutation('updateDesignation',updateDesignation)


    const [ designationData, setDesignationData ] = useState({
        name : designationName ? designationName : "",
        code : code ? code  : "",
        isActive : designationActive ? designationActive : true
    })

    const [ desginationErr, setDesignationErr ] = useState({
        nameErr : "",
        codeErr : ""
    })

    const [data, setData] = useState([]);

    const [roleFilter, setRoleFilter] = useState({
      sortOrder: "",
      sortDirection: "",
      filterby: "",
      pageNo: 1,
      pageSize: 10,
    });
  
    const {  } = useQuery(
      ["designationList", roleFilter],
      designationList.bind(this, roleFilter),
      {
        onSuccess: (x) => {
          setData(x?.items);
        },
      }
    );



    const resetState = () =>{
        setDesignationData({
            name : designationName ? designationName : "",
        code : code ? code  : "",
        isActive : designationActive ? designationActive : true
        })
        setDesignationErr({
            nameErr : "",
            codeErr : ""
        })
    }

    const changeHandler = (e) =>{
        setDesignationData( old => ({...old,[e.target.name] : e.target.value }))
        setDesignationErr( old => ({ ...old, [`${e.target.name}Err`] : "" }))

    }

    const activeHandler = (e) =>{
        setDesignationData( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) => {
        e.preventDefault()

        

        const { name, code } = designationData;
        const updatedDesignation = {...designationData,id : designationId }

        let isValid = true;

        const newErr = {
            nameErr : "",
            codeErr : ""
        }


        if(!name){
            newErr.nameErr = "please enter valid name",
            isValid = false
        }
        if (data.some((x)=> x.name.toLowerCase() === name.toLowerCase())) {
            (newErr.nameErr = `${name} is already exist`), (isValid = false);
        }
        if(!code){
            newErr.codeErr = "please enter valid code",
            isValid = false
        }
        if(!isValid){
            setDesignationErr(newErr)
            return
        }

        modalName === 'add' ? 
            await designationDetails(designationData)
            .then((res)=>{
                setIsOpen(false)
                desigFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
                toast.error(err?.response?.data)

            })
        :
            await updatedDetails(updatedDesignation)
            .then((res)=>{
                setIsOpen(false)
                desigFetch()
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
            <button onClick={()=>setIsOpen(true)}  className="flex items-center bg-[#4884C0] justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                <span> Add Designation </span>
            </button> 
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }
      

      <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Designation Details"
                size='lg'
                closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form className="relative w-full   px-4 pb-3 pt-6" onSubmit={submitHandler}  >
                <div className='lg:grid lg:grid-cols-2 lg:gap-4' >

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Designation</label>
                            <input  type="text" name='name' onChange={changeHandler} value={designationData.name}  placeholder="Designation" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{desginationErr.nameErr} </p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm  text-black dark:text-white">Designation Code</label>
                            <input  type="text" name='code' onChange={changeHandler} value={designationData.code}  placeholder="Designation Code" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{desginationErr.codeErr} </p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input onChange={activeHandler}  id="disabled-checked-checkbox" type="checkbox" name='isActive' checked={designationData.isActive} className="w-4 h-4 " />
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

export default AddDesignation