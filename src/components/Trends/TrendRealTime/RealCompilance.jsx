import React from 'react'
import { useQuery } from 'react-query'
import { CompilanceOfStore, DeviationOverall } from '../../../utills/api/Trends/RealTime'
import CompilanceCharts from '../../GlobalUses/CompilanceCharts'

const RealCompilance = () => {


    const  {data : compilanceData } = useQuery('CompilanceOfStore',CompilanceOfStore)
    const  {data : deviationData } = useQuery('DeviationOverall',DeviationOverall)



    // const compFilter = compilanceData?.map((x)=>({ 'name' : x?.device, 'data' : [x?.firValue,x?.secValue] } ) )



  return (
    <div   className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1   h-screen ' >
    <h4 className="dark:text-white  text-[#4884C0] pl-4   text-lg font-medium">Overall Compliance of Store</h4>

        <div className='py-2 w-full  ' >
          {
            compilanceData?.map((x)=>(
              <>
               <div className='flex  justify-between w-full bg-white dark:bg-[#263238] py-4 rounded-t-lg shadow-sm '  >
                  <h4 className="dark:text-white   pl-4   text-lg font-medium">{x?.device}</h4>
              </div>
              <div className='mb-4 rounded-b-lg bg-white dark:bg-[#263238] overflow-hidden' >
                <CompilanceCharts  firValue={x?.firValue} secValue={x?.secValue} />
              </div>
              </>

            ))
          }
        </div>
    </div>
  )
}

export default RealCompilance