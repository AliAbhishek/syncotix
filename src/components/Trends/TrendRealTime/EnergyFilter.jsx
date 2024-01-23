import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { useQuery } from 'react-query'
import { FilterEnergy } from '../../../utills/api/Trends/RealTime'

const EnergyFilter = () => {
    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }







    const [ filters, setFilters ] = useState({
        type : "Main",
        menu : "Assets",
        subMenu : "1002",
        subRedoMenu : "Post Lunch"
    })

    const { data: filtered } = useQuery('FilterEnergy',FilterEnergy.bind(this,filters))


    const subRedoHandler = (e) =>{
        setFilters(old => ({...old,[e.target.name] : e.target.value }))
    }

    const filterHandler = async() =>{
        console.log(filters,'x')


    }


  return (
       
<div className='py-9  ' >
        <div className='' >
            <button onClick={collapseHandler}  type="button"   className="flex 
            dark:text-white dark:bg-[#263238] bg-white  text-black  items-center justify-between w-full p-4 font-normal text-left text-black-500 rounded-t-xl border-b-2 border-black ">
                <div className='flex  items-center gap-2' >
                    <FaFilter className=' text-xl text-[#4884C0]' />
                    <p className='dark:text-slate-200 text-[#4884C0] text-lg font-medium ' >Trend Filter</p>
                </div>
                
                <svg   data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
            </button>
            {
                toggle ? 
                <div  className="relative 
                dark:text-white dark:bg-[#263238] bg-white text-black  overflow-x-auto  overflow-y-scroll h-full  no-scrollbar  rounded-b-lg py-4">
{/* ENERGY         */}

                    <h4 className=" pl-4 pb-2 dark:text-slate-200 text-lg  font-normal">Energy</h4>
                    <div className="flex 
            dark:text-white dark:bg-[#263238] bg-white text-black flex-col gap-2 flex-wrap pl-8 overflow-x-auto ">
                        <div className="flex items-center mr-4">
                            <input disabled id="red-radio" type="radio" value="" name="filterType" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-normal text-dark dark:text-white">Live Energy Consumption</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input disabled id="red-radio" type="radio" value="" name="filterType" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-normal text-dark dark:text-white">Actual Energy Consumption - KWH vs KVAH vs Cost</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input disabled id="red-radio" type="radio" value="" name="filterType" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-normal text-dark dark:text-white">Hrly Avg Energy Consumption - KWH vs KVAH vs Cost</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="red-radio" checked={true} type="radio" value="Main" name="filterType" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-normal text-dark dark:text-white">Main</label>
                        </div>
                
                    </div>

{/* ASSETS */}
                    <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg  font-normal">Assets</h4>
                    <div className="flex flex-col gap-2 flex-wrap pl-8 ">
                        <div className="flex items-center">
                            <input onChange={subRedoHandler} checked={filters.subMenu === "1002" ?? true} type="radio"  id="disabled-checked-checkbox" name='subMenu' value="1002" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">DG Energy</label>
                        </div>
                        <div className="flex items-center">
                            <input onChange={subRedoHandler} checked={filters.subMenu === "1004" ?? true} name='subMenu' type="radio"  id="disabled-checked-checkbox" value="1004" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Light</label>
                        </div>
                        <div className="flex items-center">
                            <input onChange={subRedoHandler} checked={filters.subMenu === "1005" ?? true} name='subMenu' type="radio"  id="disabled-checked-checkbox" value="1005" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Fresh Air - Exhaust</label>
                        </div>
                        <div className="flex items-center">
                            <input onChange={subRedoHandler} checked={filters.subMenu === "1003" ?? true} name='subMenu' type="radio"  id="disabled-checked-checkbox" value="1003" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">HVAC</label>
                        </div>
                        <div className="flex items-center">
                            <input onChange={subRedoHandler} checked={filters.subMenu === "1007" ?? true} name='subMenu' type="radio"  id="disabled-checked-checkbox" value="1007" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Refrigeration</label>
                        </div>
                        <div className="flex items-center">
                            <input onChange={subRedoHandler} checked={filters.subMenu === "1001" ?? true} name='subMenu' type="radio"  id="disabled-checked-checkbox" value="1001" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Main Energy</label>
                        </div>
                        <div className="flex items-center">
                            <input onChange={subRedoHandler} checked={filters.subMenu === "1006" ?? true} name='subMenu' type="radio"  id="disabled-checked-checkbox" value="1006" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Oven</label>
                        </div>
                    </div>
{/* OPS WINDOW */}
                    {/* <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg  font-normal">OPS Window</h4>
                    <div className="flex flex-col gap-2 flex-wrap pl-8 ">
                        <div className="flex items-center mr-4">
                            <input id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-normal  text-dark dark:text-white">All</label>
                        </div>
                    </div> */}

{/* OPS WINDOW */}
                    <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg  font-normal">OPS Window</h4>
                    <div className="flex flex-col gap-2 flex-wrap pl-8 ">
                        <div className="flex items-center">
                            <input onChange={subRedoHandler}  checked={filters.subRedoMenu === "Crew Setup" ?? true} id="disabled-checked-checkbox" type="radio" name="subRedoMenu" value="Crew Setup" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Crew Setup</label>
                        </div>
                        <div className="flex items-center">
                            <input onChange={subRedoHandler}  checked={filters.subRedoMenu === "Pre Lunch" ?? true} id="disabled-checked-checkbox" type="radio" name="subRedoMenu" value="Pre Lunch" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Pre Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input  onChange={subRedoHandler}  checked={filters.subRedoMenu === "Peak Lunch" ?? true} id="disabled-checked-checkbox" type="radio" name="subRedoMenu" value="Peak Lunch" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Peak Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input  onChange={subRedoHandler}  checked={filters.subRedoMenu === "Post Lunch" ?? true} id="disabled-checked-checkbox" type="radio" name="subRedoMenu" value="Post Lunch" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal text-bwhite ">Post Lunch</label>
                        </div>
                        
                        <div className="flex items-center">
                            <input onChange={subRedoHandler} checked={filters.subRedoMenu === "Crew Shutdown" ?? true} id="disabled-checked-checkbox" type="radio" name="subRedoMenu" value="Crew Shutdown" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Crew Shutdown </label>
                        </div>
                    </div>

{/* Non - Ops WINDOW */}
                    <h4 className=" pl-4 py-2 text-dark dark:text-white text-lg   font-normal">NON - OPS Window</h4>
                    <div className="flex flex-col gap-2 flex-wrap pl-8 ">
                        <div className="flex items-center mr-4">
                            <input  disabled id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-normal  text-dark dark:text-white">No Operations</label>
                        </div>
                    </div>      

{/* Non - Ops WINDOW */}
                    <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg  font-normal">OPS Window & Assets</h4>
                    <div className="flex flex-col gap-2 flex-wrap pl-8 ">
                        <div className="flex items-center mr-4">
                            <input disabled id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-normal  text-dark dark:text-white">All</label>
                        </div>

                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">OPS Window</label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal  ">Crew Setup</label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Pre Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Peak Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Post Lunch</label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Peak Dinner</label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Crew Shutdown </label>
                        </div>



                        <div className="flex items-center mr-4">
                            <input disabled id="red-radio" type="radio" value="" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-normal  text-dark dark:text-white">Non-Ops Window</label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">No Operation </label>
                        </div>

                        <div className="flex items-center mr-4">
                            <input checked={true} id="red-radio" type="radio" value="Assets" name="colored-radio" className="w-5 h-5  " />
                            <label for="red-radio" className="ml-2 text-md font-normal  text-dark dark:text-white">Assets</label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">DG </label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Light </label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">fresh Air - Exhaust </label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">HVAC </label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Refrigeration </label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Non-Refrigeration </label>
                        </div>
                        <div className="flex items-center">
                            <input disabled  id="disabled-checked-checkbox" type="checkbox" value="" className="w-5 h-5 " />
                            <label  className="ml-2 text-md font-normal   ">Oven </label>
                        </div>
                        <button onClick={filterHandler} style={{ backgroundColor : '#29669f' }} className="flex items-center md:w-20 justify-between  w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
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

export default EnergyFilter