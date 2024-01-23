import React, { useState } from 'react'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'
import AddCustomerSetup from './AddCustomerSetup'
import { useQuery } from 'react-query'
import { customerList } from '../../../utills/api/Customer'

const ConfigCustomerSetup = () => {
    const [ toggle,setToggle ] = useState(true)
    const [ data, setData] = useState([])


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
            name : 'Customers Setup',
            href : ""
        }
    ]



    const [ customerFilter, setCustomerFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
    })

    
    const { refetch : customerFetch } = useQuery(['customerList', customerFilter],customerList.bind(this,customerFilter),{ onSuccess : (x)=> {
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
          accessorKey: "email",
          header: "Email",
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
              return  <AddCustomerSetup code={row?.original?.code} customerFetch={customerFetch} moduleName='edit' customerName={row?.original?.name} customerId={row?.original?.id} customerEmail={row?.original?.email} customerDesc={row?.original?.description} customerIsActive={row?.original?.isActive} />

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





  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
            <Headers breadList={breadList} name='Customers Setup' />

            <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
            <div className="pb-4 px-8">
            <div className={`${toggle ? "pb-4" : "pb-0"}`}>
                <button
                type="button"
                className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
                >
                        <AddCustomerSetup moduleName='add'  />
                </button>
            </div>
            {toggle ? <MantineTable columns={columns} data={data} /> : null}
            </div>
    </div>
    </div>
  )
}

export default ConfigCustomerSetup