import React, { useState } from 'react'
import { BsSpeedometer2 } from 'react-icons/bs'
import { useQuery } from 'react-query'
import { deviceList } from '../../../utills/api/Device'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighCharts from '../../GlobalUses/HighCharts'
import { getEnergyReadings } from '../../../utills/api/DeviceEnery'
import { EnergyCharts } from '../../../utills/api/Trends/RealTime'


const EnergyMeterDetails = () => {

    const [ deviceType, setDeviceTypeId] = useState(2)

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
  
//  device list
    const { refetch : deviceFetch } = useQuery(['deviceList', deviceFilter],deviceList.bind(this,deviceFilter),{ onSuccess : (x)=> {
        setData(x?.items);
        
    }})



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
     
// when device get selected provide device name
    const { data : readingData } = useQuery(['getEnergyReadings',deviceType],getEnergyReadings.bind(this,deviceType))

// provide device data and time
    const { data : energyData } = useQuery('EnergyCharts',EnergyCharts)
    const energyList = energyData?.map((x)=> ( +x.p ))
    const xAxis = energyData?.map((x)=> ( x.tTime ))

    

     
  return (
    
<div className='pt-4 pb-2 ' >
        <div>
            <button  type="button"  className=" 
            dark:text-white dark:bg-[#263238] bg-white text-black flex flex-col gap-4 md:gap-0 md:flex-row  items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
                <div onClick={collapseHandler} className='flex gap-2' >
                    <BsSpeedometer2 className=' text-3xl text-[#4884C0]' />
                    <p className='dark:text-slate-200 text-[#4884C0] text-lg font-medium' >Energy Meter Details</p>
                </div>
                <div  className='px-6' >
                    <select name='deviceType' onChange={(e)=>setDeviceTypeId(e.target.value)}  className="block w-full px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                        <option disabled selected value=''  >Select</option>
                        {
                            data?.map((x)=>(
                                <option value={x.id} >{x.deviceName}</option>
                            ))
                        }
                    </select>
                </div>

                
                {/* <div  className='px-6' >
                    <select  className="block w-full px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                        <option disabled selected >Select</option>
                        <option  >Main-Energy</option>
                        <option  >DC Energy</option>
                        <option  >HVAC</option>
                        <option  >Light</option>
                        <option  >Exhuast-Fresh Air</option>
                        <option  >Oven</option>
                        <option  >Refrigerator</option>
                    </select>
                </div> */}
                {/* <svg  onClick={collapseHandler} data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg> */}
            </button>
            {
                toggle ? 
                
                <div className="relative overflow-x-auto  pt-4 bg-slate-50 text-black dark:bg-[#263238] ">
                    <div id="">
                        <HighCharts  deviceName={readingData?.deviceName} time={xAxis} en={energyList} 
                        />

                        {/* <EnergyChart xAxisData={xAxis}  data={energyList ?? energyList} /> */}
                    </div>
                </div>
                :
                null
            }
        </div>
    </div>


  )
}

export default EnergyMeterDetails