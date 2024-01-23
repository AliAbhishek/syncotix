import React, { useState } from 'react'
import HistoryEnergyMeterDetails from './HistoryEnergyMeterDetails'
import HistoryEnergyKWH from './HistoryEnergyKWH'
import { useQuery } from 'react-query'
import { EnergyReport } from '../../../utills/api/Trends/Historical'



const HistoryEnergy = () => {

   


    const [ filter,setFilter ] = useState({
        'dtTo' : '',
        'dtFrom' : '',
        'deviceNo' :  '1001'
    })


    const deviceLists  = [
        { 
           'id': '1001',
           'deviceName' : 'Main-Energy'
        },
        { 
         'id': '1002',
         'deviceName' : 'DG Energy'
       },
       { 
         'id': '1003',
         'deviceName' : 'HVAC'
       },
       { 
         'id': '1004',
         'deviceName' : 'Light'
       },
       { 
         'id': '1005',
         'deviceName' : 'Exhaust-Fresh Air'
       },
       { 
         'id': '1006',
         'deviceName' : 'Oven'
       },
       { 
         'id': '1007',
         'deviceName' : 'Refrigeration'
       }
     ]

     const [data, setData] = useState({
        'dtTo' : '2023-12-31',
        'dtFrom' : '2023-01-01',
        'deviceNo' :  '1003'
     })
     const { data : details } = useQuery(['EnergyReport',data],EnergyReport.bind(this,data))

 

    const xAxis = details?.map((x)=> ( x.tTime.slice(0,5) ))
    const energyList = details?.map((x)=> ( +x.total_pow ))
    const deviceName = details?.[0]?.deviceName
   

     const changeHandler = (e) =>{
        setFilter( old => ({...old,[e.target.name] : e.target.value }))
     }

     const submitHandler = () =>{
        setData(filter)
     }
     
  
  return (
    <div className='
    dark:text-white   text-black  flex flex-col justify-start items-start mt-1 h-screen ' >
        <div className=' flex gap-2 w-full ' >
            <div   className='w-full  text-white px-2  ' >
{/* Energy Consumption(Average) */}
                <h4 className=" dark:text-slate-200 text-[#4884C0] text-lg font-medium">Energy Consumption(Average)</h4>
                <div className='flex gap-2 w-full mt-2' >
                    <div className=" 
            dark:text-white dark:bg-[#263238] bg-white text-black  flex flex-col w-full  py-4 justify-center items-center min-w-0 break-words rounded-lg mb-6 xl:mb-0 shadow-md">
                        <span className="font-normal text-xl">0.00/0.00</span>
                        <p className="text-sm text-blueGray-500 mt-4"><span className="whitespace-nowrap">Previous hr</span></p>
                    </div>
                    <div className="  
            dark:text-white dark:bg-[#263238] bg-white text-black flex flex-col w-full  py-4 justify-center items-center min-w-0 break-words  rounded-lg mb-6 xl:mb-0 shadow-md">
                        <span className="font-normal text-xl">0.00/0.00</span>
                        <p className="text-sm text-blueGray-500 mt-4"><span className="whitespace-nowrap">Today</span></p>
                    </div>
                </div>


                <div className='flex flex-col justify-between w-full bg-white dark:bg-[#263238] py-6 rounded-lg shadow-sm mt-4 px-2 '  >
                    <h4 className="dark:text-white text-black  pl-4   text-lg font-medium">Search Energy Details</h4>
                    <div className='grid lg:grid-cols-4 gap-2 px-4 mt-2'  >
                        <div  className='' >
                            <label className="block mb-2 text-sm text-black dark:text-white">Device  </label>
                            <select name='deviceNo' defaultValue={filter.deviceNo} onChange={changeHandler}  className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value=''  >Select</option>
                                {
                                    deviceLists?.map((x)=>(
                                        <option value={x.id} >{x.deviceName}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">From Date </label>
                            <input type="date" name='dtFrom'  onChange={changeHandler}   placeholder="dtFrom" className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' ></p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-white">To Date </label>
                            <input type="date" name='dtTo'  onChange={changeHandler}   placeholder="dtTo" className="block w-full px-5 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' ></p>
                        </div>
                        <div className=' flex items-end justify-end' >
                            <button type='submit' onClick={submitHandler} className="flex w-32 bg-[#4884C0] h-10 items-center justify-end   px-6  text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                                    <span> View Report </span>
                            </button>
                        </div>
                        
                    </div>
                </div>

{/* Energy Meter Details */}
                    <HistoryEnergyMeterDetails xAxis={xAxis} energyList={energyList} deviceName={deviceName} />

{/* Actual KWH And KAVH Hourly */}
                    <HistoryEnergyKWH  />

            </div>
{/* Trend Filter */}
            {/* <div   className='grow text-white hidden lg:block      ' >
                <EnergyFilter />
            </div> */}
        </div>
    </div>
  )
}

export default HistoryEnergy