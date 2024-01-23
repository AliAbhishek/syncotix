import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { useMutation, useQuery } from 'react-query'
import { roleList } from '../../../utills/api/Role'
import { subMenuList } from '../../../utills/api/SubMenu'
import { CreateRoleSubmenu, UpdateRoleSubmenu } from '../../../utills/api/RoleSubmenu/Index'
import { toast } from 'react-toastify'
import MantineTable from '../../GlobalUses/MantineTable'
import { Modal } from '@mantine/core'

const AddRoleSubMenu = ({modalName,roleSubMenuFetch,roleId,subMenuId,isActive,ids }) => {


    const [isOpen,setIsOpen] = useState(false)


    const [roleSubmenuDetails,setroleSubMenuDetails] = useState({
        roleId : roleId ? roleId : "",
        subMenuId : subMenuId ? subMenuId :  "",
        isActive : isActive ? isActive : true
    })

    const [roleSubMenuErr,setroleSubMenuErr] = useState({
        roleIdErr : "",
        subMenuIdErr : ""
    })
    const resetState = () =>{
        setroleSubMenuDetails({
            roleId : roleId ? roleId : "",
        subMenuId : subMenuId ? subMenuId :  "",
        isActive : isActive ? isActive : true
        })
        setroleSubMenuErr({
            roleId : roleId ? roleId : "",
            subMenuId : subMenuId ? subMenuId :  "",
            isActive : isActive ? isActive : false
        })
    }
    const roleListDetails = {
        sortOrder: "",
        sortDirection: "",
        filterby: "",
        pageNo: 1,
        pageSize: 1000
    }

    const subMenuDetails = {
        
            sortOrder: "",
            sortDirection: "",
            filterby: "",
            pageNo: 1,
            pageSize: 1000
        
    }

    const {data : roleLists} = useQuery("roleList" , roleList.bind(this,roleListDetails))
    const {data : submenuLists} = useQuery("subMenuList" , subMenuList.bind(this,subMenuDetails))

    const { mutateAsync  : roleSubMenuData} = useMutation("CreateRoleSubmenu" , CreateRoleSubmenu)
    const { mutateAsync  : updateData} = useMutation("UpdateRoleSubmenu" , UpdateRoleSubmenu)


    const changeHandler = (e) =>{
        setroleSubMenuDetails( old => ({ ...old, [e.target.name] : e.target.value }))
        setroleSubMenuErr( old => ({ ...old, [`${e.target.name}Err`] : "" }))
        
    }
  
    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        let isValid=true
        const{ roleId,subMenuId } = roleSubmenuDetails
        const updatedData = {...roleSubmenuDetails, id : ids}
        const newErr={
            roleIdErr : "",
            subMenuIdErr : ""
        } 

        if(!roleId){
            newErr.roleIdErr="Select valid role",
            isValid=false
            
        }
        if(!subMenuId){
            newErr.subMenuIdErr="Select valid Submenu",
            isValid=false
        }
        if(!isValid){
            setroleSubMenuErr(newErr)
            return
        }

        modalName === 'add' ?
        await roleSubMenuData(roleSubmenuDetails)
        .then((res)=>{
            roleSubMenuFetch()
            setIsOpen(false)
            toast.success("added successfully")
            resetState()
        })
        .catch((err)=>{
            console.log(err)
      toast.error(err?.response?.data)

        })
        

        :
        await updateData(updatedData)
        .then((res)=>{
            roleSubMenuFetch()
            setIsOpen(false)
            toast.success("updated successfully")
        })
        .catch((err)=>{
            console.log(err)
      toast.error(err?.response?.data)

        })
        
    }

    const activeHandler=(e)=>{
        setroleSubMenuDetails( old => ({ ...old, [e.target.name] : e.target.checked }))
    }

  return (
    <div>
        {
            modalName === 'add' ? 
                <button onClick={()=>setIsOpen(true)} className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                    <span> Role Sub Menu </span>
                </button>
            :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }

            <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Sub Menu Details"
                size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={handleSubmit} className="relative w-full px-4 pb-3 pt-6  "   >
                    <div className='lg:grid lg:grid-cols-2 lg:gap-4' >

                    <div  className='' >
                        <label className="block mb-2 text-sm text-black dark:text-white">Role </label>
                        <select name='roleId' onChange={changeHandler}  defaultValue={roleSubmenuDetails.roleId} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                            <option disabled selected value="" >Select</option>
                           {
                            roleLists?.items.map((x,index) => (
                                <option value={x.id}>{x.name}</option>
                            ))
                           }
                        </select>
                        <p className='font-mono text-red-700' >{roleSubMenuErr.roleIdErr}</p>

                    </div>

                    <div  className='' >
                        <label  className="block mb-2 text-sm text-black dark:text-white">Submenu </label>
                        <select name='subMenuId' onChange={changeHandler} defaultValue={roleSubmenuDetails.subMenuId} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                            <option disabled selected value="" >Select</option>
                            {
                                submenuLists?.items.map((x,index) => (
                                    <option value={x.id}>{x.name}</option>
                                ))
                            }
                        </select>
                        <p className='font-mono text-red-700' >{roleSubMenuErr.subMenuIdErr}</p>

                    </div>
                        <div className="flex items-center pt-4">
                            <input   onChange={activeHandler} id="disabled-checked-checkbox" type="checkbox"  checked={roleSubmenuDetails.isActive} name='isActive' className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white  ">Is Active</label>
                        </div>
                    </div>

                    <div className='w-full flex justify-end items-end gap-2'>
                        <button type='button' onClick={()=>{setIsOpen(false);resetState()}} className="flex w-24 bg-red-500 items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-red-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
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

export default AddRoleSubMenu