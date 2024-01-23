import React, { useState } from 'react'

const Hvac = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

  return (
    <div className='py-4  w-full ' >
        <div className=' rounded-lg
            dark:text-white dark:bg-[#263238] bg-white text-black  '>
            <button   onClick={collapseHandler} type="button"  className=" 
            dark:text-white dark:bg-[#263238] bg-white text-[#4884C0] flex  items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
                <p className='text-xl text-red-500 ' >HVAC Control</p>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
            {
                toggle ? 
                
                <div className="relative overflow-x-auto">
                    <table className=" w-full text-sm text-left">
                        <thead  className="text-sm dark:bg-slate-700 bg-[#4884C0] text-white dark:text-white uppercase">
                        

                            <tr>
                                <th scope="col" className="px-6 py-3">
                                Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Temp
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Temp High
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Temp Low
                                </th>
                                <th scope="col" className="px-6 py-3">
                                ON Hour
                                </th>
                                <th scope="col" className="px-6 py-3">
                                ON Minute
                                </th>
                                <th scope="col" className="px-6 py-3">
                                OFF Hour
                                </th>
                                <th scope="col" className="px-6 py-3">
                                OFF Minute
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Days
                                </th>
                                <th scope="col" className="px-6 py-3">
                                Status
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="  border-b ">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                ENE01266
                                </td>
                                <td className="px-6 py-4">
                                29
                                </td>
                                <td className="px-6 py-4">
                                31
                                </td>
                                <td className="px-6 py-4">
                                24
                                </td>
                                <td className="px-6 py-4">
                                16
                                </td>
                                <td className="px-6 py-4">
                                7	
                                </td>
                                <td className="px-6 py-4">
                                16
                                </td>
                                <td className="px-6 py-4">
                                10
                                </td>
                                <td className="px-6 py-4 flex gap-1  ">
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>S</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>M</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>T</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>W</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>T</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>F</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>S</span>
                                </td>
                                <td className="px-6 py-4">
                                ON
                                </td>
                            </tr>
                            <tr className=" border-b">
                            <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                ENE01266
                                </td>
                                <td className="px-6 py-4">
                                29
                                </td>
                                <td className="px-6 py-4">
                                31
                                </td>
                                <td className="px-6 py-4">
                                24
                                </td>
                                <td className="px-6 py-4">
                                16
                                </td>
                                <td className="px-6 py-4">
                                7	
                                </td>
                                <td className="px-6 py-4">
                                16
                                </td>
                                <td className="px-6 py-4">
                                10
                                </td>
                                <td className="px-6 py-4 flex gap-1  ">
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>S</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>M</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>T</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>W</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>T</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>F</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>S</span>
                                </td>
                                <td className="px-6 py-4">
                                ON
                                </td>
                            </tr>
                            <tr className="">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                ENE01266
                                </td>
                                <td className="px-6 py-4">
                                29
                                </td>
                                <td className="px-6 py-4">
                                31
                                </td>
                                <td className="px-6 py-4">
                                24
                                </td>
                                <td className="px-6 py-4">
                                16
                                </td>
                                <td className="px-6 py-4">
                                7	
                                </td>
                                <td className="px-6 py-4">
                                16
                                </td>
                                <td className="px-6 py-4">
                                10
                                </td>
                                <td className="px-6 py-4 flex gap-1  ">
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>S</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>M</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>T</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>W</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>T</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>F</span>
                                    <span className='dark:bg-slate-700 bg-[#4884C0] text-white py-1 px-2'>S</span>
                                </td>
                                <td className="px-6 py-4">
                                ON
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
  )
}

export default Hvac