import React, { useEffect, useState } from 'react'
import MantineTable from '../../GlobalUses/MantineTable'
import { useQuery } from 'react-query'
import { thermalMonitoringHVACAvg } from '../../../utills/api/Trends/RealTime'
import ThermalMoniter from './ThermalMoniter'

const RealHvac = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const { data : data , isLoading : isLoading, error : error } = useQuery('thermalMonitoringHVACAvg',thermalMonitoringHVACAvg)



    const columns = [
        {
          accessorKey: 'asset',
          header: 'Name',
          size: 120,
        }, 
        {
        accessorKey: 'hrly',
        header: 'hrly',
        size: 120,
        },
        {
        accessorKey: 'prevDay',
        header: 'prevDay',
        size: 120,
        },
        {
        accessorKey: 'preWeek',
        header: 'preWeek',
        size: 120,
        },
        {
        accessorKey: 'currentDay',
        header: 'currentDay',
        size: 120,
        },
        {
        accessorKey: 'currentMonth',
        header: 'currentMonth',
        size: 120,
        },
        {
        accessorKey: 'currentWeek',
        header: 'currentWeek',
        size: 120,
        },
      ];



  return (
        <div className='py-4  w-full ' >
                <h4 className=" dark:text-slate-200 text-[#4884C0] text-lg font-medium pb-4">Thermal Monitoring - HVAC - Avg</h4>

                <div className=' rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black  '>
                    <button   onClick={collapseHandler} type="button"  className=" 
                    dark:text-white dark:bg-[#263238] bg-white text-[#4884C0] flex  items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
                        <p className='text-xl ' >HVAC Control</p>
                      
                      
                    </button>

                    <div className="px-4 pb-4">
                        {
                            toggle ? 
                                <MantineTable columns={columns} data={data} isLoading={isLoading} />
                            :
                                null
                        }
                    </div>

                </div>

      
{/* Thermal Monitoring */}

    <ThermalMoniter /> 

    </div>
  )
}

export default RealHvac