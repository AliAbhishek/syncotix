import React, { useState } from 'react'

const HistoryHealth = () => {
    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

  return (
    <div className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1  h-screen ' >
   <div className='py-8  w-full' >
    <div>
        <button onClick={collapseHandler} type="button"  className="flex dark:text-white dark:bg-[#263238] bg-white text-black items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
            <p className='text-xl  ' >Electrical Health(Average)</p>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        {
            toggle ? 
            
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left ">
                    <thead className="text-lg  uppercase  ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Current Day
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" border-b text-lg ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                               Power Factor
                            </th>
                            <td className="px-6 py-4">
                                
                            </td>
                            
                        </tr>
                        <tr className=" text-lg border-b ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                                voltage(R)
                            </th>
                            <td className="px-6 py-4">
                                0
                            </td>
                        </tr>
                        <tr className=" text-lg ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                                Voltage(Y)
                            </th>
                            <td className="px-6 py-4">
                                0
                            </td>
                        </tr>
                        <tr className=" text-lg ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                                Voltage(B)
                            </th>
                            <td className="px-6 py-4">
                                0
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
    
    </div>
  )
}

export default HistoryHealth