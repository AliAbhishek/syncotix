import React, { useState } from 'react'
import AddAsset from './AddAsset'
import { assetList } from '../../../utills/api/Asset'
import { useQuery } from 'react-query'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'




const Asset = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const [ data, setData] = useState([])
    

    const [ assetFilter, setAssetFilter ] = useState({
        sortOrder : "ModifiedOn",
        sortDirection : "desc",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

    
    const { refetch : assetFetch } = useQuery(['assetList', assetFilter],assetList.bind(this,assetFilter),{ onSuccess : (x)=> {
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
          accessorKey: "assetType",
          header: "Asset type",
          size: 150,
           mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
        },
        {
          accessorKey: "tag",
          header: "Tag",
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
            size: 150,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "oem",
            header: "OEM",
            size: 50,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "make",
            header: "Make",
            size: 50,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "model",
            header: "Model",
            size: 50,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "serialNumber",
            header: "Serial",
            size: 50,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "quantity",
            header: "Qty",
            size: 40,
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
                return    <AddAsset assetFetch={assetFetch} customerSiteId={row?.original?.customerSiteId} modalName='edit' assetName={row?.original?.name} assetDescription={row?.original?.description}  
                assetOem={row?.original?.oem} assetTag={row?.original?.tag} assetSerial={row?.original?.serialNumber} assetQuantity={row?.original?.quantity} 
                assetModel={row?.original?.model} type={row?.original?.assetType} assetMake={row?.original?.make}  assetPrice={row?.original?.price} 
                assetCustomer={row?.original?.cutomerSite} assetId={row?.original?.id} assetTypeId={row?.original?.assetTypeId} isActive={row?.original?.isActive} />

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
            name : 'Assets',
            href : ""
        }
    ]                        

  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <Headers breadList={breadList} name='Assets' />


        <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8 ">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
               <AddAsset modalName='add' assetFetch={assetFetch} />


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
          {toggle ? (
            <MantineTable columns={columns} data={data} classNames={(row, index) => (index % 2 === 0 ? 'even-row' : 'odd-row')} />
          ) : null}
        </div>
      </div>
    
    </div>
  )
}

export default Asset