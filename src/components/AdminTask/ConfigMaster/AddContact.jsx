import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createState, updateState } from '../../../utills/api/State';
import { AiFillEdit } from 'react-icons/ai';
import { contactTypeList, createContactType, updateContactType } from '../../../utills/api/ContactType';
import { cityList } from '../../../utills/api/City';
import { createContact, updateContact } from '../../../utills/api/Contact';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddContact = ({modalName,cId,ctype,cEmail,cfirst, clast,cmobile,cphone, cwebsite,czip,cActive,ids,contactFetch}) => {
    const [ isOpen, setIsOpen] = useState(false)
    const { mutateAsync : contactTypeData } = useMutation('createContactType',createContactType)
    const { mutateAsync : updatedContcatType } = useMutation('updateContactType',updateContactType)

    const [ contactDetails, setContactDetails ] = useState({
        firstName:  cfirst ? cfirst : "",
        lastName : clast ? clast :"",
        email : cEmail ? cEmail : "",
        website : cwebsite ? cwebsite : "",
        phone : cphone ? cphone : "",
        mobile : cmobile ? cmobile :"",
        zipCode: czip ? czip : "",
        contactTypeId : ctype ? ctype : "",
        cityId : cId ? cId : "",
        IsActive : cActive ? cActive : true
    })

    const [ contactErr, setContactErr ] = useState({
        firstNameErr : "",
        lastNameErr : "",
        emailErr : "",
        websiteErr : "",
        phoneErr : "",
        mobileErr : "",
        zipCodeErr : "",
        contactTypeIdErr : "",
        cityIdErr : "",
    })

    const resetState = () =>{
        setContactDetails({
            firstName:  cfirst ? cfirst : "",
            lastName : clast ? clast :"",
            email : cEmail ? cEmail : "",
            website : cwebsite ? cwebsite : "",
            phone : cphone ? cphone : "",
            mobile : cmobile ? cmobile :"",
            zipCode: czip ? czip : "",
            contactTypeId : ctype ? ctype : "",
            cityId : cId ? cId : "",
            IsActive : cActive ? cActive : true
        })

        setContactErr({
            firstNameErr : "",
            lastNameErr : "",
            emailErr : "",
            websiteErr : "",
            phoneErr : "",
            mobileErr : "",
            zipCodeErr : "",
            contactTypeIdErr : "",
            cityIdErr : "",
        })
    }


    const [ cityDrop , setCityDrop ] = useState([])
    const [ contactTypeDrop , setContactTypeDrop ] = useState([])

    const [ cityFilter, setCityFilter ] = useState({
        sortOrder : "ModifiedOn",
        sortDirection : "desc",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })
    const [ contactTypeFilter, setContactTypeFilter ] = useState({
        sortOrder : "ModifiedOn",
        sortDirection : "desc",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

    const {} = useQuery('cityList',cityList.bind(this,cityFilter),{ onSuccess : (x)=>setCityDrop(x?.items) })
    const {} = useQuery('contactTypeList',contactTypeList.bind(this,contactTypeFilter),{ onSuccess : (x)=>setContactTypeDrop(x?.items) })

    const { mutateAsync : contactData } = useMutation('createContact',createContact)
    const { mutateAsync : updatedContactdata } = useMutation('updateContact',updateContact)


    const changeHandler = (e) =>{
        setContactDetails( old => ({...old,[e.target.name] : e.target.value }))
        setContactErr( old => ({...old,[`${e.target.name}Err`] : "" }) )

    }

    const activeHandler = (e) =>{
        setContactDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async (e) =>{

        e.preventDefault()
        const { cityId,contactTypeId,email,firstName,lastName,mobile,phone,website,zipCode} = contactDetails
        const updated = {...contactDetails,id : ids}

        let isValid = true;
        
        const mobileNumberRegex = /^[6-9]\d{9}$/

        const newErr = {
            firstNameErr : "",
            lastNameErr : "",
            emailErr : "",
            websiteErr : "",
            phoneErr : "",
            mobileErr : "",
            zipCodeErr : "",
            contactTypeIdErr : "",
            cityIdErr : "",
        }

        if(!contactTypeId){
            newErr.contactTypeIdErr = 'please Select',
            isValid = false
        }
        if(!email){
            newErr.emailErr = 'please enter valid email',
            isValid = false
        }
        if(!firstName){
            newErr.firstNameErr = 'please enter valid name',
            isValid = false
        }
        if(!lastName){
            newErr.lastNameErr = 'please enter valid name',
            isValid = false
        }
        if(mobileNumberRegex.test(mobile) !== true ){
            newErr.mobileErr = 'please enter valid mobile num',
            isValid = false
        }
        if(mobileNumberRegex.test(phone) !== true ){
            newErr.phoneErr = 'please enter valid phone num',
            isValid = false
        }
        if(!website){
            newErr.websiteErr = 'please enter valid website',
            isValid = false
        }
        if(!zipCode){
            newErr.zipCodeErr = 'please enter valid zipcode',
            isValid = false
        }
        if(!cityId){
            newErr.cityIdErr = 'please Select',
            isValid = false
        }
    
        if(!isValid){
            setContactErr(newErr)
            return
        }

        modalName === 'add' ?
            await contactData(contactDetails)
            .then((res)=>{
                setIsOpen(false)
                contactFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
            })
        :
            await updatedContactdata(updated)
            .then((res)=>{
                setIsOpen(false)
                contactFetch()
                toast.success("Updated successfully")

            })
            .catch((err)=>{
                console.log(err)
            })

    }

  return (
    <div>
            {
                modalName === 'add' ? 
                <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                    <span> Add Contact  </span>
                </button>
                :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
            }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Contact Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className=" w-full   px-4 pb-3 pt-6  "  >
                    <div className='relative flex flex-col md:grid md:grid-cols-2 gap-2 '>
                        <div  >
                            <label className="block mb-2  text-sm text-black dark:text-white">First Name</label>
                            <input  onChange={changeHandler} type="text" name='firstName' value={contactDetails.firstName} placeholder="First Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{contactErr.firstNameErr}</p>
                        </div>
                        <div className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Last Name</label>
                            <input onChange={changeHandler} type="text" name='lastName' value={contactDetails.lastName}  placeholder="Last Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{contactErr.lastNameErr}</p>
                        </div>
                        <div className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Email</label>
                            <input onChange={changeHandler} type="text" name='email' value={contactDetails.email}  placeholder="Email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{contactErr.emailErr}</p>
                        </div>
                        <div className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">website</label>
                            <input onChange={changeHandler} type="text" name='website' value={contactDetails.website}  placeholder="Website" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{contactErr.websiteErr}</p>
                        </div>
                        <div className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Mobile </label>
                            <input onChange={changeHandler} type="text" name='mobile' value={contactDetails.mobile}  placeholder="Mobile" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{contactErr.mobileErr}</p>
                        </div>
                        <div className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Phone</label>
                            <input onChange={changeHandler} type="text" name='phone' value={contactDetails.phone}  placeholder="Phone" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{contactErr.phoneErr}</p>
                        </div>
                        <div className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">zipcode</label>
                            <input onChange={changeHandler} type="text" name='zipCode' value={contactDetails.zipCode}  placeholder="Zipcode" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{contactErr.zipCodeErr}</p>
                        </div>

                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Contact Type</label>
                            <select onChange={changeHandler}  name='contactTypeId' defaultValue={contactDetails.contactTypeId} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    contactTypeDrop?.map(((x)=>(
                                        <option value={x.id}>{x.name}</option>
                                    )))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{contactErr.contactTypeIdErr}</p>

                        </div>
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">City</label>
                            <select onChange={changeHandler} defaultValue={contactDetails.cityId}  name='cityId' className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    cityDrop?.map(((x)=>(
                                        <option value={x.id}>{x.name}</option>
                                    )))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{contactErr.cityIdErr}</p>

                        </div>
                        
                        <div className="flex items-center ">
                            <input onChange={activeHandler}  id="disabled-checked-checkbox" type="checkbox" name='IsActive' checked={contactDetails.IsActive} className="w-4 h-4 " />
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

export default AddContact