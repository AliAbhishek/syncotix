import React from 'react';
import { BsFillStopwatchFill } from 'react-icons/bs';
import ElectricalHealth from './ElectricalHealth';
import EnergyConsumpsion from './EnergyConsumpsion';
import Hvac from './Hvac';
import RealTimeChart from './RealTimeChart';
import RealTimeTable from './RealTimeTable';
import Savings from './Savings';
import TimeOfDay from './TimeOfDay';
import ThermalMonitoring from './ThermalMonitoring';
import KitchenEquipments from './KitchenEquipments';

const Home = () => {
    return (
        <div  className=' flex flex-col dark:text-black dark:bg-[#202125] bg-[#f5f5f5] text-black  justify-center items-start mt-2  '>
            {/*  savings */}

            <h4 className='text-[#4884C0] pl-4   dark:text-slate-200 text-lg font-medium'>
                Savings
            </h4>
            <div className='w-full  dark:text-black dark:bg-[#202125] bg-[#f5f5f5] text-black '>
                <Savings />
            </div>

            {/* Energy Dashboard*/}

            <h4 className='text-[#4884C0] pl-4  dark:text-slate-200 text-lg font-medium pt-2 '>
                Energy Dashboard
            </h4>
            
            <div className='w-full mb-4 mt-2 grid lg:grid-cols-6 gap-4 '>
                
                <div
                    className='col-span-3 xl:col-span-4 rounded-lg overflow-x-scroll no-scrollbar 
                    dark:text-black dark:bg-[#263238] bg-white  text-black  py-4 flex flex-col justify-center items-center'
                >
                    <div className=' flex pl-4 w-full items-center gap-2 mb-4 lg:mb-2  '>
                        <BsFillStopwatchFill className='text-2xl text-[#4884C0] dark:text-white ' />
                        <h4 className=' dark:text-slate-200 text-lg text-[#4884C0] font-normal '>
                            Real Time View
                        </h4>
                    </div >
                    <RealTimeChart  />
                </div>

                <div
                    
                    className=' col-span-3 xl:col-span-2 rounded-lg h-96 lg:h-auto
                    dark:text-black dark:bg-[#263238] bg-white text-black  py-4 flex flex-col px-4'
                >
                    <div className='flex  items-center   gap-2 '>
                        <BsFillStopwatchFill className='text-2xl text-[#4884C0] dark:text-white' />
                        <h4 className=' dark:text-slate-200  text-[#4884C0] text-lg font-normal  '>
                            Real Time View
                        </h4>
                    </div>
                    <RealTimeTable />
                </div>
            </div>

            {/* time of day */}
            <div className='flex flex-col w-full flex-wrap  '>
                <h4 className='text-red-500 rounded-t-lg dark:bg-[#263238] bg-white pl-4 dark:text-slate-200 text-lg font-medium pt-2  '>
                    Time Of Day - ENERGY CONSUMPTION (Current Day)
                </h4>
                <TimeOfDay />
            </div>

            {/* Energy Consumpsion */}
            <div className='flex flex-col w-full flex-wrap mt-4 '>
                <h4 className='text-red-500 rounded-t-lg dark:bg-[#263238] bg-white pl-4  dark:text-slate-200 text-lg font-medium pt-2 '>
                    Energy Consumption (Actual)
                </h4>
                <EnergyConsumpsion />
            </div>

            {/* Electrical Health */}
            <div className='flex flex-col w-full flex-wrap mt-4 '>
                <h4 className='text-red-500 rounded-t-lg dark:bg-[#263238] bg-white pl-4 pb-2 dark:text-slate-200 text-lg font-medium pt-2 '>
                    Electrical Health
                </h4>
                <ElectricalHealth />
            </div>

            {/* Thermal Monitoring */}
            <div className='flex flex-col w-full flex-wrap mt-4  '>
                <h4 className='text-[#4884C0] rounded-t-lg dark:bg-[#263238] bg-white pl-4 pb-2 dark:text-slate-200 text-lg font-medium pt-2 '>
                    Thermal Monitoring - HVAC
                </h4>
                <ThermalMonitoring />
            </div>

              {/* Thermal Kitchen Equipments */}
              <div className='flex flex-col w-full flex-wrap mt-4 '>
                <h4 className='text-[#4884C0] rounded-t-lg dark:bg-[#263238] bg-white pl-4 pb-2 dark:text-slate-200 text-lg font-medium pt-2 '>
                    Thermal Monitoring -Kitchen Equipments
                </h4>
                <KitchenEquipments />
            </div>

            {/* HVAC Control */}

            {/* <div className='flex flex-col w-full flex-wrap mt-6   ' > */}
            <Hvac />
            {/* </div> */}
        </div>
    );
};

export default Home;
