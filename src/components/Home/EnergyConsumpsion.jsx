import React from 'react';
import { useQuery } from 'react-query';
import { EnergyConsumption, EnergyConsumptionAverages } from '../../utills/api/Dashboard';

const EnergyConsumpsion = () => {

        // const { data : energyDetail } = useQuery('EnergyConsumption',EnergyConsumption)
        const { data : energyDetails } = useQuery('EnergyConsumptionAverages',EnergyConsumptionAverages)
        

        
    return (
        <div
          
            className='  py-8 rounded-b-lg
            dark:text-white dark:bg-[#263238] bg-white text-black  flex flex-col flex-wrap  lg:flex-row  justify-center items-center w-full gap-6  '
        >

        {
            energyDetails?.map((x)=>(

          <>
                <div
                    
                    className=' flex flex-col shadow-sm w-36  justify-between items-center px-8 py-4 break-words rounded-lg  dark:shadow-black shadow-slate-300'
                >
                    <span className='font-normal text-lg'>{x?.previousHR}</span>
                    <p className='text-sm text-blue Gray-500 mt-4'>
                        <span className='whitespace-nowrap'>Previous HR</span>
                    </p>
                </div>
            
                <div
                    
                    className=' flex flex-col shadow-sm w-36  justify-between items-center px-8 py-4 break-words rounded-lg  dark:shadow-black shadow-slate-300'
                >
                    <span className='font-normal text-lg'>{x?.today}</span>
                    <p className='text-sm text-blue Gray-500 mt-4'>
                        <span className='whitespace-nowrap'>Today</span>
                    </p>
                </div>
                <div
                    
                    className=' flex flex-col shadow-sm w-36  justify-between items-center px-8 py-4 break-words rounded-lg  dark:shadow-black shadow-slate-300'
                >
                    <span className='font-normal text-lg'>{x?.yesterday}</span>
                    <p className='text-sm text-blue Gray-500 mt-4'>
                        <span className='whitespace-nowrap'>Yesterday</span>
                    </p>
                </div>
                <div
                    
                    className=' flex flex-col shadow-sm py-4 w-36 justify-between items-center px-8 break-words rounded-lg  dark:shadow-black shadow-slate-300'
                >
                    <span className='font-normal text-lg'>{x?.lastWeek}</span>
                    <p className='text-sm text-blue Gray-500 mt-4'>
                        <span className='whitespace-nowrap'>Last Week</span>
                    </p>
                </div>
                <div
                    
                    className=' flex flex-col shadow-sm w-36  justify-between items-center px-8 py-4 break-words rounded-lg  dark:shadow-black shadow-slate-300'
                >
                    <span className='font-normal text-lg'>{x?.thisMonth}</span>
                    <p className='text-sm text-blue Gray-500 mt-4'>
                        <span className='whitespace-nowrap'>This Month</span>
                    </p>
                </div>
            </>
            ))
            }
           
        </div>
    );
};

export default EnergyConsumpsion;
