import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";


const AddOrder = () => {
    const [ isOpen, setIsOpen] = useState(false)

  return (
    <div>

<button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                        <span> Add New </span>
                    </button>
        {
        isOpen ? 
        <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5"
        >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-[#263238] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                    Project Details
                </h3>
                <RxCross1 onClick={()=>setIsOpen(false)} className='text-xl cursor-pointer' />
            
                </div>

                <form className="relative w-full  px-8 py-6  "  >
                    <div className='lg:grid lg:grid-cols-2 lg:gap-4' >
                    <div  className='' >
                        <label className="block mb-2 text-sm text-black dark:text-white">Customers</label>
                        <select  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
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
                    <div  className='' >
                        <label className="block mb-2 text-sm text-black dark:text-white">Site</label>
                        <select  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
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
                    <div  className='' >
                        <label className="block mb-2 text-sm text-black dark:text-white">Asset</label>
                        <select  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
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
                    <div  className='' >
                        <label className="block mb-2 text-sm text-black dark:text-white">Status</label>
                        <select  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
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
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Quantity</label>
                            <input type="email" name='email'   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' ></p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Price</label>
                            <input type="email" name='email'   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' ></p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Discount</label>
                            <input type="email" name='email'   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' ></p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Applicable price</label>
                            <input type="email" name='email'   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' ></p>
                        </div>
                        {/* <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" checked />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-black">Checked toggle</span>
                        </label> */}
                    </div>

                    <button type='submit' className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                        <span> Submit </span>
                    </button>


                    </form>
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        :
        null
    }
    </div>
  )
}

export default AddOrder