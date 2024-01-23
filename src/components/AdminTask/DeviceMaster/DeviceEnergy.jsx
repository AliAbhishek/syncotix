import React, { useState } from 'react'


import { useQuery } from 'react-query'
import { deviceEnergyList } from '../../../utills/api/DeviceEnery'
import AddDeviceEnergy from './AddDeviceEnergy'

const DeviceEnergy = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const [ data, setData] = useState([])

    const [ energyFilter, setEnergyFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })
    const [ jumpVal, setJumpVal ] = useState(1)

    const [maxPages, setMaxPages] = useState(0);
    
    const { refetch : energyFetch  } = useQuery(['deviceEnergyList', energyFilter],deviceEnergyList.bind(this,energyFilter),{ onSuccess : (x)=> {
        setData(x?.items);
        
    }})


    const nextHandler = async() =>{
        setEnergyFilter(old => ({
            ...old,
            pageNo: +old.pageNo + 1
        }))
    }

    const previousHandler = async() =>{
        if (energyFilter.pageNo === 1) return;
        setEnergyFilter(old => ({
            ...old,
            pageNo: +old.pageNo - 1
        }))
    }

    const jumpHandler = () =>{
        if (+jumpVal > maxPages) {
            alert(`You can enter maximum value upto ${maxPages}`)
            return;
        }
        setEnergyFilter(old => ({
            ...old,
            pageNo: jumpVal
        }))
    }

    const filterHandler = (e) =>{
        setEnergyFilter(old => ({
            ...old,
            filterby:  e.target.value
        }))
    } 


  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <h4 className="dark:text-white  text-[#4884C0] pl-4  text-lg font-medium">Device's Energy</h4>

        <div  className='w-full rounded-lg flex dark:text-white dark:bg-[#263238] bg-white text-black ' >
            <div  className='flex gap-2 items-center py-4 px-2' >
                <label className="block ml-2 text-bold dark:text-white dark:bg-[#263238] bg-white text-black">Search</label>
                <input type="text" onChange={filterHandler} name='filters'  placeholder="" className="block  px-5 py-1  text-gray-700 placeholder-gray-400  border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                <p className='font-mono text-red-700' ></p>
            </div>
        </div>

        <div  className='w-full rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black ' >

        <div className='pb-6 px-4 ' >
            <div>
                <button  type="button"   className="flex  items-center justify-between dark:text-white dark:bg-[#263238] bg-white text-black w-full py-4 font-medium text-left text-black-500 rounded-t-xl ">
                    <AddDeviceEnergy modalName='add' energyFetch={energyFetch} />
                    
                    <svg  onClick={collapseHandler} data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
                {
                    toggle ? 
                    
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left dark:text-white dark:bg-[#263238] bg-white text-black">
                            <thead  className="text-sm dark:bg-slate-700 bg-[#4884C0] text-white dark:text-white uppercase">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Sr. no
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Device Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        kwh
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        calcKvah
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        acrunhrs
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        toatalPwr
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p1
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p2
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p3
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p4
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p5
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p6
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p7
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p8
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p9
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p10
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p11
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p12
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p13
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p14
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p15
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p16
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p17
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p18
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p19
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        p20
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
                                            <th scope="row" className="px-6 py-4 font-mediu whitespace-nowrap dark:text-white">
                                                {ind + 1}
                                            </th>
                                            <td className="px-6 py-4">
                                                {x.deviceName}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.kwh}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.calcKvah}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.acrunhrs}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.toatalPwr}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p1}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p2}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p3}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p4}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p5}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p6}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p7}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p8}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p9}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p10}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p11}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p12}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p13}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p14}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p15}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p16}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p17}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p18}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p19}
                                            </td>
                                            <td className="px-6 py-4">
                                                {x.p20}
                                            </td>
                                            <td className="px-6 py-4">
                                                <AddDeviceEnergy modalName='edit' energyFetch={energyFetch} 
                                                    p1={x.p1} p2={x.p2} p3={x.p3} p4={x.p4} p5={x.p5} p6={x.p6} p7={x.p7} p8={x.p8} p9={x.p9} p10={x.p10} p11={x.p11}
                                                    p12={x.p12} p13={x.p13} p14={x.p14} p15={x.p15} p16={x.p16} p17={x.p17} p18={x.p18} p19={x.p19} p20={x.p20}
                                                    deviceId={x.deviceId} calcKvah={x.calcKvah} kwh={x.kwh} acrunhrs={x.acrunhrs} toatalPwr={x.toatalPwr} isActive={x.isActive} ids={x.id}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                    : 
                                    <p>loading...</p>
                                }
                            </tbody>
                        </table>
                        <div className="flex justify-end items-center gap-4  mt-4   ">
                            {energyFilter.pageNo > 1 ? <a onClick={previousHandler} style={{ backgroundColor : '#29669f' }} className="flex items-center justify-center px-3 h-8  text-sm font-medium text-white border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                                </svg>
                                Previous
                            </a> : null}

                            <input onChange={e => setJumpVal(e.target.value)} type="text" name='pageNo' value={jumpVal}  placeholder="" className="block w-20 h-9 px-5 py-3 text-gray-700 placeholder-gray-400 border-2   border-gray-700 rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            
                            <a onClick={jumpHandler} style={{ backgroundColor : '#29669f' }} className="flex items-center justify-center px-3 h-8  text-sm font-medium text-white border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Jump
                            </a>

                            {energyFilter.pageNo < maxPages ? <a style={{ backgroundColor : '#29669f' }} onClick={nextHandler} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white  border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>: null}

                            <div>
                                Page {energyFilter.pageNo} - {maxPages}
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

export default DeviceEnergy