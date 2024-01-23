import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { assetList } from '../../../utills/api/Asset';
import { createAssetRule, updateAssetRule } from '../../../utills/api/AssetRule';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddAssetRules = ({  modalName, name,assetId,assetLcl,assetUcl,assetMeasure,assetActive,ids, assetRuleFetch  }) => {

    const [ isOpen, setIsOpen] = useState(false)

    const [assetDrop, setAssetDrop] = useState([])  

    
    const { mutateAsync : assetRuleData } = useMutation('createAssetRule',createAssetRule)
    const { mutateAsync : updatedRule } = useMutation('updateAssetRule',updateAssetRule)

    const [ assetFilter, setAssetFilter ] = useState({
        sortOrder : "ModifiedOn",
        sortDirection : "desc",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

    const { isFetching : listFetch } = useQuery(['assetList', assetFilter],assetList.bind(this,assetFilter),{ onSuccess : (x)=> 
       
        setAssetDrop(x?.items)
     })

    const [ assetRuleDetails, setAssetRuleDetails ] = useState({
        ruleName : name ? name : "",
        assetId : assetId ? assetId : "",
        lcl : assetLcl ? assetLcl : "",
        ucl : assetUcl ? assetUcl : "",
        measurement : assetMeasure ? assetMeasure : "",
        isActive : assetActive ? assetActive : true
    })

    const [ assetRuleErr, setAssetRuleErr ] = useState({
        ruleNameErr : "",
        assetIdErr : "",
        lclErr : "",
        uclErr : "",
        measurementErr : "",
    })

    
    const resetState = () =>{
        setAssetRuleDetails({
            ruleName : name ? name : "",
        assetId : assetId ? assetId : "",
        lcl : assetLcl ? assetLcl : "",
        ucl : assetUcl ? assetUcl : "",
        measurement : assetMeasure ? assetMeasure : "",
        isActive : assetActive ? assetActive : true
        })
        setAssetRuleErr({
            ruleNameErr : "",
            assetIdErr : "",
            lclErr : "",
            uclErr : "",
            measurementErr : "",
        })
    }

    const changeHandler = (e) =>{
        setAssetRuleDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setAssetRuleErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    

    const activeHandler = (e) =>{
        setAssetRuleDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault()
        const customerId = parseInt(localStorage.getItem('customerId'), 10) 

        const { ruleName,assetId,lcl,ucl,measurement } = assetRuleDetails
        const updatedData = {...assetRuleDetails,id : ids,customerId}
        const newRules = {...assetRuleDetails,customerId}


        const newErr = {
            ruleNameErr : "",
            assetIdErr : "",
            lclErr : "",
            uclErr : "",
            measurementErr : "",
        }
        let isValid = true

        if(!ruleName){
            newErr.ruleNameErr = "please enter valid details",
            isValid = false
        }
        if(!assetId){
            newErr.assetIdErr = "please select",
            isValid = false
        }
        if(!lcl){
            newErr.lclErr = "please enter valid details",
            isValid = false
        }
        if(!ucl){
            newErr.uclErr = "please enter valid details",
            isValid = false
        }
        if(!measurement){
            newErr.measurementErr = "please enter valid details",
            isValid = false
        }
        if(!isValid){
            setAssetRuleErr(newErr)
            return
        }

        modalName === 'add' ? 
            await assetRuleData(newRules)
            .then((res)=>{
                setIsOpen(false)
                assetRuleFetch()
                toast.success("added successfully")
                resetState()

            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })
        :
            await updatedRule(updatedData)
            .then((res)=>{
                setIsOpen(false)
                assetRuleFetch()
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
                    <span> Add Asset Rules </span>
                </button>
            :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />

        }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Asset Rule Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full    px-4 pb-3 pt-6  "  >
                    <div className='w-full flex flex-col md:grid md:grid-cols-2 gap-2 ' >
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Rule Name</label>
                            <input type="text" value={assetRuleDetails.ruleName} name='ruleName' onChange={changeHandler}   placeholder="Rule Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{assetRuleErr.ruleNameErr}</p>
                        </div>

                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Asset </label>
                            <select name='assetId' value={assetRuleDetails.assetId}  onChange={changeHandler} 
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    assetDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.name}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{assetRuleErr.assetIdErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">LCL</label>
                            <input type="number" name='lcl' value={assetRuleDetails.lcl} onChange={changeHandler}  placeholder="LCL" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{assetRuleErr.lclErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">UCL</label>
                            <input type="number" name='ucl'value={assetRuleDetails.ucl} onChange={changeHandler}  placeholder="UCL" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{assetRuleErr.uclErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Measure</label>
                            <input type="text" name='measurement' value={assetRuleDetails.measurement} onChange={changeHandler}  placeholder="Measure" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{assetRuleErr.measurementErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={assetRuleDetails.isActive} name='isActive' className="w-4 h-4 " />
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

export default AddAssetRules