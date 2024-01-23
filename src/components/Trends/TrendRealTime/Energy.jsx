import React, { useState } from 'react'
import EnergyMeterDetails from './EnergyMeterDetails'
import EnergyKWH from './EnergyKWH'
import EnergyFilter from './EnergyFilter'
import { useQuery } from 'react-query'
import { EnergyConsumption } from '../../../utills/api/Dashboard'


const Energy = () => {

    // const { data } = useQuery('EnergyConsumption',EnergyConsumption)
  
  return (
    <div className='
    dark:text-white   text-black  flex flex-col justify-start items-start mt-1 h-screen ' >
        <div className=' flex gap-2 w-full ' >
            <div   className='w-full lg:w-3/4 text-white px-2  ' >
{/* Energy Consumption(Average) */}
                <h4 className=" dark:text-slate-200 text-[#4884C0] text-lg font-medium">Energy Consumption(Average)</h4>
                <div className='flex gap-2 w-full mt-2' >
                    <div className=" 
            dark:text-white dark:bg-[#263238] bg-white text-black  flex flex-col w-full  py-4 justify-center items-center min-w-0 break-words rounded-lg mb-6 xl:mb-0 shadow-md">
                        <span className="font-normal text-xl">0.00/0.00</span>
                        <p className="text-sm text-blueGray-500 mt-4"><span className="whitespace-nowrap">Previous hr</span></p>
                    </div>
                    <div className="  
            dark:text-white dark:bg-[#263238] bg-white text-black flex flex-col w-full  py-4 justify-center items-center min-w-0 break-words  rounded-lg mb-6 xl:mb-0 shadow-md">
                        <span className="font-normal text-xl">0.00/0.00</span>
                        <p className="text-sm text-blueGray-500 mt-4"><span className="whitespace-nowrap">Today</span></p>
                    </div>
                </div>
{/* Energy Meter Details */}
                    <EnergyMeterDetails />

{/* Actual KWH And KAVH Hourly */}
                    <EnergyKWH />

            </div>
{/* Trend Filter */}
            <div   className='grow text-white hidden lg:block      ' >
                <EnergyFilter />
            </div>
        </div>
    </div>
  )
}

export default Energy