import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'

const HistoryEnergyFilter = () => {
    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }
  return (
       
<div className='py-8 ' >
        <div>
            <button onClick={collapseHandler}  type="button"   className="flex dark:text-white dark:bg-[#263238] bg-white text-black items-center justify-between w-full p-4 font-medium text-left -500 rounded-t-xl border-b-2 border-black ">
                <div className='flex items-center gap-2' >
                    <FaFilter className=' text-xl' />
                    <p className='text-xl  ' >Energy Meter Details</p>
                </div>
                
                <svg   data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
            {
                toggle ? 
                <div  className="relative dark:text-white dark:bg-[#263238] bg-white text-black overflow-x-auto  rounded-b-lg py-4">
{/* ENERGY         */}

                    <h4 className=" pl-4 pb-2 dark:text-slate-200 text-lg  font-medium">Energy</h4>
                    <div className="flex flex-col gap-2 flex-wrap pl-8 dark:text-white dark:bg-[#263238] bg-white text-black">
                        <div className="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-medium  dark:text-black">Live Energy Consumption</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-medium  dark:text-black">Actual Energy Consumption - KWH vs KVAH vs Cost</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-medium  dark:text-black">Hrly Avg Energy Consumption - KWH vs KVAH vs Cost</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-medium  dark:text-black">Mains</label>
                        </div>
                
                    </div>

{/* ASSETS */}
                    <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg  font-medium">Assets</h4>
                    <div className="flex flex-col gap-2 flex-wrap pl-8  dark:text-white dark:bg-[#263238] bg-white text-black">
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">DG</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Light</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Fresh Air - Exhaust</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">HVAC</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Refrigeration</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Non-Refrigeration-Oven</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Oven</label>
                        </div>
                    </div>
{/* OPS WINDOW */}
                    <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg  font-medium">OPS Window</h4>
                    <div className="flex dark:text-white dark:bg-[#263238] bg-white text-black flex-col gap-2 flex-wrap pl-8 ">
                        <div className="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-medium  dark:text-black">All</label>
                        </div>
                    </div>

{/* OPS WINDOW */}
                    <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg  font-medium">OPS Window</h4>
                    <div className="flex dark:text-white dark:bg-[#263238] bg-white text-black flex-col gap-2 flex-wrap pl-8 ">
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Crew Setup</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Pre Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Peak Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Post Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Peak Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Crew Shutdown </label>
                        </div>
                    </div>

{/* Non - Ops WINDOW */}
                    <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg  font-medium">NON - OPS Window</h4>
                    <div className="flex dark:text-white dark:bg-[#263238] bg-white text-black flex-col  gap-2 flex-wrap pl-8 ">
                        <div className="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-medium  dark:text-black">No Operations</label>
                        </div>
                    </div>      

{/* Non - Ops WINDOW */}
                    <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg  font-medium">OPS Window & Assets</h4>
                    <div className="flex dark:text-white dark:bg-[#263238] bg-white text-black flex-col gap-2 flex-wrap pl-8 ">
                        <div className="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-medium  dark:text-black">All</label>
                        </div>

                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">OPS Window</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Crew Setup</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Pre Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Peak Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Post Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Peak Dinner</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Crew Shutdown </label>
                        </div>



                        <div className="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-medium  dark:text-black">Non-Ops Window</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">No Operation </label>
                        </div>

                        <div className="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-medium  dark:text-black">Assets</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">DG </label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Light </label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">fresh Air - Exhaust </label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">HVAC </label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Refrigeration </label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Non-Refrigeration </label>
                        </div>
                        <div className="flex items-center">
                            <input  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-medium   ">Oven </label>
                        </div>
                        <button style={{ backgroundColor : '#29669f' }} className="flex items-center md:w-1/2 justify-between  w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span> Filter </span>
                        </button>
                    </div>



                </div>

                
                :
                null
            }
        </div>
    </div>
  )
}

export default HistoryEnergyFilter