import React, { useState } from 'react'
import AddAssetParameter from './AddAssetParameter'
import { assetOverRideList } from '../../../utills/api/AssetOverride'
import { useQuery } from 'react-query'
import { assetParamList } from '../../../utills/api/AssetParameter'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'




const AssetParameter = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }


    const [ data, setData] = useState([])

    const [ assetParameterFilter, setAssetParameterFilter ] = useState({
      sortOrder : "ModifiedOn",
      sortDirection : "desc",
      filterby : "",
      pageNo : 1,
      pageSize : 10
    })

    
    const { refetch : assetParamFetch } = useQuery(['assetParamList', assetParameterFilter],assetParamList.bind(this,assetParameterFilter),{ onSuccess : (x)=> {
        setData(x?.items);
        
    }})

    const columns = [
      {
        accessorKey: "id",
        header: "Id",
        size: 30,
        mantineTableHeadCellProps: {
          align: 'center',
        },
        mantineTableBodyCellProps: {
          align: 'center',
        },
      },
        {
          accessorKey: "name",
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
            accessorKey: "unit",
            header: "Unit",
            size: 50,
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
            accessorKey: 'Action',
            header: 'Action',
            Cell : ({row}) =>{
                return  <AddAssetParameter assetParamFetch={assetParamFetch} modalName='edit' paramId={row?.original?.assetId} paramName={row?.original?.name} paramUnit={row?.original?.unit}
                paramDesc={row?.original?.description} ids={row?.original?.id} paramActive={row?.original?.isActive} />
            },
            mantineTableHeadCellProps: {
              align: 'center',
            },
            mantineTableBodyCellProps: {
              align: 'center',
            },
            size : 40
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
            name : "Asset's Parameter",
            href : ""
        }
    ]  

  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <Headers breadList={breadList} name="Asset's Parameter" />

        <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8 ">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
                    <AddAssetParameter modalName='add' assetParamFetch={assetParamFetch} />


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

export default AssetParameter