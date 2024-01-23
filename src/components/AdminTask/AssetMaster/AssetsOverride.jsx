import React, { useState } from 'react'
import AddAssetOverride from './AddAssetsOverride'
import { assetOverRideList } from '../../../utills/api/AssetOverride'
import { useQuery } from 'react-query'
import { DateFormat } from '../../../utills/helpers/DateFormat'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'




const AssetOverride = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }


    const [ data, setData] = useState([])

    const [ assetOverrideFilter, setAssetOverRideFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

    
    const { refetch : assetOverFetch } = useQuery(['assetOverRideList', assetOverrideFilter],assetOverRideList.bind(this,assetOverrideFilter),{ onSuccess : (x)=> {
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
          accessorKey: "assetName",
          header: "Asset Name",
          size: 300,
           mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
        },
        {
          accessorKey: "startDate",
          header: "Start Date",
          Cell : ({row}) => <p>{DateFormat(row?.original?.startDate)}</p>,
          size: 300,
           mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
        },
        {
            accessorKey: "endDate",
            header: "End Date",
            Cell : ({row}) => <p>{DateFormat(row?.original?.endDate)}</p>,
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
            Cell: ( {row} ) => <AddAssetOverride assetOverFetch={assetOverFetch} modalName='edit' overId={row?.original?.assetId} overName={row?.original?.assetName} 
            overStart={row?.original?.startDate} overEnd={row?.original?.endDate} overActive={row?.original?.isActive} ids={row?.original?.id} />,
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
            name : 'Asset Master',
            href : ""
        },
        {
            name : "Asset's Override",
            href : ""
        }
    ] 
 
  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <Headers breadList={breadList} name="Asset's Override" />

        <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
                  <AddAssetOverride modalName='add' assetOverFetch={assetOverFetch} />


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

export default AssetOverride