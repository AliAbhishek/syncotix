import React from 'react'
import HistoryKitchenEquip from './HistoryKitchenEquip'

const HistoryKitchen = () => {
  return (
    <div className=' flex dark:text-white dark:bg-[#263238] bg-white text-black flex-col justify-start items-start mt-1 py-2 h-screen  ' >
    <h4 className=" pl-4 pb-2 dark:text-slate-200 text-lg font-medium">Thermal Monitoring - HVAC -Avg</h4>
    <div className=' w-full  py-4 divide-y divide-black ' >
        <div className="relative overflow-x-auto  sm:rounded-lg">
            <table className="w-full text-sm text-left dark:text-white dark:bg-[#263238] bg-white text-black">
                <thead  className="text-lg  uppercase  ">
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
                    <tr className=" text-lg border-b">
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
                    <tr className=" text-lg border-b ">
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
{/* Temprature-kitchen Assets Search */}
<h4 className=" pl-4 pb-2 mt-8 dark:text-slate-200 text-lg font-medium">Temprature - HVAC Search</h4>

<div  className=' flex dark:text-white dark:bg-[#263238] bg-white text-black flex-col lg:flex-row justify-between items-center  gap-2 w-full py-8  ' >

    <div className='px-6' >
        <label className="block mb-2 text-sm  dark:text-black">Site</label>
        <select  className="block w-full px-5 py-3 mt-2  placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
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
        <label className="block mb-2 text-sm  dark:text-black">Asset</label>
        <select  className="block w-full px-5 py-3 mt-2  placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
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
        <label className="block mb-2 text-sm  dark:text-black">Form Date</label>
        <input type="date" name='email'   placeholder="" className="block w-full px-5 py-3 mt-2  placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        <p className='font-mono text-red-700' ></p>
    </div>

    <div className='px-6' >
        <label className="block mb-2 text-sm  dark:text-black">To Date</label>
        <input type="date" name='email'   placeholder="" className="block w-full px-5 py-3 mt-2  placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
        <p className='font-mono text-red-700' ></p>
    </div>

    <button style={{ backgroundColor : '#29669f' }} className="flex items-center justify-between mt-8 px-6 text-sm h-10 text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        <span> View report </span>
    </button>
</div>


{/* Temprature Kitchen Assets */}
        <HistoryKitchenEquip />


    </div>
  )
}

export default HistoryKitchen