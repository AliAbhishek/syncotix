import React, { useState } from 'react'
import HighCharts from '../../GlobalUses/HighCharts'
import HVACcharts from '../../GlobalUses/HVACcharts'
import { HvacChartOne, HvacChartTwo, TimeForChart } from '../../../utills/api/Trends/RealTime'
import { useQuery } from 'react-query'

const ThermalMoniter = () => {
    const [ toggle,setToggle ] = useState(true)
    const [ toggleTwo,setToggleTwo ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const collapseTwoHandler = () =>{
        setToggleTwo(x => !x)
    }

    const { data : oneData} = useQuery("HvacChartOne",HvacChartOne.bind(this,3))
    const { data : twoData} = useQuery("HvacChartTwo",HvacChartTwo.bind(this,6))
    const { data : timeData } = useQuery('TimeForChart',TimeForChart)


    const oneFilter = oneData?.map((x)=> ( { 'name' : x?.name, 'data' : x?.temp_in_degree.split(',').map((num)=> +num) } ) )
    const twoFilter = twoData?.map((x)=> ( { 'name' : x?.name, 'data' : x?.temp_in_degree.split(',').map((num)=> +num) } ) )
    const timeFilter = timeData?.map((x)=> x.tTime )


  return (
    <>
    <div className='py-4  w-full ' >
        <div className=' rounded-lg
            dark:text-white dark:bg-[#263238] bg-white text-black  '>
            <button   onClick={collapseHandler} type="button"  className=" 
            dark:text-white dark:bg-[#263238] bg-white text-[#4884C0] flex  items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
                <p className='text-xl ' >Thermal Monitoring - HVAC -Avg</p>
                {/* <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg> */}
            </button>
        
            {
                toggle ? 
                
                <div className="relative overflow-x-auto pt-4 dark:bg-[#263238] bg-slate-50 text-black ">
                    <div id="">
                        <HVACcharts data={oneFilter} time={timeFilter} />

                    </div>
                </div>
                :
                null
            }
        </div>
    </div>

    <div className='py-4  w-full ' >
        <div className=' rounded-lg
            dark:text-white dark:bg-[#263238] bg-white  text-black  '>
            <button   onClick={collapseTwoHandler} type="button"  className=" 
            dark:text-white dark:bg-[#263238] bg-white text-[#4884C0] flex  items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
                <p className='text-xl ' >Thermal Monitoring - HVAC -Avg</p>
                {/* <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg> */}
            </button>
        
            {
                toggleTwo ? 
                
                <div className="relative overflow-x-auto pt-4 dark:bg-[#263238] bg-slate-50 text-black ">
                    <div id="">
                        <HVACcharts data={twoFilter} time={timeFilter} />

                    </div>
                </div>
                :
                null
            }
        </div>
    </div>
    </>
  )
}

export default ThermalMoniter   