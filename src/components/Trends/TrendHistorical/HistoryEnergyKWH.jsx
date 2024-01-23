import React, { useState } from 'react'
import { BsSpeedometer2 } from 'react-icons/bs'
import { useQuery } from 'react-query'
import { deviceList } from '../../../utills/api/Device'

import HighCharts from '../../GlobalUses/HighCharts'
import { getEnergyReadings } from '../../../utills/api/DeviceEnery'
import BarCharts from '../../GlobalUses/BarCharts'


const HistoryEnergyKWH = ({ xAxis, energyList, deviceName}) => {

    const [ deviceType, setDeviceTypeId] = useState(1001)

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const [ data, setData] = useState([])

    const [ deviceFilter, setDeviceFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10000
    })
  
    const { refetch : deviceFetch } = useQuery(['deviceList', deviceFilter],deviceList.bind(this,deviceFilter),{ onSuccess : (x)=> {
        setData(x?.items);
        
    }})


    const { data : readingData } = useQuery(['getEnergyReadings',deviceType],getEnergyReadings.bind(this,deviceType))

    
    const deviceLists  = [
        { 
           'id': 1001,
           'deviceName' : 'Main-Energy'
        },
        { 
         'id': 1002,
         'deviceName' : 'DG Energy'
       },
       { 
         'id': 1003,
         'deviceName' : 'HVAC'
       },
       { 
         'id': 1004,
         'deviceName' : 'Light'
       },
       { 
         'id': 1005,
         'deviceName' : 'Exhaust-Fresh Air'
       },
       { 
         'id': 1006,
         'deviceName' : 'Oven'
       },
       { 
         'id': 1007,
         'deviceName' : 'Refrigeration'
       }
     ]
     


  return (
    
<div className='pt-4 pb-2 ' >
        <div>
            <button  type="button"  className=" 
            dark:text-white dark:bg-[#263238] bg-white text-black flex flex-col gap-4 md:gap-0 md:flex-row  items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
                <div onClick={collapseHandler} className='flex gap-2' >
                    {/* <BsSpeedometer2 className=' text-3xl text-[#4884C0]' /> */}
                    <p className='dark:text-slate-200 text-red-500 text-lg font-medium' >Actual KWH And KAVH Hourly</p>
                </div>

                
                
                {/* <svg  onClick={collapseHandler} data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg> */}
            </button>
            {
                toggle ? 
                
                <div className="relative overflow-x-auto pt-4 dark:bg-[#263238] bg-slate-50 text-black ">
                    <div id="">
                        {/* <HighCharts  test="test" /> */}
                        <BarCharts  data={energyList} time={xAxis} />
                    </div>
                </div>
                :
                null
            }
        </div>
    </div>


  )
}

export default HistoryEnergyKWH