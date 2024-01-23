import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  ElectricHealth,
  // GetAlltransactionTempSensorByRealTimeReport,
  KitchenAssets,
  KitchenChart,
  KitchenChartTwo,
  TimeForChart,
} from "../../../utills/api/Trends/RealTime";

import AreaChart from "../../GlobalUses/AreaChart";

const RealKitchen = () => {
  const [toggle, setToggle] = useState(true);

  const collapseHandler = () => {
    setToggle((x) => !x);
  };


  // useEffect(()=>{
  //   GetAlltransactionTempSensorByRealTimeReport().then(res=>console.log(res))
  // })

 

  const { data: kitchen } = useQuery("KitchenAssets", KitchenAssets);
  const { data: kitchenChartOne } = useQuery("KitchenChart", KitchenChart.bind(this,[4,5]));
  const { data: kitchenCharttwo } = useQuery("KitchenChartTwo", KitchenChartTwo.bind(this,6));
  const { data : timeData } = useQuery('TimeForChart',TimeForChart)
  // const { data : RealTimeReport } = useQuery("GetAlltransactionTempSensorByRealTimeReport", GetAlltransactionTempSensorByRealTimeReport)

  
  


  const oneFilter = kitchenChartOne?.map((x)=> ({ 'name' : x?.name, 'data' : x?.temp_in_degree.split(',').map((num) => +num) }))
  const twoFilter = kitchenCharttwo?.map((x)=> ({ 'name' : x?.name, 'data' : x?.temp_in_degree.split(',').map((num) => +num) }))
  const timeFilter = timeData?.map((x)=> x.tTime )
  


  return (
    <div className=" flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ">
      <h4 className="dark:text-white  text-[#4884C0] pl-4   text-lg font-medium">
        ELECTRICAL HEALTH (Average)
      </h4>

      <div className="w-full py-4 dark:text-white dark:bg-[#263238] rounded-lg bg-white text-black ">
        <div className="pb-2 px-4 flex flex-col gap-2 ">
          <div className=" flex  ">
            <p className="w-1/2"></p>
            <div className="grow flex justify-around">
              <p className="font-medium ">
                Hrly
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              </p>
              <p className="font-medium ">
                Cuurent Day
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
              </p>
            </div>
          </div>

          {kitchen?.map((x) => (
            <>
              <div className=" flex  ">
                <p className="w-1/2">{x.asset}</p>
                <div className="grow flex justify-around">
                  <p>{x.hrly}</p>
                  <p>{x.currentDay}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>


      <h4 className="dark:text-white  text-[#4884C0] pl-4  py-2  text-lg font-medium">
            Thermal Monitoring - Kitchen Equipments
         </h4>
        
        <div className="w-full rounded-lg dark:bg-[#263238] bg-white" >
            
            <div className="py-2  w-full  ">
                <AreaChart data={oneFilter} time={timeFilter} />
            </div>
        </div>



        <h4 className="dark:text-white  text-[#4884C0] pl-4  py-2  text-lg font-medium">
            Thermal Monitoring - Kitchen Equipments
         </h4>
        
        <div className="w-full rounded-lg dark:bg-[#263238] bg-white" >
            
            <div className="py-2  w-full  ">
                <AreaChart data={twoFilter} time={timeFilter} />
            </div>
        </div>

    </div>
  );
};

export default RealKitchen;

