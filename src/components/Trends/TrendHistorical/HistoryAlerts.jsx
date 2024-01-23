import React from 'react'

const HistoryAlerts = () => {
  return (
    <div    className=' flex dark:text-white dark:bg-[#263238] bg-white text-black flex-col  gap-2 py-2 px-2 justify-start items-start mt-1   h-screen ' >
        <div className=' w-full flex gap-2 '>
            <div  className='w-1/3  h-96 ' > 
                <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg font-medium">Alerts Dashboards</h4>
            </div>
            <div  className='grow ' >
                <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg font-medium">Open Alerts - HVAC</h4>
            </div>
        </div>
        <div  className='grow  w-full' >
            <h4 className=" pl-4 py-2 dark:text-slate-200 text-lg font-medium">Open Alerts - Kitchen Assets</h4>
        </div>
    
    </div>
  )
}

export default HistoryAlerts