import React, { useState } from "react";
import AddRoleSubMenu from "./AddRoleSubMenu";
import { useQuery } from "react-query";
import { RoleSubMenuList } from "../../../utills/api/RoleSubmenu/Index";
import MantineTable from "../../GlobalUses/MantineTable";
import Headers from "../../GlobalUses/Headers";

const MasterRoleSubMenu = () => {
  const [toggle, setToggle] = useState(true);

  const collapseHandler = () => {
    setToggle((x) => !x);
  };

  const [data, setData] = useState([]);

  const [roleSubMenuFilter, setRoleSubMenuFilter] = useState({
    sortOrder: "",
    sortDirection: "",
    filterby: "",
    pageNo: 1,
    pageSize: 10,
  });

  const { refetch: roleSubMenuFetch } = useQuery(
    ["RoleSubMenuList", roleSubMenuFilter],
    RoleSubMenuList.bind(this, roleSubMenuFilter),
    {
      onSuccess: (x) => {
        setData(x?.items);
        
      },
    }
  );

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
      accessorKey: "roleName",
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
      accessorKey: "subMenuName",
      header: "Sub Menu Name",
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
          return   <AddRoleSubMenu modalName="edit" roleSubMenuFetch={roleSubMenuFetch} roleId={row?.original?.roleId}
          isActive={row?.original?.isActive} subMenuId={row?.original?.subMenuId} ids={row?.original?.id}
      />
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
        name : 'Master',
        href : ""
    },
    {
        name : 'Role Sub Menu',
        href : ""
    }
]

  return (
    <div className=" flex flex-col   gap-2 py-2 px-2 justify-start items-start mt-1 h-screen  ">
      
      <Headers breadList={breadList} name='Role Sub Menu' />

      <div className="w-full py-4 dark:text-white dark:bg-[#263238] rounded-lg bg-white text-black ">
        <div className="pb-4 px-8 ">
          <div className={`${toggle ? "pb-4" : "pb-0"}`}>
            <button
              type="button"
              className="flex  items-center justify-end dark:text-white dark:bg-[#263238] bg-white text-black w-full py-2 font-medium text-left text-black-500 rounded-t-xl "
            >
              

              <AddRoleSubMenu 
              modalName="add"
              roleSubMenuFetch={roleSubMenuFetch}

              />

{/* 
              <svg
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
  );
};

export default MasterRoleSubMenu;
