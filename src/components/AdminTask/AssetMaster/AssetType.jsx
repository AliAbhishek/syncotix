import React, { useState } from 'react'
import AddAssetType from './AddAssetType'
import { useQuery } from 'react-query'
import { assetTypeList } from '../../../utills/api/AssetType'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'




const AssetType = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }



    const [ data, setData] = useState([])

    const [ assetTypeFilter, setAssetTypeFilter ] = useState({
      sortOrder : "ModifiedOn",
      sortDirection : "desc",
      filterby : "",
      pageNo : 1,
      pageSize : 10
    })
  
    
    const { refetch : assetTypeFetch } = useQuery(['assetTypeList', assetTypeFilter],assetTypeList.bind(this,assetTypeFilter),{ onSuccess : (x)=> {
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
          accessorKey: "name",
          header: "Name",
          size: 500,
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
              return   <AddAssetType modalName='edit' assetTypeFetch={assetTypeFetch} name={row?.original?.name} code={row?.original?.code} isActive={row?.original?.isActive} ids={row?.original?.id} />

          },
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
            name : "Asset's Type",
            href : ""
        }
    ] 

  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <Headers breadList={breadList} name="Asset's Type" />

        <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8 ">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
                    <AddAssetType modalName='add' assetTypeFetch={assetTypeFetch} />


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

export default AssetType