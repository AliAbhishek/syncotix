import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { deviceList } from '../../utills/api/Device'
import { getEnergyReadings } from '../../utills/api/DeviceEnery'
import { Autocomplete } from '@mantine/core'

const RealTimeTable = () => {
  const [deviceTypeId,setDeviceTypeId] = useState('1021')

  const [ data, setData] = useState([])

const [jsonData,setJsonData] = useState([])

  const [ deviceFilter, setDeviceFilter ] = useState({
      sortOrder : "",
      sortDirection : "",
      filterby : "",
      pageNo : 1,
      pageSize : 10000
  })

  const { refetch : deviceFetch } = useQuery(['deviceList', deviceFilter],deviceList.bind(this,deviceFilter),{ onSuccess : (x)=> {
  const defaultData = x?.items?.map((x)=>( { 'id' : x?.id, 'deviceName' : x?.deviceName  } ))
    setJsonData(defaultData)
      setData(x?.items);
      
  }})
  const { data : readingDetails } = useQuery(['getEnergyReadings',deviceTypeId],getEnergyReadings.bind(this,deviceTypeId))






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




const [ check, setCheck ] = useState(false)
const [val, setVal] = useState('')


const filterHandler = (e) =>{
  setVal(e.target.value)
  const list = data?.filter((x)=> x.deviceName.toLowerCase().includes(e.target.value.toLowerCase()))
  setJsonData(list)
}

const changeHandler = (x) =>{
  setDeviceTypeId(x)
  setCheck(false)
}




  return (
    <div className='h-60 w-full flex-flex-col gap-6' >
        <div  className='px-6' >

       
            {/* <select name='deviceType' onChange={(e)=>setDeviceTypeId(e.target.value)}  className="block w-full  px-5 py-3 mt-4 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
           
                <option  >Select</option>
               
                {
                  deviceLists?.map((x)=>(
                    <option value={x.id} key={x.id} >{x.deviceName}</option>
                  ))
                }
            </select> */}

            <button className="block w-full  bg-[#4884C0] px-5 py-3 mt-4  placeholder-gray-400  text-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700  " 
              onClick={()=>{setCheck(x => !x);}}>
              Select
            </button>

            {
              check ?
              <div id="dropdownSearch" className=" absolute w-80 bg-white rounded-lg  shadow-lg  dark:bg-gray-700">
                <div className="p-3">
                  <label for="input-group-search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                    </div>
                    <input type="text" value={val} onChange={filterHandler} className=" w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white  " placeholder="Search user" />
                  </div>
                </div>

                  <ul className="h-48 px-3 flex flex-col gap-2 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                    {
                      jsonData ?.map((x)=>(
                        <li onClick={()=>changeHandler(x?.id)} key={x?.id}  className='hover:bg-slate-100 py-2 px-2'  >{x?.deviceName}</li>
                        ))
                    }
                  </ul>
                </div>
                :
                null
            }



        </div>


        {
          readingDetails ?
        <div className= 'px-6 overflow-y-scroll mt-4 w-full   h-36 lg:h-80  no-scrollbar overflow-hidden divide-y-1  flex flex-col  gap-2  ' >
         
                <p className='flex justify-between  text-slate-700 dark:text-white' > <span>Mac Address :</span> <span>{readingDetails?.p1}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Device Id :</span> <span>{readingDetails?.id}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Average PF :</span> <span>{readingDetails?.p3}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Power R :</span> <span>{readingDetails?.p4}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Voltage R :</span> <span>{readingDetails?.p5}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Current R :</span> <span>{readingDetails?.p6}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Power Y :</span> <span>{readingDetails?.p7}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Voltage Y :</span> <span>{readingDetails?.p8}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Current Y :</span> <span>{readingDetails?.p9}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Power B :</span> <span>{readingDetails?.p10}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Voltage B :</span> <span>{readingDetails?.p11}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Current B :</span> <span>{readingDetails?.p12}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Cumulative Energy :</span> <span>{readingDetails?.p13}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Run Hours :</span> <span>{readingDetails?.p14}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>Total Power :</span> <span>{readingDetails?.p15}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>p16 :</span> <span>{readingDetails?.p16}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>p17 :</span> <span>{readingDetails?.p17}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>p18 :</span> <span>{readingDetails?.p18}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>p19 :</span> <span>{readingDetails?.p19}</span></p>
                <p className='flex justify-between text-slate-700 dark:text-white' > <span>p20 :</span> <span>{readingDetails?.p20}</span></p>
              </div>
              :
              null
        }


        
    </div>
  )
}

export default RealTimeTable