import React, { useState } from 'react'
// import AddSubMenu from './AddSubMenu'
// import { subMenuList } from '../../utills/api/SubMenu'
import { useQuery } from 'react-query'
import { deviceSensorList } from '../../../utills/api/DeviceSensor'
import AddDeviceSensor from './AddDeviceSensor'
import { deviceMeterList } from '../../../utills/api/DeviceMeterReading'
import AddDeviceMeter from './AddDeviceMeter'




const DeviceMeter = () => {

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
        pageSize : 10
    })


    const [ jumpVal, setJumpVal ] = useState(1)

    const [maxPages, setMaxPages] = useState(0);
    
    const { refetch : meterFetch } = useQuery(['deviceMeterList', deviceFilter],deviceMeterList.bind(this,deviceFilter),{ onSuccess : (x)=> {
        setData(x?.items);
        
    } })
  

    const nextHandler = async() =>{
        setDeviceFilter(old => ({
            ...old,
            pageNo: +old.pageNo + 1
        }))
    }

    const previousHandler = async() =>{
        if (deviceFilter.pageNo === 1) return;
        setDeviceFilter(old => ({
            ...old,
            pageNo: +old.pageNo - 1
        }))
    }

    const jumpHandler = () =>{
        if (+jumpVal > maxPages) {
            alert(`You can enter maximum value upto ${maxPages}`)
            return;
        }
        setDeviceFilter(old => ({
            ...old,
            pageNo: jumpVal
        }))
    }

    const filterHandler = (e) =>{
        setDeviceFilter(old => ({
            ...old,
            filterby:  e.target.value
        }))
    } 

return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <h4 className="dark:text-white  text-[#4884C0] pl-4  text-lg font-medium">Device Meter</h4>

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
                    <AddDeviceMeter modalName='add' meterFetch={meterFetch} />
                    
                    <svg  onClick={collapseHandler} data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 dark:text-white dark:bg-[#263238] bg-white text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
                {
                    toggle ? 
                    
                    <div className="relative overflow-x-auto ">
                        <table className="w-full text-sm text-left dark:text-white dark:bg-[#263238] bg-white text-black">
                            <thead  className="text-sm dark:bg-slate-700 bg-[#4884C0] text-white dark:text-white uppercase">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Sr. no
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        device Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        meter
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        totalPow
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        avgPf
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        powR
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        voltR
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        currR
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        powY
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        voltY
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        currY
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        powB
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        voltB
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        currB
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        cummEn
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        runHrs
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        powFac
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        r
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        y
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        b
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        cumConsp
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ac1
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ac2
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ac3
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        foh
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        boh
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        sinage
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        exFaR
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        exFaY
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        exFaB
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        oven1
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        oven2
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        oven3
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
                                                {x.meter}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.totalPow}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.avgPf}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.powR}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.voltR}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.currR}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.powY}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.voltY}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.currY}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.powB}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.voltB}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.currB}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.cummEn}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.runHrs}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.powFac}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.r}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.y}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.b}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.cumConsp}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.ac1}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.ac2}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.ac3}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.foh}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.boh}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.sinage}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.exFaR}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.exFaY}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.exFaB}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.oven1}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.oven2}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.oven3}
                                            </td>
                                            <td className="px-6 py-4">
                                                <AddDeviceMeter modalName='edit' ids={x.id} meterFetch={meterFetch}
                                                    isActive={x.isActive} meter={x.meter} totalPow={x.totalPow} avgPf={x.avgPf} powR={x.powR} 
                                                    voltR={x.voltR} currR={x.currR} powY={x.powY} voltY={x.voltY} currY={x.currY} powB={x.powB}
                                                    voltB={x.voltB} currB={x.currB} cummEn={x.cummEn} runHrs={x.runHrs} powFac={x.powFac}
                                                    r={x.r} y={x.y} b={x.b} cumConsp={x.cumConsp} ac1={x.ac1} ac2={x.ac2} ac3={x.ac3} foh={x.foh}
                                                    boh={x.boh} sinage={x.sinage} exFaR={x.exFaR} exFaY={x.exFaY} exFaB={x.exFaB} oven1={x.oven1} 
                                                    oven2={x.oven2} oven3={x.oven3} tdate={x.tdate} deviceId={x.deviceId}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                    : 
                                    <p>loading...</p>
                                }
                            </tbody>
                        </table>
                        <div className="flex justify-end items-center gap-4  mt-4">
                            {deviceFilter.pageNo > 1 ? <a onClick={previousHandler} style={{ backgroundColor : '#29669f' }} className="flex items-center justify-center px-3 h-8  text-sm font-medium text-white border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                                </svg>
                                Previous
                            </a> : null}

                            <input onChange={e => setJumpVal(e.target.value)} type="text" name='pageNo' value={jumpVal}  placeholder="" className="block w-20 h-9 px-5 py-3   text-gray-700 placeholder-gray-400 border-2 bg-white  border-gray-700 rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            
                            <a onClick={jumpHandler} style={{ backgroundColor : '#29669f' }} className="flex items-center justify-center px-3 h-8  text-sm font-medium text-white border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Jump
                            </a>

                            {deviceFilter.pageNo < maxPages ? <a style={{ backgroundColor : '#29669f' }} onClick={nextHandler} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-white border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>: null}

                            <div>
                                Page {deviceFilter.pageNo} - {maxPages}
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

export default DeviceMeter