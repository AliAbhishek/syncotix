import { Modal } from '@mantine/core';
import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";


const AddSiteBaseLine = () => {
    const [ isOpen, setIsOpen] = useState(false)

  return (
    <div>

<button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                        <span> Add Site Baseline </span>
                    </button>
                    <Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Site Baseline Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form className="relative w-full  px-4 pb-3 pt-6 "  >
                    <div className='w-full flex flex-col md:grid md:grid-cols-2 gap-2 ' >
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Site</label>
                                <input type="text" name='text'   placeholder="Site" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' ></p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Baseline Start Date</label>
                                <input type="date" name='text'   placeholder="Baseline Start Date" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' ></p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Baseline End Date</label>
                                <input type="date" name='text'   placeholder="Baseline End Date" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' ></p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Baseline Sign Off date</label>
                                <input type="date" name='text'   placeholder="Baseline Sign Off date" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' ></p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Baseline Off Given By</label>
                                <input type="text" name='text'   placeholder="Baseline Off Given By" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' ></p>
                            </div>
                        </div>

                    <button type='submit' className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                        <span> Submit </span>
                    </button>

                    </form>
                </Modal>
    </div>
  )
}

export default AddSiteBaseLine