import React from 'react'
import { FaChartBar,FaArrowUp } from "react-icons/fa";
import { BsDatabaseFillUp, BsFillPiggyBankFill, BsWallet2 } from "react-icons/bs";
import { FaSackDollar } from "react-icons/fa6"


const Savings = () => {
  return (
    <>
    <div className="flex flex-wrap w-full pt-2">
        <div className="w-full lg:w-6/12 xl:w-3/12 px-1  ">
            <div className="relative dark:text-white dark:bg-[#263238] bg-white text-black  flex flex-col min-w-0 break-words  rounded-lg mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                <div className="flex flex-wrap xl:flex-nowrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        {/* <h5 className="text-blueGray-400 uppercase font-bold text-xs">NEW USERS</h5> */}
                        <span className="font-normal text-xl">2,356</span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-[#547faa]">
                            <BsFillPiggyBankFill className='text-2xl' />
                        </div>
                    </div>
                </div>
                <p className="text-sm text-blueGray-500 mt-4"><span className="whitespace-nowrap">Yesterday</span></p>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-1 ">
            <div   className="relative dark:text-white dark:bg-[#263238] bg-white text-black  flex flex-col min-w-0 break-words  rounded-lg mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                <div className="flex flex-wrap xl:flex-nowrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        {/* <h5 className="text-blueGray-400 uppercase font-bold text-xs">NEW USERS</h5> */}
                        <span className="font-normal text-xl">2,356</span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-[#547faa]">
                            <BsWallet2 className='text-2xl' />
                        </div>
                    </div>
                </div>
                <p className="text-sm text-blueGray-500 mt-4"><span className="whitespace-nowrap">Current Week</span></p>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-1 ">
            <div   className="relative dark:text-white dark:bg-[#263238] bg-white text-black  flex flex-col min-w-0 break-words  rounded-lg mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                <div className="flex flex-wrap xl:flex-nowrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        {/* <h5 className="text-blueGray-400 uppercase font-bold text-xs">NEW USERS</h5> */}
                        <span className="font-normal text-xl">2,356</span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-[#547faa]">
                            <BsDatabaseFillUp className='text-2xl' />    
                        </div>
                    </div>
                </div>
                <p className="text-sm text-blueGray-500 mt-4"><span className="whitespace-nowrap">Previous Week</span></p>
                </div>
            </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-1 ">
            <div  className="relative dark:text-white dark:bg-[#263238] bg-white text-black  flex flex-col min-w-0 break-words  rounded-lg mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                <div className="flex flex-wrap xl:flex-nowrap">
                    <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        {/* <h5 className="text-blueGray-400 uppercase font-bold text-xs">NEW USERS</h5> */}
                        <span className="font-normal text-xl">2,356</span>
                    </div>
                    <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-[#547faa]">
                            <FaSackDollar className='text-2xl' />
                        </div>
                    </div>
                </div>
                <p className="text-sm text-blueGray-500 mt-4"><span className="whitespace-nowrap">Current Month</span></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Savings