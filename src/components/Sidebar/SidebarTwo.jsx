import React, { useMemo, useState } from 'react';
import {
    AiFillSetting,
    AiFillSignal,
    AiOutlineBarChart,
    AiOutlineHome,
    AiOutlineLaptop,
    AiOutlineTool,
} from 'react-icons/ai';
import {
    BiBarChart,
    BiBarChartAlt,
    BiCalendarEdit,
    BiHomeAlt,
    BiListOl,
    BiMap,
    BiSitemap,
    BiSolidMapPin,
} from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import {
    BsChevronCompactDown,
    BsChevronCompactUp,
    BsDatabaseExclamation,
    BsFileEarmarkSpreadsheetFill,
    BsFileEarmarkText,
    BsFileText,
    BsGraphUpArrow,
    BsListTask,
    BsMenuApp,
    BsMenuDown,
} from 'react-icons/bs';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import photo from '../../assets/background.jpg';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SidebarTwo = ({open,flag,setOpen}) => {
    const navigate = useNavigate();
    // const [open, setOpen] = useState(true);
    const isHidden = useMemo(()=> !open && window.innerWidth < 640 ,[open,window.innerWidth]);

    const [openedItems, setOpenedItems] = useState([]);

    const toggleChevronHandler = (val, isChild = false) => {
        let cloneParents = [...openedItems];
        const itemIdx = cloneParents.indexOf(val);
        if (itemIdx >= 0) {
            cloneParents.splice(itemIdx, 1);
        } else {
            if (!isChild) {
                cloneParents = [val];
            } else {
                cloneParents.push(val) 
            }
        }
        console.log(cloneParents);
        setOpenedItems(cloneParents);
    }


    let {pathname}  = useLocation();

   
    const name = localStorage.getItem('name')

 


    const sidebarList = [
        {
            parent : 'Dashboard',
            path : '/dashboard'
        },
        {
            parent : 'Trends',
            childs : [
                {
                    child : 'Realtime',
                    subChild : [
                        { name : 'Energy',path : '/trends/realtime/energy' },
                        { name : 'Temprature-Hvac',path : '/trends/realtime/hvac' },
                        { name : 'Kitchen', path : '/trends/realtime/kitchen' },
                        { name : 'Savings' , path : '/dashboard' }, 
                        { name : 'Alerts',path : '/trends/realtime/alerts'  },
                        { name : 'Compilance',path : '/trends/realtime/compilance' },
                        { name : 'Electrical Health', path : '/trends/realtime/electricalhealth' },
                        { name : 'Override', path : '/trends/realtime/override' },
                        { name : 'Control Enablement', path  : '/trends/realtime/control' },
                        { name : 'Food Storage', path : '/dashboard' },
                        { name : 'IAQ', path : '/trends/realtime/realiaq' },

                    ]
                },
                {
                    child : 'Historical',
                    subChild : [
                        { name : 'Energy', path : '/trends/historical/energy' },
                        { name : 'Temprature',path : '/trends/historical/hvac'   },
                        { name : 'Kitchen',path : '/trends/historical/kitchen' },
                        { name : 'Savings', path : '/dashboard' },
                        { name : 'Alerts',path : '/trends/historical/alerts' },
                        // { name : 'Compilance' },
                        { name : 'Electrical health', path : '/trends/historical/electricalhealth' },
                        { name : 'Override', path : '/trends/historical/override' },
                        { name : 'Control Enablement', path : '/trends/historical/control' },
                        { name : 'IAQ', path : '/trends/historical/realiaq' },

                    ]
                }
            ]
        },
        {
            parent : 'Reports',
            childs : [
                {
                    child : 'Realtime',
                    subChild : [
                        { name : 'hvac', path : 'report/realtime/hvac'  },
                        { name : 'kitchen',path : 'report/realtime/kitchen' },
                        { name : 'energy', path : 'report/realtime/energy' },

                    ]
                },
                {
                    child : 'historical',
                    subChild : [
                        { name : 'hvac',path : 'report/historical/hvac'  },
                        { name : 'kitchen',path : 'report/historical/kitchen' },
                        { name : 'energy', path : 'report/realtime/energy' },

                    ]
                },
            ]
        },
        {
            parent : 'Map',
            childs : [ { child : 'Map',path : 'map' }]
        },
        {
            parent : 'Inventory',
            childs : [ { child : 'Order',path :'inventory/order'}]
        },
        {
            parent : 'Admintask',
            childs : [
                {
                    child : 'Master',
                    subChild : [
                        { name : 'Role', path : 'admintask/master/role' },
                        { name : 'Rolesubmenu', path : 'admintask/master/rolesubmenu'},
                        { name : 'Designation',path : 'admintask/master/designation'},
                        { name : 'User', path : 'admintask/master/user'},
                        { name : 'Usertype', path : 'admintask/master/usertype'},
                    ]
                },
                {
                    child : 'Config',
                    subChild : [
                        // { name : 'Country', path : 'admintask/config/country'},
                        { name : 'State', path : 'admintask/config/state'},
                        { name : 'City', path : 'admintask/config/city'},
                        { name : 'Address', path : 'admintask/config/address'},
                        { name : 'Customer', path : 'admintask/config/customer'},
                        { name : 'Customer Setup', path : 'admintask/config/customersetup'},
                        { name : 'Customer User', path  :'admintask/config/customeruser'},
                        { name : 'Customer Contact', path : 'admintask/config/customercontact' },
                        // { name : 'zone',path : 'admintask/config/zone'},
                        // { name : 'status',path : 'admintask/config/status'},
                        { name : 'Customer Site', path : 'admintask/config/customersite' },
                        { name : 'Contact', path : 'admintask/config/contact'},
                        { name : 'Contact Type', path : 'admintask/config/contacttype'},
                    ]
                },
                {
                    child : 'Asset',
                    subChild : [
                        { name : 'Asset Type', path : 'admintask/asset/assettype' },
                        { name : 'Asset ', path : 'admintask/asset/assets' },
                        { name : 'Asset Parameter', path : 'admintask/asset/assetsparameter' },
                        { name : 'Asset Rule', path : 'admintask/asset/assetsrule'  },
                        { name : 'Asset Override', path : 'admintask/asset/assetsoverride' }

                    ]
                },
                {
                    child : 'Device',
                    subChild : [
                      { name : 'Device Status',path : 'admintask/device/status' },
                      { name : ' Device Details', path : 'admintask/device/details' },
                      { name : 'Device Type', path : 'admintask/device/type' },
                      { name : 'Device Sensor', path : 'admintask/device/sensor' },
                    ]
                },
                {
                    child : 'Site',
                    subChild : [
                        { name : 'Site Information I&C', path  :'admintask/site/site' },
                        { name : 'Site Operating Rules', path : 'admintask/site/operatingrules' },
                        { name : 'Site Operating Window', path :'admintask/site/operations' }
                    ]
                }
            ]
        },
        {
            parent : 'Configuraton',
            childs : [
                {child : 'Menu'},
                // {child : 'Submenu'}
            ]
        }
    ]



    const parentHandler = (x)=>{
        console.log('click - ', x);
        toggleChevronHandler(x.parent);
        'path' in x && x.path ? navigate(x.path) : null
    }

    const childHandler = (x)=>{
        toggleChevronHandler(`child_${x.child}`, true);
        'path' in x && x.path ? navigate(x.path) : null
    }

    const subChildHandler = (x)=>{
        'path' in x && x.path ? navigate(x.path) : null

    }


    return (
        <>
            {
                isHidden ? null :
            
        <div
            
            className={` 
            dark:text-white dark:bg-[#263238] bg-white text-black  absolute sm:sticky top-0 left-0 z-40 h-[100%] transition-transform  sm:translate-x-0`}
        >
            <div className={`p-1 lg:pt-5 px-8 ${open ? 'mr-4' : 'mr-1 pr-[10px] ps-[18px]'}    sticky h-screen overflow-y-scroll no-scrollbar  top-0 duration-300  `}>
                <a className='flex items-center gap-4'>
                
                    <img
                        src={photo}
                        alt='User'
                        className={`rounded-full ${
                            open ? 'h-12 w-12 ' : 'h-10 w-10'
                        } cursor-pointer `}

                    />
                    {open ? (
                        <span className='hidden text-right lg:block '>
                            {/* <span className='block text-black text-sm font-medium dark:text-white'>
                                Thomas Anree
                            </span> */}
                            <p className='text-md font-normal leading-[20px] text-bgray-600 dark:text-bgray-50'>
                                {name}
                            </p>
                        </span>
                    ) : (
                        ''
                    )}
                </a>


                <ul className="space-y-2 font-normal pt-4">
                        { 
                            sidebarList?.map((parent,ind)=>(
                                <li key={ind} >
                                    <button onClick={()=>parentHandler(parent)}  type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                            <BsGraphUpArrow className='text-2xl' />
                                            <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>{parent.parent}</span>
                                            {parent.childs ? openedItems.includes(parent.parent) ? <FaChevronUp  className='pl-2'  /> : <FaChevronDown  className='pl-2'  /> : null }
                                    </button>
                                    
                                    {openedItems.includes(parent.parent) ? <ul  id="dropdown-example" className={` py-2 space-y-2 ${open ? 'block' : 'hidden'}`} >
                                            {
                                                parent.childs?.map((childs,ind)=>(
                                                    <li key={ind} className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                                                        <button onClick={()=>childHandler(childs)}  type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                                            <AiFillSignal className='text-2xl' />
                                                            <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>{childs.child}</span>
                                                            {childs.subChild ? openedItems.includes(`child_${childs.child}`) ? <FaChevronUp  className='pl-2'  /> : <FaChevronDown  className='pl-2'  /> : null }
                                                        </button>
                                                   
                                                        {openedItems.includes(`child_${childs.child}`) ? <ul  id="dropdown-example" className={` ${  open ?  'block' : 'hidden'} py-2 space-y-2`}>
                                                            {
                                                                childs.subChild?.map((subChild)=>(
                                                                    <NavLink to={subChild.path} >
                                                                        <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700`} >
                                                                            <a onClick={() => subChildHandler(subChild)}
                                                                                className={`flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white ${pathname === subChild.path ?  'bg-slate-100 dark:bg-slate-700' : ''  }`}>{subChild.name}</a>
                                                                        </li>
                                                                    </NavLink> 
                                                                ))
                                                            }
                                                        </ul> : null}
                                                    </li>
                                                ))
                                            }
                                    </ul> : null}
                                </li>
                            ))
                        }
                </ul>
            </div>
        </div>
        }
        </>
    );
};

export default SidebarTwo;
