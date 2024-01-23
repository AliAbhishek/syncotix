import React from 'react';
import { useQuery } from 'react-query';
import { TimeOfDayConsumption } from '../../utills/api/Dashboard';
 
const TimeOfDay = () => {


    const { data : timeOfDayDetails } = useQuery('TimeOfDayConsumption',TimeOfDayConsumption)



    return (
        <div className='flex flex-wrap w-full '>
            <div className=' dark:text-white dark:bg-[#263238] rounded-b-lg bg-white text-black flex flex-col  flex-wrap  lg:flex-row lg: justify-center items-center w-full  gap-6 py-8 '>
                {
                    timeOfDayDetails?.map((x)=>(
                        <>
                            <div className=' flex flex-col shadow-sm justify-between items-center px-8 py-4 break-words  rounded-lg  dark:dark:shadow-black shadow-slate-300'
                            >
                                <span className='font-normal text-lg'>{x.a3}</span>
                                <p className='text-sm text-blue Gray-500 mt-4'>
                                    <span className='whitespace-nowrap'>a3</span>
                                </p>
                            </div>

                            <div className=' flex flex-col shadow-sm justify-between items-center px-8 py-4 break-words  rounded-lg  dark:dark:shadow-black shadow-slate-300'
                            >
                                <span className='font-normal text-lg'>{x.a4}</span>
                                <p className='text-sm text-blue Gray-500 mt-4'>
                                    <span className='whitespace-nowrap'>a4</span>
                                </p>
                            </div>
                        </>
                    ))
                }
                
                
            </div>
        </div>
    );
};

export default TimeOfDay;
