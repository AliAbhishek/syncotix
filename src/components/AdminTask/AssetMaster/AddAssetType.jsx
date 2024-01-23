import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { createAssetType, updateAsset } from '../../../utills/api/AssetType';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddAssetType = ({modalName,assetTypeFetch,name,code,isActive,ids}) => {
    const [ isOpen, setIsOpen] = useState(false)

    const { mutateAsync : assetTypeDetails } = useMutation('createAssetType',createAssetType)
    const { mutateAsync : updatedAssets } = useMutation('updateAsset',updateAsset)


    const [ assetTypeData, setAssetTypeData ] = useState({
        name : name ? name : "",
        code : code ? code : "",
        isActive : isActive ? isActive : true
    })
    const [ assetTypeDataErr, setAssetTypeDataErr ] = useState({
        nameErr : "",
        codeErr : ""
    })

    const resetState = () =>{
        setAssetTypeData({
            name : name ? name : "",
            code : code ? code : "",
            isActive : isActive ? isActive : true
        })
        setAssetTypeDataErr({
            nameErr : "",
            codeErr : ""
        })
    }

    
    const changeHandler = (e) =>{
        setAssetTypeData( old => ({ ...old, [e.target.name] : e.target.value }))
        setAssetTypeDataErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }

    const activeHandler = (e) =>{
        setAssetTypeData( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault()

        const { name, code } = assetTypeData;
        const updatedData = {...assetTypeData,id : ids}
        let isValid = true;

        const newErr = {
            nameErr : "",
            codeErr : ""
        }

        if(!name){
            newErr.nameErr = 'please enter a valid name',
            isValid = false
        }
        if(!code){
            newErr.codeErr = 'please enter a valid code',
            isValid = false
        }

        if(!isValid){
            setAssetTypeDataErr(newErr)
            return
        }

        modalName === 'add' ? 
        await assetTypeDetails(assetTypeData)
        .then((res)=>{
            setIsOpen(false)
            assetTypeFetch()
            toast.success("added successfully")
            resetState()
        })
        .catch((err)=>{
            console.log(err)
      toast.error(err?.response?.data)

        })

        :
        
        await updatedAssets(updatedData)
        .then((res)=>{
            setIsOpen(false)
            assetTypeFetch()
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
                    <span> Add Asset Type </span>
                </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />

        }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Asset Type Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full  px-4 pb-3 pt-6  "  >
                <div className='relative flex flex-col md:grid md:grid-cols-2 gap-2'>

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Asset Name</label>
                            <input type="text" name='name' value={assetTypeData.name} onChange={changeHandler}  placeholder="Asset Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{assetTypeDataErr.nameErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Asset Code</label>
                            <input type="text" name='code' value={assetTypeData.code} onChange={changeHandler}  placeholder="Asset Code" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{assetTypeDataErr.codeErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={assetTypeData.isActive} name='isActive' className="w-4 h-4 " />
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

export default AddAssetType