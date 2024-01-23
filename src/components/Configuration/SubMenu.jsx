import React, { useState } from 'react'
import AddSubMenu from './AddSubMenu'
import { subMenuList } from '../../utills/api/SubMenu'
import { useQuery } from 'react-query'
import MantineTable from '../GlobalUses/MantineTable'
import Headers from '../GlobalUses/Headers'




const SubMenu = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const [ data, setData] = useState([])

    const [ subMenuFilter, setSubMenuFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })


   
    
    const { refetch : subMenuFetch } = useQuery(['subMenuList', subMenuFilter],subMenuList.bind(this,subMenuFilter),{ onSuccess : (x)=> {
        setData(x?.items);
       
    } })
  

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
          accessorKey: "controller",
          header: "Controller",
          size: 300,
           mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
        },
        {
            accessorKey: "menuName",
            header: "Menu Name",
            size: 300,
             mantineTableHeadCellProps: {
                align: 'center',
              },
              mantineTableBodyCellProps: {
                align: 'center',
              },
          },
          {
            accessorKey: "controller",
            header: "Controller",
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
        Cell: ( {row} ) =>  <AddSubMenu subMenuFetch={subMenuFetch} modalName='edit' subId={row?.original?.menuId} subName={row?.original?.name} subController={row?.original?.controller} 
        subAction={row?.original?.action} subArea={row?.original?.area} ids={row?.original?.id} subActive={row?.original?.isActive} />
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
            name : 'Configuration',
            href : ""
        },
        {
            name : 'SubMenu',
            href : ""
        },
    
    ]

  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <Headers breadList={breadList} name='SubMenu' />

        <div className="w-full rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-4 px-8">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
              <AddSubMenu subMenuFetch={subMenuFetch} modalName='add' />



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

export default SubMenu