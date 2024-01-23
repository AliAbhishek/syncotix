import React, { useState } from 'react'

import { useQuery } from 'react-query'
import { SiteOperationList } from '../../../utills/api/SiteOperationDetails'
import MantineTable from '../../GlobalUses/MantineTable'
import { DateFormat } from '../../../utills/helpers/DateFormat'
import AddSiteOpertaions from './AddSiteOperations'
import Headers from '../../GlobalUses/Headers'




const SiteOperations = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }



    
    const [ data, setData] = useState([])

    const [ doperationFilter, setOperationFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

  
    
    const { refetch : siteFetch } = useQuery(['SiteOperationList', doperationFilter],SiteOperationList.bind(this,doperationFilter),{ onSuccess : (x)=> {
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
        accessorKey: "window",
        header: "Window",
        size: 300,
         mantineTableHeadCellProps: {
            align: 'center',
          },
          mantineTableBodyCellProps: {
            align: 'center',
          },
    },
        {
          accessorKey: "customerSiteName",
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
          accessorKey: "startTime",
          header: "Start Time",
          size: 300,
           mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
        },
        {
            accessorKey: "endTime",
            header: "End time",
            size: 300,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
        },
       
        {
            accessorKey: "dayOfWeek",
            header: "Day Of Week",
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
            Cell: ( {row} ) =>   <AddSiteOpertaions modalName='edit' siteFetch={siteFetch}  window={row?.original?.window} startTime={row?.original?.startTime} endTime={row?.original?.endTime} customerSiteId={row?.original?.customerSiteId} dayOfWeek={row?.original?.dayOfWeek} isActive={row?.original?.isActive} ids={row?.original?.id} />
            ,mantineTableHeadCellProps: {
              align: 'center',
            },
            mantineTableBodyCellProps: {
              align: 'center',
            },
            size :50
          },
      ];

      const breadList = [
        {
            name : 'Admintask',
            href : ""
        },
        {
            name : 'Site Master',
            href : ""
        },
        {
            name : "All Operating Window",
            href : ""
        }
    ] 

  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <Headers breadList={breadList} name="All Operating Window" />

    <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
    <div className="pb-4 px-8 ">
      <div className={`${toggle ? "pb-4" : "pb-0"}`}>
        <button
          type="button"
          className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
        >
                  {/* <AddSite modalName='add' siteFetch={siteFetch}  /> */}
                  <AddSiteOpertaions modalName='add' siteFetch={siteFetch} />

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

export default SiteOperations