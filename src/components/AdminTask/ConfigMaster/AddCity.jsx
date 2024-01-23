import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createState, stateList, updateState } from '../../../utills/api/State';
import { AiFillEdit } from 'react-icons/ai';
import { createCity, updateCity } from '../../../utills/api/City';
import { toast } from 'react-toastify';
import { Modal } from '@mantine/core';


const AddCity = ({modalName,cityName,cityCode,stateNames,cityId,active,countryNames,cityFetch,stateId }) => {
    const [ isOpen, setIsOpen] = useState(false)
    const { mutateAsync : cityData } = useMutation('createCity',createCity)
    const { mutateAsync : updatedCity } = useMutation('updateCity',updateCity)

    const [ stateLists, setStateLists] = useState([])
    const [stateFilter, setStateFilter] = useState({
        sortOrder: "",
        sortDirection: "",
        filterby: "",
        pageNo: 1,
        pageSize: 1000,
      });
    
    
      const { refetch: stateFetch } = useQuery(
        ["stateList", stateFilter],
        stateList.bind(this, stateFilter),
        {
          onSuccess: (x) => {
            setStateLists(x?.items);
            
          },
        }
      );

    const [ cityDetails, setCityDetails ] = useState({
        name: cityName ? cityName : "",
        code: cityCode ? cityCode : "",
        stateId: stateId ? stateId : "",
        isActive : active ? active : true,
        countryName : countryNames ? countryNames : "",
        countryId : 1
    })

    const [ cityErr, setCityErr ] = useState({
        nameErr : "",
        codeErr : "",
        stateIdErr : "",
        countryNameErr : ""
    })

    const resetState = () =>{
        setCityDetails({
            name: cityName ? cityName : "",
            code: cityCode ? cityCode : "",
            stateId: stateId ? stateId : "",
            isActive : active ? active : true,
            countryName : countryNames ? countryNames : "",
            countryId : 1
        })
        setCityErr({
            nameErr : "",
            codeErr : "",
            stateIdErr : "",
            countryNameErr : ""
        })
    }

    const changeHandler = (e) =>{
        setCityDetails( old => ({...old,[e.target.name] : e.target.value }))
        setCityErr( old => ({...old,[`${e.target.name}Err`] : "" }))
    }

    const activeHandler = (e) =>{
        setCityDetails( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async (e) =>{
        e.preventDefault()
        const { name, code, stateId, countryName } = cityDetails
        const updatedData = {...cityDetails,id : cityId}
        

        let isValid = true;

        const newErr = {
            nameErr : "",
            codeErr : "",
            cityErr : "",
            countryNameErr : "",
        }

        if(name.length < 3){
            newErr.nameErr = "please provide a valid name",
            isValid = false
        }
        if(!code ){
            newErr.codeErr = "please provide a valid code",
            isValid = false

        }
        if(!stateId){
            newErr.stateIdErr = "please select",
            isValid = false

        }
        if(!countryName.length ){
            newErr.countryNameErr = "please select",
            isValid = false
        }

        if(!isValid){
            setCityErr(newErr)
            return
        }

        modalName === 'add' ?
            await cityData(cityDetails)
            .then((res)=>{
                setIsOpen(false)
                cityFetch()
                toast.success("added successfully")
                resetState()
            })
            .catch((err)=>{
                console.log(err)
            })
        :
            await updatedCity(updatedData)
            .then((res)=>{
                setIsOpen(false)
                cityFetch()
                toast.success("updated successfully")

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
                    <span> Add City </span>
                </button>
                :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
            }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="City Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative w-full    px-4 pb-3 pt-6  "  >
                <div className='relative flex flex-col md:grid md:grid-cols-2 gap-2'>

                        <div  >
                            <label className="block mb-2  text-sm text-black dark:text-white">City Name</label>
                            <input  onChange={changeHandler} type="text" name='name' value={cityDetails.name} placeholder="City Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{cityErr.nameErr}</p>
                        </div>
                        <div className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">City Code</label>
                            <input onChange={changeHandler} type="text" name='code' value={cityDetails.code}  placeholder="City Code" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{cityErr.codeErr}</p>
                        </div>
                        <div  className='' >
                          
                            <label className="block mb-2 text-sm text-black dark:text-white">State</label>
                            <select
                               onChange={changeHandler} name='stateId' value={cityDetails.stateId}
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            >
                                <option disabled selected value="">Select</option>
                                {stateLists?.map((x) => (
                                    <option value={x.id}>{x.name}</option>
                                ))}
                            </select>
                            <p className="font-mono text-red-700 ">{cityErr.stateIdErr}</p>

                        </div>
                        
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Country</label>
                            <select  onChange={changeHandler} name='countryName' value={cityDetails.countryName}  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option >Select</option>
                                <option value='India'  >India</option>
                                <option value='Pakistan'  >Pakistan</option>
                            </select>
                            <p className='font-mono text-red-700' >{cityErr.countryNameErr}</p>
                        </div>

                        <div className="flex items-center pt-4">
                            <input onChange={activeHandler}  id="disabled-checked-checkbox" type="checkbox" name='isActive' checked={cityDetails.isActive} className="w-4 h-4 " />
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

export default AddCity