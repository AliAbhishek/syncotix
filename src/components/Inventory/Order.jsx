import React, { useState } from 'react'
import MantineTable from '../GlobalUses/MantineTable'

const Order = () => {
    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const data = [
        {
            'customer' : "Biryani By Kilo",
            'site' : 'BBK Raj Nagar',
            'asset' : 'Dining - HVAC Unit 1 - Near Entrance',
            'status' : 'Test',
            'quantity' : '1',
            'price' : '1111',
            'discount' : '11',
            'applicablePrice' : '11',
        },
        
    ]

    const columns = [
        {
          accessorKey: 'customer',
          header: 'Customer',
          size: 120,
        }, 
        {
        accessorKey: 'site',
        header: 'Site',
        size: 120,
        },
        {
        accessorKey: 'asset',
        header: 'Asset',
        size: 120,
        },
        {
            accessorKey: 'status',
            header: 'Atatus',
            size: 120,
        },
        {
        accessorKey: 'quantity',
        header: 'Quantity',
        size: 120,
        },
       
        {
        accessorKey: 'price',
        header: 'Price',
        size: 120,
        },
        {
        accessorKey: 'discount',
        header: 'Discount',
        size: 120,
        },
        {
            accessorKey: 'applicablePrice',
            header: 'Applicable Price',
            size: 120,
            },
      ];


  return (
    <div className='py-4  w-full ' >
    <h4 className=" dark:text-slate-200 text-[#4884C0] text-lg font-medium pb-4">Override</h4>

    <div className=' rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black  '>
        <button   onClick={collapseHandler} type="button"  className=" 
        dark:text-white dark:bg-[#263238] bg-white text-[#4884C0] flex  items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
            <p className='text-xl ' >Override</p>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>

        <div className="px-4 pb-4">
            {
                toggle ? 
                    <MantineTable columns={columns} data={data}  />
                :
                    null
            }
        </div>

    </div>
    </div>
  )
}

export default Order