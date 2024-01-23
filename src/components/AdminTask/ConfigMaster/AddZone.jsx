import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";


const AddZone = () => {
    const [ isOpen, setIsOpen] = useState(false)

  return (
    <div>

<button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                        <span> Add Zone </span>
                    </button>
        {
        isOpen ? 
        <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-5"
        >
        <div className="relative w-3/4 my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-[#263238] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-normal font-semibold text-[#4884C0] dark:text-white">
                    Add Zone
                </h3>
                <RxCross1 onClick={()=>setIsOpen(false)} className='text-xl cursor-pointer text-black dark:text-white' />
                </div>

                <form className="relative w-full  px-8 py-6   "  >
                    <div  >
                        <label className="block mb-2 text-sm text-black dark:text-white">City Name</label>
                        <input type="text" name='text' placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        <p className='font-mono text-red-700' ></p>
                    </div>
                    <div className='pt-2'  >
                            <label className="block mb-2 text-sm text-black dark:text-white">Zone</label>
                            <input type="text" name='text'   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' ></p>
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

export default AddZone