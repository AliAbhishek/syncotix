import React, { useState } from 'react'
import { BsSpeedometer2 } from 'react-icons/bs'
import { useQuery } from 'react-query'
import { deviceList } from '../../../utills/api/Device'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighCharts from '../../GlobalUses/HighCharts'
import { getEnergyReadings } from '../../../utills/api/DeviceEnery'
import { EnergyCharts } from '../../../utills/api/Trends/RealTime'
import { EnergyReport } from '../../../utills/api/Trends/Historical'


const HistoryEnergyMeterDetails = ({xAxis,energyList,deviceName}) => {



    

     
  return (
    
<div className='pt-4 pb-2 ' >
        <div>
            <button  type="button"  className=" 
            dark:text-white dark:bg-[#263238]  bg-white text-black flex  flex-col gap-4 md:gap-0 md:flex-row  items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
                <div  className='flex gap-2' >
                    <BsSpeedometer2 className=' mt-1 text-3xl text-[#4884C0]' />
                    <p className='dark:text-slate-200 text-[#4884C0] text-lg font-medium' >Energy Meter Details</p>
                </div>
             
            </button>
          
                
                <div className="relative overflow-x-auto  pt-4 bg-slate-50 text-black dark:bg-[#263238] ">
                    <div id="">
                        <HighCharts  deviceName={deviceName} time={xAxis} en={energyList}
                        />

                        {/* <EnergyChart xAxisData={xAxis}  data={energyList ?? energyList} /> */}
                    </div>
                </div>
             
        </div>
    </div>


  )
}



export default HistoryEnergyMeterDetails