import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { ElectricHealth } from '../../../utills/api/Trends/RealTime'
import MantineTable from '../../GlobalUses/MantineTable'

const RealHealth = () => {
    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }


    const { data, isLoading : isLoading  } = useQuery('ElectricHealth',ElectricHealth.bind(this,1))
   




  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
    <h4 className="dark:text-white  text-[#4884C0] pl-4   text-lg font-medium">ELECTRICAL HEALTH (Average)</h4>

    <div  className='w-full py-4 dark:text-white dark:bg-[#263238] rounded-lg bg-white text-black ' >
        <div className='pb-2 px-4 flex flex-col gap-2 ' >

            <div className=' flex  '  >
                <p className='w-1/2'   ></p>
                <p className='font-medium grow' >
                    Power
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </p>
                
            </div>
            
            {
                data?.map((x)=>(
                        < >
                            <div className=' flex  '  >
                                <p className='w-1/2'   >powCurrentWeek</p>
                                <p>{x.powCurrentWeek}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >powLastWeek</p>
                                <p>{x.powLastWeek}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >powMonth</p>
                                <p>{x.powMonth}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >powPreviousHR</p>
                                <p>{x.powPreviousHR}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >powToday</p>
                                <p>{x.powToday}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >powYesterday</p>
                                <p>{x.powYesterday}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volBCurrentWeek</p>
                                <p>{x.volBCurrentWeek}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volBLastWeek</p>
                                <p>{x.volBLastWeek}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volBPreviousHR</p>
                                <p>{x.volBPreviousHR}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volBToday</p>
                                <p>{x.volBToday}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volBYesterday</p>
                                <p>{x.volBYesterday}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volCurrentWeek</p>
                                <p>{x.volCurrentWeek}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volLastWeek</p>
                                <p>{x.volLastWeek}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volMonth</p>
                                <p>{x.volMonth}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volPreviousHR</p>
                                <p>{x.volPreviousHR}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volToday</p>
                                <p>{x.volToday}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volYCurrentWeek</p>
                                <p>{x.volYCurrentWeek}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volYLastWeek</p>
                                <p>{x.volYLastWeek}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volYMonth</p>
                                <p>{x.volYMonth}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volYPreviousHR</p>
                                <p>{x.volYPreviousHR}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volYToday</p>
                                <p>{x.volYToday}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volYYesterday</p>
                                <p>{x.volYYesterday}</p>
                            </div>
                            <div className=' flex '  >
                                <p className='w-1/2' >volYesterday</p>
                                <p>{x.volYesterday}</p>
                            </div>
                        </>
                ))
            }
                
            </div>
        </div>
</div>
 
  )
}

export default RealHealth