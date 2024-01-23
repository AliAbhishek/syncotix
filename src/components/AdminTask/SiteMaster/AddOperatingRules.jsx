import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createSite, siteList, updateSite } from '../../../utills/api/Site';
import { createSiteRule, updateSiteRule } from '../../../utills/api/Site Rule';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddOperatingRules = ({siteruleFetch,modalName, siteRule,siteId, ids, siteActive}) => {
    const [ isOpen, setIsOpen] = useState(false)


    const [ siteDrop, setSiteDrop ] = useState([])   
    const [ siteFilter, setSiteFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })
    const { isFetching : assetFetch } = useQuery(['siteList', siteFilter],siteList.bind(this,siteFilter),{ onSuccess : (x)=> setSiteDrop(x?.items) })
    const { mutateAsync : siteData } = useMutation('createSiteRule',createSiteRule)
    const { mutateAsync : deviceUpdate } = useMutation('updateSiteRule',updateSiteRule)

    const [ siteRuleData, setSiteRuleData ] = useState({
        customerSiteId : siteId ? siteId : "",
        rules : siteRule ? siteRule : '',
        isActive : siteActive ? siteActive : true
    })

    const [ siteRuleDataErr, setSiteRuleDataErr ] = useState({
        customerSiteIdErr : "",
        rulesErr : ""
    })
    const resetState = () =>{
        setSiteRuleData({
            customerSiteId : siteId ? siteId : "",
        rules : siteRule ? siteRule : '',
        isActive : siteActive ? siteActive : true
        })
        setSiteRuleDataErr({
            customerSiteIdErr : "",
            rulesErr : ""
        })
    }

    
    const changeHandler = (e) =>{
        setSiteRuleData( old => ({ ...old, [e.target.name] : e.target.value }))
        setSiteRuleDataErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }
    

    const activeHandler = (e) =>{
        setSiteRuleData( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault();
        const customerId = localStorage.getItem('customerId')

        const { customerSiteId, rules } = siteRuleData;
        const updated = {...siteRuleData,id : ids,customerId}
        const newSiteRule = {...siteRuleData,customerId}
        const newErr = {
            customerSiteIdErr : "",
            rulesErr : ""
        }
        let isValid = true
        
        if(!customerSiteId) {
            newErr.customerSiteIdErr = 'please select',
            isValid = false
        }
        if(!rules) {
            newErr.rulesErr = 'please enter valid details ',
            isValid = false
        }

        if(!isValid){
            setSiteRuleDataErr(newErr)
            return
        }
        
        modalName === 'add' ?
            await siteData(newSiteRule)
            .then((res)=>{
                setIsOpen(false)
                siteruleFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })
        :
            await deviceUpdate(updated)
            .then((res)=>{
                setIsOpen(false)
                siteruleFetch()
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
                        <span> Add Operating Rules </span>
                    </button>
                :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />

            }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Operating Rule Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full    px-4 pb-3 pt-6  "  >
                <div className=' flex flex-col md:grid md:grid-cols-2 gap-2'>
                    
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Site Name</label>
                            <select value={siteRuleData.customerSiteId} name='customerSiteId' onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    siteDrop.map((x,ind)=>(
                                        <option value={x.customerSiteId}>{x.customerSiteName}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{siteRuleDataErr.customerSiteIdErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Rule</label>
                            <input type="text" name='rules' value={siteRuleData.rules}  onChange={changeHandler}  placeholder="Rule" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{siteRuleDataErr.rulesErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={siteRuleData.isActive} name='isActive' className="w-4 h-4 " />
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

export default AddOperatingRules