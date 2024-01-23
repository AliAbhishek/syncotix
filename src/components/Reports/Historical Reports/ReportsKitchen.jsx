import React, { useState } from 'react'
import { BsSpeedometer2 } from 'react-icons/bs'

const ReportsKitchen = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }
  return (
    <div    className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1   h-screen ' >
        <h4 className="dark:text-white  text-black pl-4 pb-2 mt-8  text-lg font-medium">Temprature-Kitchen Asset Search</h4>
            <div className=' flex flex-col lg:flex-row justify-between items-center  gap-2 w-full dark:text-white dark:bg-[#263238] bg-white text-black py-8  ' >
                <div className='px-6' >
                    <label className="block mb-2 text-sm text-black dark:text-white">Site</label>
                    <select  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                        <option disabled selected >Select</option>
                        <option  >Main-Energy</option>
                        <option  >DC Energy</option>
                        <option  >HVAC</option>
                        <option  >Light</option>
                        <option  >Exhuast-Fresh Air</option>
                        <option  >Oven</option>
                        <option  >Refrigerator</option>
                    </select>
                </div>

                <div  className='px-6' >
                    <label className="block mb-2 text-sm text-black dark:text-white">Asset</label>
                    <select  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                        <option disabled selected >Select</option>
                        <option  >Main-Energy</option>
                        <option  >DC Energy</option>
                        <option  >HVAC</option>
                        <option  >Light</option>
                        <option  >Exhuast-Fresh Air</option>
                        <option  >Oven</option>
                        <option  >Refrigerator</option>
                    </select>
                </div>

                <div className='px-6' >
                    <label className="block mb-2 text-sm text-black dark:text-white">Form Date</label>
                    <input type="date" name='email'   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    <p className='font-mono text-red-700' ></p>
                </div>

                <div className='px-6' >
                    <label className="block mb-2 text-sm text-black dark:text-white">To Date</label>
                    <input type="date" name='email'   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    <p className='font-mono text-red-700' ></p>
                </div>

                <button style={{ backgroundColor : '#29669f' }} className="flex items-center justify-between mt-8 px-6 text-sm h-10 text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span> View report </span>
                </button>
            </div>

{/* Temprature Kitchen Assets */}

<div className='py-8  w-full pt-10' >
        <div className='dark:text-white dark:bg-[#263238] bg-white text-black  ' >
            <button  type="button"  className="flex  items-center justify-between w-full p-4 font-medium text-leftdark:text-white dark:bg-[#263238] bg-white text-blackrounded-t-xl ">
                <div onClick={collapseHandler} className='flex gap-2' >
                    <BsSpeedometer2 className='text-3xl' />
                    <p className='text-xl ' > Temperature-Kitchen Assets</p>
                </div>
                <svg  onClick={collapseHandler} data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
            {
                toggle ? 
                
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left dark:text-white dark:bg-[#263238] bg-white text-black">
                        <thead className="text-lg  uppercase dark:text-white dark:bg-[#263238] bg-white text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    sr. no
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Country
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    State
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    City
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Zone
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Site
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Asset
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Temprature
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-b dark:text-white dark:bg-[#263238] bg-white text-black">
                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                                    0
                                </th>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                <td className="px-6 py-4">
                                    0
                                </td>
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

                :
                null
            }
        </div>
    </div>
        
    
    </div>
  )
}

export default ReportsKitchen