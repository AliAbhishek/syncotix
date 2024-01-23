import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { designationList } from '../../../utills/api/Designation';
import { userTypeList } from '../../../utills/api/UserType';
import { roleList } from '../../../utills/api/Role';
import { AiFillEdit } from 'react-icons/ai';
import { createUser, updateUser, userList } from '../../../utills/api/User';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { customerSiteList } from '../../../utills/api/CustomerSite';
import { customerList } from '../../../utills/api/Customer';


const AddUser = ({userFetch, modalName,isActive,emailId,fullName,userTypeId,roles,customerId ,designationId,locked,imgUrl,address,mobile,ids,customerSiteId }) => {
    const [ isOpen, setIsOpen] = useState(false)
    const [ designationDrop, setDesignationDrop ] = useState([])
    const [ userTypeDrop , setUserTypeDrop ] = useState([])
    const [ roleDrop , setRoleDrop ] = useState([])
    const [customerSiteDrop, setCustomerSiteDrop] = useState([]);
    const [customerDrop, setCustomerDrop] = useState([]);

    const [isShow,setIsShow] = useState(true)

    const [ designationFilter, setDesignationFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })

    const [ userTypeFilter, setUserTypeFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })

    const [ userRoleFilter, setRoleFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })

    const [customerSiteFilter, setCustomerSiteFilter] = useState({
        sortOrder: "",
        sortDirection: "",
        filterby: "",
        pageNo: 1,
        pageSize: 1000,
      });


      const [customer, setCustomer] = useState({
        sortOrder: "",
        sortDirection: "",
        filterby: "",
        pageNo: 1,
        pageSize: 1000,
      });


      const [data, setData] = useState([]);

      const [userFilter, setUserFilter] = useState({
        sortOrder: "",
        sortDirection: "",
        filterby: "",
        pageNo: 1,
        pageSize: 10,
      });
    
      const { } = useQuery(
        ["userList", userFilter],
        userList.bind(this, userFilter),
        {
          onSuccess: (x) => {
            setData(x?.items);
           
          },
        }
      );

    

    const {} = useQuery('designationList',designationList.bind(this,designationFilter),{ onSuccess : (x)=>setDesignationDrop(x?.items) })
    const {} = useQuery('userTypeList',userTypeList.bind(this,userTypeFilter),{ onSuccess : (x)=>setUserTypeDrop(x?.items) })
    const {} = useQuery('roleList',roleList.bind(this,userRoleFilter),{ onSuccess : (x)=>setRoleDrop(x?.items) })
    const {} = useQuery("customerSiteList", customerSiteList.bind(this, customerSiteFilter), {onSuccess: (x) => setCustomerSiteDrop(x?.items)});
    const {} = useQuery("customerList", customerList.bind(this, customerSiteFilter), {onSuccess: (x) => setCustomerDrop(x?.items)});

    const { mutateAsync : userData } = useMutation('createUser',createUser)
    const { mutateAsync : updatedData } = useMutation('updateUser',updateUser)

    
    const [ userDetails, setUserDetails ] = useState({
            isActive: isActive ? isActive : true,
            password:"",
            emailId: emailId ? emailId : "",
            fullName: fullName ? fullName : "", 
            userTypeId: userTypeId ? userTypeId : 0,
            roles:  [],
            designationId: designationId ? designationId : 0,
            locked: locked ? locked : true,
            imgUrl: imgUrl ? imgUrl : "",
            address: address ? address : "",
            mobile: mobile ? mobile : "",
            customerId : customerId ? customerId : "",
            customerSiteId : customerSiteId ? customerSiteId : ""
    })


    const [ userDetailsErr, setUserDetailsErr ] = useState({
        passwordErr : "",
        emailIdErr : "",
        fullNameErr: "",
        userTypeIdErr : "",
        rolesErr: "",
        designationIdErr : "",
        addressErr : "",
        mobileErr : "",
        customerIdErr : "",
        customerSiteIdErr : "" 
    })


    const resetState = () =>{
        setUserDetails({
            isActive: isActive ? isActive : true,
            password:"",
            emailId: emailId ? emailId : "",
            fullName: fullName ? fullName : "", 
            userTypeId: userTypeId ? userTypeId : 0,
            roles:  [],
            designationId: designationId ? designationId : 0,
            locked: locked ? locked : true,
            imgUrl: imgUrl ? imgUrl : "",
            address: address ? address : "",
            mobile: mobile ? mobile : "",
            customerId : customerId ? customerId : "",
            customerSiteId : customerSiteId ? customerSiteId : ""
        })
        setUserDetailsErr({
            passwordErr : "",
            emailIdErr : "",
            fullNameErr: "",
            userTypeIdErr : "",
            rolesErr: "",
            designationIdErr : "",
            addressErr : "",
            mobileErr : "",
            customerIdErr : "",
            customerSiteIdErr : ""
        })
    }

    const changeHandler = (e)=>{
       

        setUserDetails(old => ({...old,[e.target.name]: e.target.value }))
        setUserDetailsErr( old => ({ ...old, [`${e.target.name}Err`] : "" }))

    }

    const roleHandler = (e) =>{
        setUserDetails(old => ({...old,roles :[...old.roles,e.target.value]}))
        setUserDetailsErr( old => ({ ...old, [`${e.target.name}Err`] : "" }))

    }
    const activeHandler = (e) =>{
        setUserDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }
    const submitHandler = async(e) =>{
        e.preventDefault();
        // const customerId = parseInt(localStorage.getItem('customerId'), 10) 
        let isValid = true;


        
        const { address,password,designationId,emailId,customerId,fullName,mobile,roles,userTypeId, customerSiteId} = userDetails; 
        const newUser = {...userDetails }
        const updatedDetails = {...userDetails}
        const newErr = {
            passwordErr : "",
            emailIdErr : "",
            fullNameErr: "",
            userTypeIdErr : "",
            rolesErr: "",
            designationIdErr : "",
            addressErr : "",
            mobileErr : "",
            customerIdErr : "",
            customerSiteIdErr : ""
        }
        if(!address){
            newErr.addressErr = 'please enter valid address',
            isValid = false
        }
      
        if(modalName !== 'edit' && !password){
            newErr.passwordErr = 'please enter valid password',
            isValid = false 
        }
        if(!designationId){
            newErr.designationIdErr = 'please select',
            isValid = false
        }
        if(!emailId){
            newErr.emailIdErr = 'please enter valid email',
            isValid = false
        }
        if (data.some((x)=> x.emailId.toLowerCase() === emailId.toLowerCase())) {
            (newErr.emailIdErr = `${emailId} is already exist`), (isValid = false);
          }
        if(!fullName){
            newErr.fullNameErr = 'please enter valid Name',
            isValid = false
        }
        if (data.some((x)=> x.fullName.toLowerCase() === fullName.toLowerCase())) {
            (newErr.fullNameErr = `${fullName} is already exist`), (isValid = false);
          }
        if(!mobile){
            newErr.mobileErr = 'please enter valid Number',
            isValid = false
        }
        if(roles.length <= 0){
            newErr.rolesErr = 'please select role',
            isValid = false
        } 
        if(!userTypeId){
            newErr.userTypeIdErr = 'please select user type',
            isValid = false
        }
        if(!customerId){
            newErr.customerIdErr = 'please select customer',
            isValid = false
        }

        
        if(!customerSiteId){
            newErr.customerSiteIdErr = "Please select valid customer site",
            isValid = false
        }
       
    
        if(!isValid){
            setUserDetailsErr(newErr)
            return  
        }

        
        modalName === 'add' ?
            await userData(newUser)
            .then((res)=>{
                setIsOpen(false)
                userFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
      toast.error(err?.response?.data)

            })

        :
            await updatedData(updatedDetails)
            .then((res)=>{
                setIsOpen(false)
                userFetch()
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
            <button onClick={()=>setIsOpen(true)}  className=" flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span> Add User </span>
            </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }

        <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="User Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className=" w-full   px-4 pb-3 pt-6  "  >
                    <div className='relative flex flex-col md:grid md:grid-cols-2 gap-2'>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Name</label>
                            <input onChange={changeHandler} value={userDetails.fullName} type="text" name='fullName' placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{userDetailsErr.fullNameErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Email</label>
                            <input onChange={changeHandler} value={userDetails.emailId}  type="email" name='emailId' placeholder="Email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{userDetailsErr.emailIdErr}</p>
                        </div>
                        {
                            modalName === 'add' ?
                            // <div  >
                            //     <label className="block mb-2 text-sm text-black dark:text-white">Password</label>
                            //     <input onChange={changeHandler} value={userDetails.password}  type="text" name='password' placeholder="Password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            //     <p className='font-mono text-red-700' >{userDetailsErr.passwordErr}</p>
                            // </div>

                            <div>
                              <label className="block mb-2 text-sm text-black dark:text-white">Password</label>

                                <div className="relative">
                                    <input type={`${isShow ? 'password' : 'text' }`} name='password'  value={userDetails.password} onChange={changeHandler}   placeholder="*************" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {
                                        isShow ? 
                                        <FaEyeSlash onClick={()=>setIsShow(x => !x)} className='text-black absolute right-3 top-4 cursor-pointer' />
                                        :
                                        <FaEye onClick={()=>setIsShow(x => !x)} className='text-black absolute right-3 top-4 cursor-pointer' />
                                    }

                                </div>
                                <p className='font-mono text-red-700' >{userDetailsErr.passwordErr }</p>
                            </div>
                            :
                            ""
                        }
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Mobile</label>
                            <input onChange={changeHandler} value={userDetails.mobile}  type="text" name='mobile'  placeholder="Mobile" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{userDetailsErr.mobileErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Address</label>
                            <input onChange={changeHandler} value={userDetails.address} type="text" name='address'  placeholder="Address" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{userDetailsErr.addressErr}</p>
                        </div>
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Designation</label>
                            
                            <select onChange={changeHandler} defaultValue={userDetails.designationId} name='designationId' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option  >Select</option>
                                {
                                    designationDrop?.map(((x)=>(
                                        <option value={x.id}>{x.name}</option>
                                    )))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{userDetailsErr.designationIdErr}</p>

                        </div>

                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">User Type</label>
                            <select onChange={changeHandler} defaultValue={userDetails.userTypeId} name='userTypeId' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option  >Select</option>
                                {
                                    userTypeDrop?.map(((x)=>(
                                        <option value={x.id}>{x.name}</option>
                                    )))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{userDetailsErr.userTypeIdErr}</p>

                        </div>
                        <div className="">
                                <label className="block mb-2 text-sm text-black dark:text-white">
                                    Customer 
                                </label>

                                <select
                                    onChange={changeHandler}
                                    name="customerId"
                                    defaultValue={userDetails.customerId}
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                >
                                    <option disabled selected value="">
                                    Select
                                    </option>
                                    {customerDrop?.map((x) => (
                                    <option value={x.id}>{x.name}</option>
                                    ))}
                                </select>

                                <p className="font-mono text-red-700">{userDetailsErr.customerIdErr}</p>
                            </div>
                        <div className="">
                                <label className="block mb-2 text-sm text-black dark:text-white">
                                    Customer Site
                                </label>

                                <select
                                    onChange={changeHandler}
                                    name="customerSiteId"
                                    defaultValue={userDetails.customerSiteId}
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                >
                                    <option disabled selected value="">
                                    Select
                                    </option>
                                    {customerSiteDrop?.map((x) => (
                                    <option value={x.id}>{x.name}</option>
                                    ))}
                                </select>

                                <p className="font-mono text-red-700">{userDetailsErr.customerSiteIdErr}</p>
                            </div>
                        {
                            modalName === 'add' ?

                            <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">User Role</label>
                            <select onChange={roleHandler}  defaultValue={userDetails.roles}   name='roles' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option  >Select</option>
                                {
                                    roleDrop?.map(((x)=>(
                                        <option value={x.id}>{x.name}</option>
                                    )))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{userDetailsErr.rolesErr}</p>

                        </div>
                        
                        :
                        ""
                        }

                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={userDetails.isActive} name='isActive' className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white  ">Is Active</label>
                        </div>
                        
                        {modalName === 'edit' ? <div></div> : '' }
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

export default AddUser