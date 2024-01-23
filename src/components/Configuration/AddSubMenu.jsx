import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { menuList } from '../../utills/api/Menu';
import { createSubMenu, updateSubMenu } from '../../utills/api/SubMenu';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddSubMenu = ({subMenuFetch, modalName, subId, subName, subController, subAction, subArea, ids, subActive }) => {
    const [ isOpen, setIsOpen] = useState(false)

    const [ subMenuData, setSubMenuData ] = useState({
        isActive : subActive ? subActive : true,
        menuId : subId ? subId :  '',
        name : subName ? subName : '',
        controller : subController ? subController : '',
        action : subAction ? subAction : '',
        area : subArea ? subArea : ''
    })

    const [ subMenuDataErr, setSubMenuDataErr ] = useState({
        menuIdErr : '',
        nameErr : '',
        controllerErr : '',
        actionErr : '',
        areaErr : ''
    })

    const resetState = () =>{
        setSubMenuData({
            isActive : subActive ? subActive : true,
            menuId : subId ? subId :  '',
            name : subName ? subName : '',
            controller : subController ? subController : '',
            action : subAction ? subAction : '',
            area : subArea ? subArea : ''
        })
        setSubMenuDataErr({
            menuIdErr : '',
            nameErr : '',
            controllerErr : '',
            actionErr : '',
            areaErr : ''
        })
    }

    const [menuDrop, setMenuDrop] = useState([])
    const [ menuFilter, setmenuFilter ] = useState({
        "sortOrder": "",
        "sortDirection": "",
        "filterby": "",
        "pageNo": 1,
        "pageSize": 1000
    })
    
    const {} = useQuery('menuList',menuList.bind(this,menuFilter),{ onSuccess : (x) =>setMenuDrop(x?.items)} )
    const { mutateAsync : subMenuDetails } = useMutation('createSubMenu',createSubMenu)
    const { mutateAsync : subMenuUpdated } = useMutation('updateSubMenu',updateSubMenu)


    const changeHandler = (e) =>{
        setSubMenuData( old => ({ ...old, [e.target.name] : e.target.value }))
        setSubMenuDataErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }

    const activeHandler = (e) =>{
        setSubMenuData( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e)=>{
        e.preventDefault();

        const { menuId,name,controller,action,area } = subMenuData
        const updatedSubMenu = {...subMenuData,id : ids}
        const newErr = {
            menuIdErr : '',
            nameErr : '',
            controllerErr : '',
            actionErr : '',
            areaErr : ''
        }
        let isValid = true


        if(!menuId){
            newErr.menuIdErr = "please Select",
            isValid = false

        }
        if(!name){
            newErr.nameErr = "please enter valid details",
            isValid = false

        }
        if(!controller){
            newErr.controllerErr = "please enter valid details",
            isValid = false

        }
        if(!action){
            newErr.actionErr = "please enter valid details",
            isValid = false

        }
        if(!area){
            newErr.areaErr = "please enter valid details",
            isValid = false

        }
        if(!isValid){
            setSubMenuDataErr(newErr)
            return
        }

        modalName === 'add' ? 

            await subMenuDetails(subMenuData)
            .then((res)=>{
                setIsOpen(false)
                subMenuFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })

        :
        
            await subMenuUpdated(updatedSubMenu)
            .then((res)=>{
                setIsOpen(false)
                subMenuFetch()
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
                    <span> Add Sub Menu </span>
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

                <form onSubmit={submitHandler} className=" w-full  px-8 pb-3 pt-6  "  >
                    <div className='relative flex flex-col md:grid md:grid-cols-2 gap-2'>
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Menu Name</label>
                            <select  defaultValue={subMenuData.menuId} name='menuId' onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    menuDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.name}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{subMenuDataErr.menuIdErr}</p>

                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Sub Menu Name </label>
                            <input type="text" name='name' value={subMenuData.name} onChange={changeHandler}  placeholder="Sub Menu Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{subMenuDataErr.nameErr}</p>
                        </div>

                        {/* <div  >
                            <label className="block mb-2 text-sm text-gray-600 dark:text-black">Order </label>
                            <input type="text" name='orderIndex' value={subMenuData.orderIndex}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' ></p>
                        </div> */}
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Controller </label>
                            <input type="text" name='controller'  value={subMenuData.controller}  onChange={changeHandler}  placeholder="Controller" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{subMenuDataErr.controllerErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Area </label>
                            <input type="text" name='area'  value={subMenuData.area}  onChange={changeHandler}   placeholder="Area" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{subMenuDataErr.areaErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Action </label>
                            <input type="text" name='action' value={subMenuData.action}  onChange={changeHandler}   placeholder="Action" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{subMenuDataErr.actionErr}</p>
                        </div>
                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={subMenuData.isActive} name='isActive' className="w-4 h-4 " />
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

export default AddSubMenu