import React, { useState } from 'react'
import AddDeviceDetails from './AddDeviceDetails'
import { deviceList } from '../../../utills/api/Device'
import { useQuery } from 'react-query'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'




const DeviceDetails = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    
    const [ data, setData] = useState([])

    const [ deviceFilter, setDeviceFilter ] = useState({
        sortOrder : "ModifiedOn",
        sortDirection : "desc",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })
 
    
    const { refetch : deviceFetch } = useQuery(['deviceList', deviceFilter],deviceList.bind(this,deviceFilter),{ onSuccess : (x)=> {
        setData(x?.items);
        
    }})


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
          header: "Device Name",
          size: 300,
           mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
        },
        
        
        {
            accessorKey: "deviceNo",
            header: "Device Num",
            size: 300,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "deviceIdExternal",
            header: "DeviceId External",
            size: 300,
             mantineTableHeadCellProps: {
                  align: 'center',
                },
                mantineTableBodyCellProps: {
                  align: 'center',
                },
          },
          {
            accessorKey: "description",
            header: "Description",
            size: 300,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "deviceType",
            header: "Device Type",
            size: 300,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "customerSite",
            header: "Customer Site",
            size: 300,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: 'Action',
            header: 'Action',
            Cell: ( {row} ) =>  <AddDeviceDetails deviceFetch={deviceFetch} modalName='edit' deviceActive={row?.original?.isActive}  detailName={row?.original?.deviceName} detailNum={row?.original?.deviceNo} detailTag={row?.original?.assetTag} 
            detailDesc={row?.original?.description} detailCust={row?.original?.customerSiteId} detailStatus={row?.original?.statusId} detailType={row?.original?.deviceTypeId}
            detailAsset={row?.original?.assetId} deviceImei={row?.original?.imeiNo} deviceIdExternal={row?.original?.deviceIdExternal} ids={row?.original?.id} 
            />,
            mantineTableHeadCellProps: {
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
            name : 'Device Details',
            href : ""
        }
    ]

  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <Headers breadList={breadList} name='Device Details' />

        <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
                <AddDeviceDetails modalName='add' deviceFetch={deviceFetch} />


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

export default DeviceDetails