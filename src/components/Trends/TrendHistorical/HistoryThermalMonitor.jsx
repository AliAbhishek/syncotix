import React, { useState } from 'react'

const HistoryThermalMonitor = () => {
    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

  return (
    <div className='py-8  w-full' >
    <div  className=' flex flex-col justify-start items-start mt-1  py-2 h-screen ' >
    <h4 className=" pl-4 pb-2 dark:text-slate-200 text-lg font-medium">Temprature  - HVAC </h4>
    <div className=' w-full  py-4 divide-y divide-black ' >
        <div className="relative overflow-x-auto  sm:rounded-lg">
            <table className="w-full text-sm text-left dark:text-white dark:bg-[#263238] bg-white text-black">
                <thead  className="text-lg  uppercase ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                        <th scope="col" className="px-6 py-3">
                            HRLY
                        </th>
                        <th scope="col" className="px-6 py-3">
                            CURRENT DAY
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className=" border-b text-lg ">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                            Deep Freezer - veg
                        </th>
                        <td className="px-6 py-4">
                            0
                        </td>
                        <td className="px-6 py-4">
                            0
                        </td>
                    </tr>
                    <tr className="  text-lg border-b ">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                        Vertical Fridge-Veg
                        </th>
                        <td className="px-6 py-4">
                            0
                        </td>
                        <td className="px-6 py-4">
                            0
                        </td>
                    </tr>
                    <tr className=" text-lg border-b ">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                        Vertical Fridge - Non veg
                        </th>
                        <td className="px-6 py-4">
                            0
                        </td>
                        <td className="px-6 py-4">
                            0
                        </td>
                    </tr>
                    <tr className="text-lg border-b ">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                        Vertical Chiller-Near Under Counter
                        </th>
                        <td className="px-6 py-4">
                            0
                        </td>
                        <td className="px-6 py-4">
                            0
                        </td>
                    </tr>
                    <tr className=" text-lg border-b ">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                        MakeLine
                        </th>
                        <td className="px-6 py-4">
                            0
                        </td>
                        <td className="px-6 py-4">
                            0
                        </td>
                    </tr>
                    <tr className=" text-lg border-b ">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                        Oven
                        </th>
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
    </div>
    </div>
</div>
  )
}

export default HistoryThermalMonitor