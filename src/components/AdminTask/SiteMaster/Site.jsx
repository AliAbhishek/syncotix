import React, { useState } from 'react'
import AddSite from './AddSIte'
import { siteList } from '../../../utills/api/Site'
import { useQuery } from 'react-query'
import { DateFormat } from '../../../utills/helpers/DateFormat'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'




const Site = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }


    const [ data, setData] = useState([])

    const [ siteFilter, setSiteFilter ] = useState({
        sortOrder : "ModifiedOn",
        sortDirection : "desc",
        filterby : "",
        pageNo : 1,
        pageSize : 10
      })
 
    
    const { refetch : siteFetch } = useQuery(['siteList', siteFilter],siteList.bind(this,siteFilter),{ onSuccess : (x)=> {
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
          accessorKey: "icstartTime",
          header: "Ic Start Time",
          Cell : ({row}) => <p>{DateFormat(row?.original?.icstartTime)}</p>,
          size: 300,
           mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
        },
        {
            accessorKey: "icendTime",
            header: "Ic End time",
            Cell : ({row}) => <p>{DateFormat(row?.original?.icendTime)}</p>,
            size: 300,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "icsignOffTime",
            header: "Ic sign Off Time",
            Cell : ({row}) => <p>{DateFormat(row?.original?.icsignOffTime)}</p>,
            size: 300,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "icsignOffGivenBy",
            header: "Ic Sign Off Given By",
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
            Cell: ( {row} ) =>   <AddSite modalName='edit' siteFetch={siteFetch} ids={row?.original?.id} icsignOffFlag={row?.original?.icsignOffFlag} customerSiteId={row?.original?.customerSiteId} icendTime={row?.original?.icendTime}
            icsignOffGivenBy={row?.original?.icsignOffGivenBy} icsignOffTime={row?.original?.icsignOffTime} icstartTime={row?.original?.icstartTime} isActive={row?.original?.isActive}  />
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
            name : 'Site Master',
            href : ""
        },
        {
            name : "Site Information I&C",
            href : ""
        }
    ] 

  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <Headers breadList={breadList} name="Site Information I&C" />

        <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8 ">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
                      <AddSite modalName='add' siteFetch={siteFetch}  />

              
              
            </button>
          </div>
          {toggle ? <MantineTable columns={columns} data={data} /> : null}
        </div>
      </div>
    </div>
  )
}

export default Site