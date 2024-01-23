import React, { useState } from 'react'
import AddState from './AddState'
import StateTable from './StateTable'
import { stateList } from '../../../utills/api/State'
import { useQuery } from 'react-query'
import { AiFillEdit } from 'react-icons/ai'
import { contactList } from '../../../utills/api/Contact'
import AddContact from './AddContact'
import MantineTable from '../../GlobalUses/MantineTable'
import Headers from '../../GlobalUses/Headers'


const ConfigContact = () => {

    const [ toggle,setToggle ] = useState(true)

    const [ data, setData] = useState([])
    const [ conatctFilter, setContactFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 1000
      })


  const { refetch : contactFetch } = useQuery(['contactList', conatctFilter],contactList.bind(this,conatctFilter),{ onSuccess : (x)=> {
    setData(x?.items);
    
  }})


    const collapseHandler = () =>{
        setToggle(x => !x)
    }


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
          accessorKey: "firstName",
          header: "First Name",
          size: 300,
          mantineTableHeadCellProps: {
            align: 'center',
          },
          mantineTableBodyCellProps: {
            align: 'center',
          },
        },
        {
          accessorKey: "lastName",
          header: "Last Name",
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
            accessorKey: "phone",
            header: "Phone",
            size: 300,
            mantineTableHeadCellProps: {
              align: 'center',
            },
            mantineTableBodyCellProps: {
              align: 'center',
            },
          },
          {
            accessorKey: "mobile",
            header: "Mobile",
            size: 300,
            mantineTableHeadCellProps: {
              align: 'center',
            },
            mantineTableBodyCellProps: {
              align: 'center',
            },
          },
          {
            accessorKey: "zipCode",
            header: "Zipcode",
            size: 300,
            mantineTableHeadCellProps: {
              align: 'center',
            },
            mantineTableBodyCellProps: {
              align: 'center',
            },
          },
          {
            accessorKey: "contactTypeName",
            header: "Contact Type",
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
            header: "City",
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
                return       <AddContact modalName='edit' contactFetch={contactFetch} cId={row?.original?.cityId} ctype={row?.original?.contactTypeId} 
                cEmail={row?.original?.email} cfirst={row?.original?.firstName} clast={row?.original?.lastName} cmobile={row?.original?.mobile} cphone={row?.original?.phone} 
                cwebsite={row?.original?.website} czip={row?.original?.zipCode} cActive={row?.original?.isActive} ids={row?.original?.id} />
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
            name : 'Contacts',
            href : ""
        }
    ]

  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <Headers breadList={breadList} name='Contacts' />

        <div className="w-full py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
                    <AddContact modalName='add' contactFetch={contactFetch} />


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

export default ConfigContact