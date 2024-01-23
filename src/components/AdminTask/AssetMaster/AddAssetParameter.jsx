import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { assetList } from '../../../utills/api/Asset';
import { createAssetParam, updateAssetParam } from '../../../utills/api/AssetParameter';
import { toast } from 'react-toastify';
import { assetTypeList } from '../../../utills/api/AssetType';
import { Modal } from '@mantine/core';


const AddAssetParameter = ({ modalName, assetParamFetch, paramId, paramName, paramUnit,paramDesc, ids, paramActive }) => {

    const [ isOpen, setIsOpen] = useState(false)

    const { mutateAsync : assetParamData } = useMutation('createAssetParam',createAssetParam)
    const { mutateAsync : updatedParam } = useMutation('updateAssetParam',updateAssetParam)


    

    const [assetDrop, setAssetDrop] = useState([])    
    const [ assetFilter, setAssetFilter ] = useState({
        sortOrder : "ModifiedOn",
        sortDirection : "desc",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

    const { isFetching : listFetch } = useQuery(['assetList', assetFilter],assetList.bind(this,assetFilter),{ onSuccess : (x)=> setAssetDrop(x?.items) })


    const [assetParamDetails, setAssetParamDetails] = useState({
        assetId : paramId ? paramId :  '',
        name : paramName ? paramName : '',
        unit : paramUnit ? paramUnit : '',
        description : paramDesc ? paramDesc : '',
        isActive :paramActive ? paramActive : true
    })

    const [ paramErr, setparamErr ] = useState({
        assetIdErr : '',
        nameErr : '',
        unitErr : '',
        descriptionErr : '',
    })

    const resetState = () =>{
        setAssetParamDetails({
        
            assetId : paramId ? paramId :  '',
            name : paramName ? paramName : '',
            unit : paramUnit ? paramUnit : '',
            description : paramDesc ? paramDesc : '',
            isActive :paramActive ? paramActive : true
        })
        setparamErr({
            assetIdErr : '',
            nameErr : '',
            unitErr : '',
            descriptionErr : '',
        })
    }



    const changeHandler = (e) =>{
        setAssetParamDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setparamErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    

    const activeHandler = (e) =>{
        setAssetParamDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async (e) =>{
        e.preventDefault()
        const customerId = localStorage.getItem('customerId')
        const { assetId,name,unit,description } = assetParamDetails
        const updatedDetails = {...assetParamDetails,id : ids,customerId}
        const newParam = {...assetParamDetails,customerId}

        let isValid = true
        const newErr = {
            assetIdErr : '',
            nameErr : '',
            unitErr : '',
            descriptionErr : '',
        }

        if(!assetId){
            newErr.assetIdErr = 'please select',
            isValid = false
        }
        if(!name){
            newErr.nameErr = 'please enter valid details',
            isValid = false
        }
        if(!unit){
            newErr.unitErr = 'please enter valid details',
            isValid = false
        }
        if(!description){
            newErr.descriptionErr = 'please enter valid details',
            isValid = false
        }
        if(!isValid){
            setparamErr(newErr)
            return
        }

        modalName === 'add' ?
            await assetParamData(newParam)
            .then((res)=>{
                setIsOpen(false)
                assetParamFetch()
                toast.success("added successfully")
                resetState()


            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })
        :
            await updatedParam(updatedDetails)
            .then((res)=>{
                setIsOpen(false)
                assetParamFetch()
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
            modalName ==='add' ? 
            <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                <span> Add Asset Parameter </span>
            </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Asset Parameter Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className=" w-full   px-4 pb-3 pt-6  "  >
                <div className='relative flex flex-col md:grid md:grid-cols-2 gap-2'>


                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Asset </label>
                            <select name='assetId' value={assetParamDetails.assetId}  onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    assetDrop?.map((x,ind)=>(
                                            <option   value={x.id} >{x.name}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{paramErr.assetIdErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Name</label>
                            <input type="text" name='name' value={assetParamDetails.name} onChange={changeHandler}    placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{paramErr.nameErr}</p>
                        </div>

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Unit</label>
                            <input type="text" name='unit' value={assetParamDetails.unit} onChange={changeHandler}   placeholder="Unit" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{paramErr.unitErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Description</label>
                            <input type="text" name='description' onChange={changeHandler} value={assetParamDetails.description}   placeholder="Description" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{paramErr.descriptionErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={assetParamDetails.isActive} name='isActive' className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white  ">Is Active</label>
                        </div>
                    </div>
                    <div className='w-full flex justify-end items-end gap-2'>
                        <button type='button' onClick={()=>{setIsOpen(false);resetState();resetErr();}}   className="flex w-24 bg-red-500  hover:bg-red-400 items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
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

export default AddAssetParameter