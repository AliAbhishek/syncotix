import React, { useState } from 'react'
// import AddSubMenu from './AddSubMenu'
// import { subMenuList } from '../../utills/api/SubMenu'
import { useQuery } from 'react-query'
import { deviceSensorList } from '../../../utills/api/DeviceSensor'
import AddDeviceSensor from './AddDeviceSensor'
import { DateFormat } from '../../../utills/helpers/DateFormat'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'




const DeviceSensor = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const [ data, setData] = useState([])

    const [ sensorFilter, setSensorFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })



    
    const { refetch : sensorFetch } = useQuery(['deviceSensorList', sensorFilter],deviceSensorList.bind(this,sensorFilter),{ onSuccess : (x)=> {
        setData(x?.items);
        
    } })
 

  const columns = [
    {
      accessorKey: "id",
      header: "Id",
      size: 50,
      mantineTableHeadCellProps: {
        align: 'center',
      },
      mantineTableBodyCellProps: {
        align: 'center',
      },
    },
    
    {
      accessorKey: "deviceName",
      header: "Name",
      size: 300,
       mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
    },
    {
      accessorKey: "degree",
      header: "Degree",
      size: 300,
       mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
    },
    {
        accessorKey: "fahrenheit",
        header: "Fahrenheit",
        size: 300,
         mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
      },
      {
        accessorKey: "reserveValue",
        header: "Reserve Value",
        size: 300,
         mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
      },
      // {
      //   accessorKey: "measuredOn",
      //   header: "Measured On",
      //   size: 120,
      // },
      {
        accessorKey: 'Action',
        header: 'Action',
        Cell: ( {row} ) =>   <AddDeviceSensor sensorFetch={sensorFetch} modalName='edit' deviceId={row?.original?.deviceId} sensorDeg={row?.original?.degree} sensorFahr={row?.original?.fahrenheit}
        sensorMeasure={row?.original?.measuredOn} sensorReserve={row?.original?.reserveValue} ids={row?.original?.id} sensorActive={row?.original?.isActive} />
        ,mantineTableHeadCellProps: {
          align: 'center',
        },
        mantineTableBodyCellProps: {
          align: 'center',
        },
        size : 50
      },
  ];

  const breadList = [
    {
        name : 'Admintask',
        href : ""
    },
    {
        name : 'Device Master',
        href : ""
    },
    {
        name : 'Device Sensor',
        href : ""
    }
]

  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >

        <Headers breadList={breadList} name='Device Sensor' />

        <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
                <AddDeviceSensor modalName='add' sensorFetch={sensorFetch} />


              {/* <svg
                onClick={collapseHandler}
                data-accordion-icon
                className="w-3 h-3 mr-2 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg> */}
            </button>
          </div>
          {toggle ? <MantineTable columns={columns} data={data} /> : null}
        </div>
      </div>
       
    
    </div>
  )
}

export default DeviceSensor




{/* <div  className='w-full flex dark:text-white dark:bg-[#263238] bg-white text-black ' >
<div  className=' pb-6 px-2' >
    <label className="block mb-2 text-bold dark:text-white dark:bg-[#263238] bg-white text-black">Search</label>
    <input type="text" onChange={filterHandler} name='filters'  placeholder="" className="block  px-5 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
    <p className='font-mono text-red-700' ></p>
</div>
</div> */}
