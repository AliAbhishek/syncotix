import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { deviceAlertList } from '../../../utills/api/DeviceAlert'
import AddDeviceAlert from './AddDeviceAlert'




const DeviceAlert = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const [ data, setData] = useState([])

    const [ deviceAlertFilter, setDeviceAlertFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })


    const [ jumpVal, setJumpVal ] = useState(1)

    const [maxPages, setMaxPages] = useState(0);
    
    const { refetch : alertFetch } = useQuery(['deviceAlertList', deviceAlertFilter],deviceAlertList.bind(this,deviceAlertFilter),{ onSuccess : (x)=> {
        setData(x?.items);
        
    } })
  

    const nextHandler = async() =>{
        setDeviceAlertFilter(old => ({
            ...old,
            pageNo: +old.pageNo + 1
        }))
    }

    const previousHandler = async() =>{
        if (deviceAlertFilter.pageNo === 1) return;
        setDeviceAlertFilter(old => ({
            ...old,
            pageNo: +old.pageNo - 1
        }))
    }

    const jumpHandler = () =>{
        if (+jumpVal > maxPages) {
            alert(`You can enter maximum value upto ${maxPages}`)
            return;
        }
        setDeviceAlertFilter(old => ({
            ...old,
            pageNo: jumpVal
        }))
    }

    const filterHandler = (e) =>{
        setDeviceAlertFilter(old => ({
            ...old,
            filterby:  e.target.value
        }))
    } 

return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <h4 className="dark:text-white  text-[#4884C0] pl-4  text-lg font-medium">Device Alert</h4>

        <div  className='w-full rounded-lg flex dark:text-white dark:bg-[#263238] bg-white text-black ' >
            <div  className='flex gap-2 items-center py-4 px-2' >
                <label className="block ml-2 text-bold dark:text-white dark:bg-[#263238] bg-white text-black">Search</label>
                <input type="text" onChange={filterHandler} name='filters'  placeholder="" className="block  px-5 py-1  text-gray-700 placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                <p className='font-mono text-red-700' ></p>
            </div>
        </div>

    

        <div  className='w-full rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black' >

        <div className='pb-6 px-4 ' >
            <div>
                <button  type="button"  className="flex  items-center justify-between dark:text-white dark:bg-[#263238] bg-white text-black  w-full py-4 font-medium text-left text-black-500 rounded-t-xl ">
                    <AddDeviceAlert modalName='add' alertFetch={alertFetch} />
                    
                    <svg  onClick={collapseHandler} data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 dark:text-white dark:bg-[#263238] bg-white text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
                {
                    toggle ? 
                    <div className="relative overflow-x-auto ">
                        <table className="w-full text-sm text-left dark:text-white dark:bg-[#263238] bg-white text-black ">
                            <thead  className="text-sm dark:bg-slate-700 bg-[#4884C0] text-white dark:text-white uppercase">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Sr. no
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        device Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Temp in Degree
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        aType
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        dt
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        reportDate
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    data ? data?.map((x,ind) =>( 
                                        <tr key={x.id} className=" border-b dark:text-white dark:bg-[#263238] bg-white text-black">
                                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                                                {ind + 1}
                                            </th>
                                            <td className="px-6 py-4">
                                                {x.deviceName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.temp_in_degree}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.aType}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.dt}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.reportDate}
                                            </td>
                                            <td className="px-6 py-4">
                                                <AddDeviceAlert modalName='add' alertFetch={alertFetch} />
                                            </td>
                                        </tr>
                                    ))
                                    : 
                                    <p>loading...</p>
                                }
                            </tbody>
                        </table>
                        <div className="flex justify-end items-center gap-4  mt-4">
                            {deviceAlertFilter.pageNo > 1 ? <a onClick={previousHandler} style={{ backgroundColor : '#29669f' }} className="flex items-center justify-center px-3 h-8  text-sm font-medium text-white border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                                </svg>
                                Previous
                            </a> : null}

                            <input onChange={e => setJumpVal(e.target.value)} type="text" name='pageNo' value={jumpVal}  placeholder="" className="block w-20 h-9 px-5 py-3   text-gray-700 placeholder-gray-400 border-2 bg-white  border-gray-700 rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            
                            <a onClick={jumpHandler} style={{ backgroundColor : '#29669f' }} className="flex items-center justify-center px-3 h-8  text-sm font-medium text-white border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Jump
                            </a>

                            {deviceAlertFilter.pageNo < maxPages ? <a style={{ backgroundColor : '#29669f' }} onClick={nextHandler} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-white border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>: null}

                            <div>
                                Page {deviceAlertFilter.pageNo} - {maxPages}
                            </div>
                        </div>
                    </div>
                        
                    :
                    null
                }
            </div>
        </div>
        </div>
    
    </div>
  )
}

export default DeviceAlert