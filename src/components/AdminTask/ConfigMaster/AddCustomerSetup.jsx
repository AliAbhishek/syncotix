import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from "react-query";
import { createCustomer, customerUpdate, setupCustomer } from "../../../utills/api/Customer";
import { toast } from "react-toastify";
import { Modal } from "@mantine/core";
import { cityList } from "../../../utills/api/City";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AddCustomerSetup = ({ moduleName,customerFetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const [newCustomer, setNewCustomer] = useState({
    fullName: "",
    userEmail: "",
    companyName: "",
    companyEmail: "",
    siteName: "",
    cityId: null,
    description: "",
    address: "",
    password: "",
  });
  const [newCustomerErr, setNewCustomerErr] = useState({
    fullNameErr: "",
    userEmailErr: "",
    companyNameErr: "",
    companyEmailErr: "",
    siteNameErr: "",
    cityIdErr: "",
    descriptionErr: "",
    addressErr: "",
    passwordErr: "",
  });


  const resetState = () =>{
    setNewCustomer({
      fullName: "",
      userEmail: "",
      companyName: "",
      companyEmail: "",
      siteName: "",
      cityId: null,
      description: "",
      address: "",
      password: "",
    })
    setNewCustomerErr({
      fullNameErr: "",
      userEmailErr: "",
      companyNameErr: "",
      companyEmailErr: "",
      siteNameErr: "",
      cityIdErr: "",
      descriptionErr: "",
      addressErr: "",
      passwordErr: "",
    })
}


  const dropQuery = {
    sortOrder: "",
    sortDirection: "",
    filterby: "",
    pageNo: 1,
    pageSize: 1000,
  };
  const { data: cityDrop } = useQuery("cityList",cityList.bind(this, dropQuery));
  const { mutateAsync : newCustomerDetails } = useMutation("setupCustomer",setupCustomer)



  const changeHandler = (e) => {
        setNewCustomer( old => ({...old, [e.target.name] : e.target.value }))
        setNewCustomerErr( old => ({...old, [`${e.target.name}Err`] : "" }))
  };

  const submitHandler = async(e) =>{
    e.preventDefault();

    const { fullName,address,cityId,companyEmail,companyName,description,password,siteName,userEmail } = newCustomer
    let isValid = true
    const newErr = {
        fullNameErr: "",
        userEmailErr: "",
        companyNameErr: "",
        companyEmailErr: "",
        siteNameErr: "",
        cityIdErr: "",
        descriptionErr: "",
        addressErr: "",
        passwordErr: "",
      }

    if(!fullName){
        newErr.fullNameErr = 'please enter valid name',
        isValid = false
    }
    if(!userEmail){
        newErr.userEmailErr = 'please enter valid email',
        isValid = false
    }
    if(!companyName){
        newErr.companyNameErr = 'please enter valid company name',
        isValid = false
    }
    if(!companyEmail){
        newErr.companyEmailErr = 'please enter valid compnay email',
        isValid = false 
    }
    if(!siteName){
        newErr.siteNameErr = ' please enter valid site name',
        isValid = false
    }
    if(!cityId){
        newErr.cityIdErr = 'please select',
        isValid = false
    }
    if(!description){
        newErr.descriptionErr = 'please enter description',
        isValid = false 
    }
    if(!address){
        newErr.addressErr = 'please enter address',
        isValid = false 
    }
    if(password.length < 5){
        newErr.passwordErr = 'required minimum 5 char',
        isValid = false 
    }

    if(!isValid){
        setNewCustomerErr(newErr)
        return 
    }
  
    await newCustomerDetails(newCustomer)
    .then((res)=>{ 
        toast.success('Added Successfully')
        setIsOpen(false) 
        customerFetch()
        resetState()
    })
    .catch((err)=>{ console.log(err) 
      var colonIndex = err?.response?.data.indexOf(':');
      var errName = err?.response?.data.substring(0,colonIndex).trim();
      const after = err?.response?.data.slice(colonIndex+1).trim();
      toast.error(err?.response?.data)
 
      
    })

  } 
  
  return (
    <div>
      {moduleName === "add" ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          <span> Add Customer </span>
        </button>
      ) : (
        <AiFillEdit
          onClick={() => setIsOpen(true)}
          className="cursor-pointer"
        />
      )}

      <Modal
        centered
        opened={isOpen}
        onClose={() => {
          setIsOpen(false);
          resetState()
        }}
        title="Customer Details"
        size="lg"
        closeOnClickOutside={false}
        transitionProps={{
          transition: "fade",
          duration: 600,
          timingFunction: "linear",
        }}
      >
        <form className="relative w-full   px-4 pb-3 pt-6 " onSubmit={submitHandler} >
          <div className="flex flex-col md:grid md:grid-cols-2 gap-2 w-full">
            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="fullName"
                value={newCustomer.fullName}
                onChange={changeHandler}
                placeholder="Name"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">{newCustomerErr.fullNameErr}</p>
            </div>

            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="userEmail"
                value={newCustomer.userEmail}
                onChange={changeHandler}
                placeholder="Email"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">{newCustomerErr.userEmailErr}</p>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={newCustomer.companyName}
                onChange={changeHandler}
                placeholder="Description"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">{newCustomerErr.companyNameErr}</p>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                Company Email
              </label>
              <input
                type="email"
                name="companyEmail"
                value={newCustomer.companyEmail}
                onChange={changeHandler}
                placeholder="Description"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">{newCustomerErr.companyEmailErr}</p>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                Site Name
              </label>
              <input
                type="textbox"
                name="siteName"
                value={newCustomer.siteName}
                onChange={changeHandler}
                placeholder="Description"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">{newCustomerErr.siteNameErr}</p>
            </div>
            <div className="">
              <label className="block mb-2 text-sm text-black dark:text-white">
                City
              </label>
              <select
                onChange={changeHandler}
                name="cityId"
                defaultValue={newCustomer.cityId}
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option disabled selected value="">
                  Select
                </option>
                {cityDrop?.items?.map((x) => (
                  <option key={x.id} value={x.id}>{x.name}</option>
                ))}
              </select>
              <p className="font-mono text-red-700 ">{newCustomerErr.cityIdErr}</p>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                Description
              </label>
              <input
                type="textbox"
                name="description"
                value={newCustomer.description}
                onChange={changeHandler}
                placeholder="Description"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">{newCustomerErr.descriptionErr}</p>
            </div>
            <div>
              <label className="block mb-2 text-sm text-black dark:text-white">
                Address
              </label>
              <input
                type="textbox"
                name="address"
                value={newCustomer.address}
                onChange={changeHandler}
                placeholder="Description"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <p className="font-mono text-red-700">{newCustomerErr.addressErr}</p>
            </div>

            <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-black">
              Password
            </label>
            <div className="relative">
              <input
                type={`${isShow ? "password" : "text"}`}
                name="password"
                value={newCustomer.password}
                onChange={changeHandler}
                placeholder="*************"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {isShow ? (
                <FaEyeSlash
                  onClick={() => setIsShow((x) => !x)}
                  className="text-black absolute right-3 top-4 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={() => setIsShow((x) => !x)}
                  className="text-black absolute right-3 top-4 cursor-pointer"
                />
              )}
            </div>
            <p className='font-mono text-red-700' >{newCustomerErr.passwordErr }</p>
          </div>

          </div>
          

          {/* <div className="flex items-center pt-4">
                            <input onChange={activeHandler}   type="checkbox" name='isActive' checked={customerData.isActive} className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black dark:text-white ">Is Active</label>
                        </div> */}
          <div className="w-full flex justify-end items-end gap-2">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                resetState()
              }}
              className="flex w-24 bg-red-500 items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-red-400  "
            >
              <span> Cancel </span>
            </button>
            <button
              type="submit"
              className="flex w-24 bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              <span> Submit </span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddCustomerSetup;
