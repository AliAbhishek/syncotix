import React, { useState } from 'react'
import { PiTestTubeFill } from "react-icons/pi";

const RealKitchenEquip = () => {
    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }
  return (
    <div className='py-8  w-full' >
        <div>
            <button onClick={collapseHandler} type="button"  className="flex dark:text-white dark:bg-[#263238] bg-white text-black items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
                <div className='flex items-center gap-3' >
                    <PiTestTubeFill className='text-2xl' />
                    <p className='text-xl ' > Thermal Monitoring - Kitch Equipments </p>
                </div>

                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
            {
                toggle ? 
                
                <div className="relative overflow-x-auto  ">
                    <table className="w-full text-sm text-left dark:text-white dark:bg-[#263238] bg-white text-black  ">
                        <thead   className="text-xs uppercase ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="  border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                            </tr>
                            <tr className="  dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
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

export default RealKitchenEquip