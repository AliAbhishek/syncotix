import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createState, updateState } from '../../../utills/api/State';
import { AiFillEdit } from 'react-icons/ai';
import { contactTypeList, createContactType, updateContactType } from '../../../utills/api/ContactType';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddContactType = ({modalName, typeName, typeCode, typeActive, ids, contactTypeFetch }) => {
    const [ isOpen, setIsOpen] = useState(false)
    const { mutateAsync : contactTypeData } = useMutation('createContactType',createContactType)
    const { mutateAsync : updatedContcatType } = useMutation('updateContactType',updateContactType)

    const [ contactTypeDetails, setContactTypeDetails ] = useState({
        name: typeName ? typeName :  "",
        code: typeCode ? typeCode :  "",
        IsActive :  typeActive ? typeActive : true
    })

    const [ contactTypeErr, setContactTypeErr ] = useState({
        nameErr : "",
        codeErr : "",
        countryErr : ""
    })


    const [ data, setData] = useState([])

    const [ contactTypeFilter, setContactTypeFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
      })


      const { } = useQuery(['contactTypeList', contactTypeFilter],contactTypeList.bind(this,contactTypeFilter),{ onSuccess : (x)=> {
        setData(x?.items);
        
      }})

    const resetState = () =>{
        setContactTypeDetails({
            name: typeName ? typeName :  "",
            code: typeCode ? typeCode :  "",
            IsActive :  typeActive ? typeActive : true
        })
        setContactTypeErr({
            nameErr : "",
            codeErr : "",
            countryErr : ""
        })
    }

    const changeHandler = (e) =>{
        setContactTypeDetails( old => ({...old,[e.target.name] : e.target.value }))
        setContactTypeErr( old => ({...old,[`${e.target.name}Err`] : "" }) )

    }

    const activeHandler = (e) =>{
        setContactTypeDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async (e) =>{
        e.preventDefault()
        const { name, code } = contactTypeDetails
        const updated = {...contactTypeDetails,id : ids}

        let isValid = true;

        const newErr = {
            nameErr : "",
            codeErr : "",
        }

        if(name.length < 3){
            newErr.nameErr = "please provide a valid name",
            isValid = false
        }
        if (data.some((x)=> x.name.toLowerCase() === name.toLowerCase())) {
            (newErr.nameErr = `${name} is already exist`), (isValid = false);
        }
        if(!code ){
            newErr.codeErr = "please provide a valid code",
            isValid = false

        }
    
        if(!isValid){
            setContactTypeErr(newErr)
            return
        }

        modalName === 'add' ?
            await contactTypeData(contactTypeDetails)
            .then((res)=>{
                setIsOpen(false)
                contactTypeFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })
        :
            await updatedContcatType(updated)
            .then((res)=>{
                setIsOpen(false)
                contactTypeFetch()
                toast.success("added successfully")

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
                    <span> Add Contact Type </span>
                </button>
                :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
            }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Contact Type Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full     px-4 pb-3 pt-6  "  >
                <div className='relative flex flex-col md:grid md:grid-cols-2 gap-2'>

                        <div  >
                            <label className="block mb-2  text-sm text-black dark:text-white">Name</label>
                            <input  onChange={changeHandler} type="text" name='name' value={contactTypeDetails.name} placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{contactTypeErr.nameErr}</p>
                        </div>
                        <div className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Code</label>
                            <input onChange={changeHandler} type="text" name='code' value={contactTypeDetails.code}  placeholder="Code" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{contactTypeErr.codeErr}</p>
                        </div>
                        
                        <div className="flex items-center ">
                            <input onChange={activeHandler}  id="disabled-checked-checkbox" type="checkbox" name='IsActive' checked={contactTypeDetails.IsActive} className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white ">Is Active</label>
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

export default AddContactType