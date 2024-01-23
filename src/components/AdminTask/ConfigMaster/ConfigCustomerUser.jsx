import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import AddRoleSubMenu from '../Master/AddRoleSubMenu'
import AddCustomerUser from './AddCustomerUser'
import { customerUserList } from '../../../utills/api/CustomerUser'
import { useQuery } from 'react-query'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'

function ConfigCustomerUser() {
    const [ toggle,setToggle ] = useState(true)

    
    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const [ data, setData] = useState([])

    const [ customerUserFilter, setCustomerUSerFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10000
      })
      const [ jumpVal, setJumpVal ] = useState(1)

      const [maxPages, setMaxPages] = useState(0);

      const { refetch : customerFetch } = useQuery(['customerUserList', customerUserFilter],customerUserList.bind(this,customerUserFilter),{ onSuccess : (x)=> {
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
          accessorKey: "fullName",
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
          accessorKey: 'Action',
          header: 'Action',
          Cell : ({row}) =>{
              return  <AddCustomerUser modalName="edit" customerSiteId={row?.original?.customerSiteId}  customerFetch={customerFetch} customerId={row?.original?.customerId} userId={row?.original?.userId} isActive={row?.original?.isActive} ids={row?.original?.id} />

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
            name : "Customer User ",
            href : ""
        }
    ]
      
  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
    <Headers breadList={breadList} name="Customer User " />

    <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
                  <AddCustomerUser modalName="add" customerFetch={customerFetch} />


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

export default ConfigCustomerUser