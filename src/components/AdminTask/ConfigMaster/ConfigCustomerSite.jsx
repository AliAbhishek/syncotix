import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { customerContactList } from '../../../utills/api/CustomerContact'
import AddCustomerContact from './AddCustomerContact'
import { customerSiteList } from '../../../utills/api/CustomerSite'
import AddCustomerSite from './AddCustomerSite'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'




const ConfigCustomerSite = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const [ data, setData] = useState([])

    const [ customerSiteFilter, setCustomerSiteFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10000
      })
  
    
    const { refetch : customerSiteFetch } = useQuery(['customerSiteList', customerSiteFilter],customerSiteList.bind(this,customerSiteFilter),{ onSuccess : (x)=> {
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
          size: 300,
          mantineTableHeadCellProps: {
            align: 'center',
          },
          mantineTableBodyCellProps: {
            align: 'center',
          },
        },
        {
          accessorKey: "address1",
          header: "Address 1",
          size: 300,
          mantineTableHeadCellProps: {
            align: 'center',
          },
          mantineTableBodyCellProps: {
            align: 'center',
          },
        },
        {
            accessorKey: "address2",
            header: "Address 2",
            size: 300,
            mantineTableHeadCellProps: {
              align: 'center',
            },
            mantineTableBodyCellProps: {
              align: 'center',
            },
        },
        {
            accessorKey: "pinCode",
            header: "PinCode",
            size: 300,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
        },
        {
            accessorKey: "customerName",
            header: "Customer Name",
            size: 300,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
        },
        {
            accessorKey: "cityName",
            header: "City Name",
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
              return     <AddCustomerSite modalName='edit' customerSiteFetch={customerSiteFetch} siteAddOne={row?.original?.address1}
              siteAddTwo={row?.original?.address2} siteCityId={row?.original?.cityId} siteCusId={row?.original?.customerId} siteName={row?.original?.name} sitePincode={row?.original?.pinCode}
              siteActive={row?.original?.isActive} ids={row?.original?.id} />
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
            name : 'Config Master',
            href : ""
        },
        {
            name : "Customer's Site",
            href : ""
        }
    ]



  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <Headers breadList={breadList} name="Customer's Site" />

        <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
                    <AddCustomerSite modalName='add' customerSiteFetch={customerSiteFetch} />


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

export default ConfigCustomerSite