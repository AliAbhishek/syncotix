import React, { useState } from 'react'
import { BsSpeedometer2 } from 'react-icons/bs'
import MantineTable from '../../GlobalUses/MantineTable'
import { hvacReport } from '../../../utills/api/Reports/INdex'
import { useQuery } from 'react-query'

const ReportRealKitchen = () => {


    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }
    const { data : data , isLoading : isLoading, error : error } = useQuery('hvacReport',hvacReport.bind(this,4))




    const columns = [
        {
          accessorKey: 'country',
          header: 'Country',
          size: 120,
        }, 
        {
        accessorKey: 'state',
        header: 'State',
        size: 120,
        },
        {
            accessorKey: 'zone',
            header: 'Zone',
            size: 120,
        },
        {
        accessorKey: 'siteName',
        header: 'Site',
        size: 120,
        },
        {
        accessorKey: 'asset',
        header: 'Asset',
        size: 120,
        },
        {
        accessorKey: 'tDate',
        header: 'Date',
        size: 120,
        },
        {
        accessorKey: 'tTime',
        header: 'Time',
        size: 120,
        },
        {
        accessorKey: 'temp_in_degree',
        header: 'Temprature',
        size: 120,
        },
      ];
  return (
    <div className='py-4  w-full ' >
    <h4 className=" dark:text-slate-200 text-[#4884C0] text-lg font-medium pb-4">Temperature-Real Time Kitchen Assets</h4>

    <div className=' rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black  justify-center  items-center '>
        <button   onClick={collapseHandler} type="button"  className=" 
        dark:text-white dark:bg-[#263238] bg-white text-[#4884C0] flex  items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
            <p className='text-xl ' >Report</p>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
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
    </div>

  
  )
}

export default ReportRealKitchen