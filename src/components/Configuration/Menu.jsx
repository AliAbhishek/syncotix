import React, { useState } from 'react'
import AddMenu from './AddMenu'
import { useQuery } from 'react-query'
import { menuList } from '../../utills/api/Menu'
import MantineTable from '../GlobalUses/MantineTable'
import Headers from '../GlobalUses/Headers'




const Menu = () => {

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    const [ data, setData] = useState([])

    const [ menuFilter, setMenuFilter ] = useState({
        sortOrder : "",
        sortDirection : "",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })

    const { refetch : menuFetch } = useQuery(['menuList', menuFilter],menuList.bind(this,menuFilter),{ onSuccess : (x)=> {
        setData(x?.items);
     
    } })

    const columns = [
      {
        accessorKey: "id",
        header: "Id",
        size: 120,
      },
        {
          accessorKey: "name",
          header: "Name",
          size: 120,
        },
        {
          accessorKey: "icon",
          header: "Icon",
          size: 120,
        },
        {
        accessorKey: 'Action',
        header: 'Action',
        Cell: ( {row} ) =>  <AddMenu menuFetch={menuFetch} modalName='edit' menuName={row?.original?.menuName} menuOrderIndex={row?.original?.menuOrderIndex}  parentId={row?.original?.parentId}  parentOrderId={row?.original?.parentOrderId}  icon={row?.original?.icon}  moduleId={row?.original?.moduleId}  isActive={row?.original?.isActive}  ids={row?.original?.id} />

        },
      ];

      const breadList = [
        {
            name : 'Configuration',
            href : ""
        },
        {
            name : 'Menu',
            href : ""
        },
    ]



  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        {/* <h4 className="dark:text-white  text-[#4884C0] pl-4  text-lg font-medium"> Menus</h4> */}
        <Headers breadList={breadList} name='SubMenu' />

        <div className="w-full rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
        <div className="pb-2 px-4 ">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
                <AddMenu menuFetch={menuFetch} modalName='add' />

            </button>
          </div>
          {toggle ? <MantineTable columns={columns} data={data} /> : null}
        </div>
      </div>
    
    </div>
  )
}

export default Menu