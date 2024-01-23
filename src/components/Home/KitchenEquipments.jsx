import React from 'react'
import DonutCharts from '../GlobalUses/DonutCharts'
import {  TransactionTempSensorKitchen } from '../../utills/api/Dashboard'
import { useQuery } from 'react-query'


const KitchenEquipments = () => {

    const  { data : sensorData } = useQuery('TransactionTempSensorKitchen',TransactionTempSensorKitchen)




  return (
    <div className='flex flex-wrap w-full '>
        <div className=' dark:text-white dark:bg-[#263238] rounded-b-lg bg-white text-black flex flex-col  flex-wrap  lg:flex-row lg: justify-center items-center w-full  gap-6 py-8 '>
            {
                sensorData?.map((x)=>(
                    <div className='flex flex-col justify-center items-center '>
                        <DonutCharts lcl={x.lcl} ucl={x.ucl}  temp={x.temp_in_degree}   />
                        <p>{x.name}</p>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default KitchenEquipments