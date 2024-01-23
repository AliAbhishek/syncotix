import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation } from 'react-query';
import { createCustomer, customerUpdate } from '../../../utills/api/Customer';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddCustomer = ({customerName,customerEmail,customerId,customerDesc,customerIsActive,moduleName, customerFetch,code}) => {
    const [ isOpen, setIsOpen] = useState(false)

    const { mutateAsync : customerDetails } = useMutation('createCustomer',createCustomer)
    const { mutateAsync : updatedDetails } = useMutation('customerUpdate',customerUpdate)


    const [customerData, setCustomerData] = useState({
        name : customerName ? customerName : "",
        code : code ? code : "",
        email : customerEmail ? customerEmail : "",
        description : customerDesc ? customerDesc : "",
        isActive : customerIsActive ? customerIsActive : true,
    })


    const [ customerErr, setCustomerErr ] = useState({
        nameErr : "",
        codeErr : "",
        emailErr : "",
        descriptionErr : ""
    })

    const resetState = () =>{
        setCustomerData({
            name : customerName ? customerName : "",
            code : code ? code : "",
            email : customerEmail ? customerEmail : "",
            description : customerDesc ? customerDesc : "",
            isActive : customerIsActive ? customerIsActive : true,
        })
        setCustomerData({
            nameErr : "",
            codeErr : "",
            emailErr : "",
            descriptionErr : ""
        })
    }

    const changeHandler = (e) =>{
        setCustomerData(old => ({...old,[e.target.name] : e.target.value  }) )
        setCustomerErr( old => ({...old,[`${e.target.name}Err`] : "" }) )

    }

    const activeHandler = (e) =>{
        setCustomerData( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e) =>{
        e.preventDefault();

        const newErr = {
            nameErr : "",
            codeErr : "",
            emailErr : "",
            descriptionErr : ""
        }

        const {name,email,description,code} = customerData
        const updatedData = {...customerData,id : customerId }


        let isValid = true

        if(!name){
            newErr.nameErr = "please enter valid name"
            isValid = false
        }
        if(!code){
            newErr.codeErr = "please enter valid name"
            isValid = false
        }
        if(!email){
            newErr.emailErr = "please enter valid name"
            isValid = false
        }
        if(!description){
            newErr.descriptionErr = "please enter valid name"
            isValid = false
        }

        if(!isValid){
            setCustomerErr(newErr)
            return
        }

        moduleName === 'add' ?
            await customerDetails(customerData)
            .then((res) =>{
                setIsOpen(false)
                customerFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
                toast.error(err?.response?.data)

                // var colonIndex = err?.response?.data.indexOf(':');
                // var errName = err?.response?.data.substring(0,colonIndex).trim();
                // const after = err?.response?.data.slice(colonIndex+1).trim()
                // if(errName == 'Customer Name'){
                //     setCustomerErr( old => ({...old,nameErr :after}))
                // }
            })
        :
        await updatedDetails(updatedData)
        .then((res)=>{
                 setIsOpen(false)
            customerFetch()
            toast.success("updated successfully")

        })
        .catch((err)=>{
            console.log(err) 
      toast.error(err?.response?.data)

            // var colonIndex = err?.response?.data.indexOf(':');
            //     var errName = err?.response?.data.substring(0,colonIndex).trim();
            //     const after = err?.response?.data.slice(colonIndex+1).trim()
            //     if(errName == 'Customer Name'){
            //         setCustomerErr( old => ({...old,nameErr :after}))
            //     }
        })

    }





  return (
    <div>
        {
            moduleName === 'add' ?
            <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                <span> Add Customer </span>
            </button>
            :
            <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />

        }



<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Customer Details"
                size='lg'
                closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                    <form className="relative w-full   px-4 pb-3 pt-6 " onSubmit={submitHandler}  >
                        <div className='flex flex-col md:grid md:grid-cols-2 gap-2 w-full' >
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Name</label>
                                <input type="text" name='name' value={customerData.name} onChange={changeHandler}  placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{customerErr.nameErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Code</label>
                                <input type="text" name='code' value={customerData.code} onChange={changeHandler}  placeholder="Code" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{customerErr.codeErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Email</label>
                                <input type="text" name='email' value={customerData.email} onChange={changeHandler}    placeholder="Email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{customerErr.emailErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Description</label>
                                <input type="textbox" name='description' value={customerData.description} onChange={changeHandler}   placeholder="Description" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{customerErr.descriptionErr}</p>
                            </div>
                        </div>
                        <div className="flex items-center pt-4">
                            <input onChange={activeHandler}   type="checkbox" name='isActive' checked={customerData.isActive} className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white ">Is Active</label>
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

export default AddCustomer