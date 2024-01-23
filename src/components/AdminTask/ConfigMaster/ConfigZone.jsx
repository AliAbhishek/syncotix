import React, { useState } from 'react'
import AddZone from './AddZone'




const ConfigZone = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <h4 className="dark:text-white  text-[#4884C0] pl-4  text-lg font-medium">Zones</h4>

        <div  className='w-full rounded-lg flex dark:text-white dark:bg-[#263238] bg-white text-black ' >
            <div  className='flex gap-2 items-center py-4 px-2' >
                <label className="block ml-2 text-bold dark:text-white dark:bg-[#263238] bg-white text-black">Search</label>
                <input type="text"  name='filters'  placeholder="" className="block  px-5 py-1  text-gray-700 placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                <p className='font-mono text-red-700' ></p>
            </div>
        </div>

        <div  className='w-full rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black' >
  
        <div className='pb-6 px-4 ' >
            <div>
                <button  type="button"  className="flex  dark:text-white dark:bg-[#263238] bg-white text-black  items-center justify-between w-full py-4 font-medium text-left text-black-500 rounded-t-xl ">
                    <AddZone />
                    
                    <svg  onClick={collapseHandler} data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
                {
                    toggle ? 
                    
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left dark:text-white dark:bg-[#263238] bg-white text-black">
                            <thead  className="text-sm dark:bg-slate-700 bg-[#4884C0] text-white dark:text-white uppercase">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Sr. no
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        City Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Zone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
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
    
    </div>
  )
}

export default ConfigZone