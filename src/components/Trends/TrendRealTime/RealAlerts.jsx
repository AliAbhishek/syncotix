import React, { useEffect } from 'react'
import AlertDonut from '../../GlobalUses/AlertDonut'
import { useQuery } from 'react-query'
import { DeshAlerts, GetAlerts, HvacAlerts, KitchenAlerts } from '../../../utills/api/Trends/RealTime'

const RealAlerts = () => {

  

    // const { data : getAlertsData } = useQuery('GetAlerts',GetAlerts)
    const { data : deshAlertsData } = useQuery('DeshAlerts',DeshAlerts)
    const { data : hvacData  } = useQuery('HvacAlerts',HvacAlerts)
    const { data : kitchenData  } = useQuery('KitchenAlerts',KitchenAlerts)

    
    // const details = getAlertsData?.map((x)=> ({ 'name' : x.name, 'y' : x.temp_in_degree } ))
    const hvacList = hvacData?.map((x)=> ({ 'name' : x.displayName, 'y' : x.co } ))
    const kitchenList = kitchenData?.map((x)=> ({ 'name' : x.displayName, 'y' : x.co } ))

    const deshData = deshAlertsData?.map((x)=>( [{
        name : 'alerts',
        y : x?.alerts
    },
    {
        name : 'deviations',
        y : x?.deviations
    },
    {
        name : 'notifications',
        y : x?.notifications
    }]
    ))





  return (
    <div  className=' flex dark:text-white   text-black flex-col  gap-2 py-2 px-2 justify-start items-start mt-1   h-full ' >
        <div className=' w-full grid lg:grid-cols-2 gap-4  '>
            <div   className=' rounded-lg bg-white dark:bg-[#263238] overflow-hidden  ' > 
                    <h4 className="dark:text-white  dark:bg-[#263238] text-[#4884C0] pl-4  py-2  text-lg font-medium">Alerts Dashboards</h4>
                    <AlertDonut data={deshData?.[0]}  />

            </div>
            <div   className='rounded-lg bg-white dark:bg-[#263238] overflow-hidden  ' >
                <h4 className="dark:text-white pb-2 dark:bg-[#263238] text-[#4884C0] pl-4 py-2  text-lg font-medium">Open Alerts - HVAC</h4>
                <AlertDonut data={hvacList}  />
            </div>
        </div>
        <div   className='  w-full mt-2 rounded-lg bg-white dark:bg-[#263238] overflow-hidden' >
                <h4 className="dark:text-white pb-2 dark:bg-[#263238] text-[#4884C0] pl-4 py-2  text-lg font-medium">Open Alerts - Kitchen Assets</h4>
                <AlertDonut data={kitchenList}  />
        </div>
    </div>
  )
}

export default RealAlerts