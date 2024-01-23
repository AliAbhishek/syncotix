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
import { FaChevronDown } from 'react-icons/fa';

const Sidebar = ({open,flag,setOpen}) => {
    const navigate = useNavigate();
    // const [open, setOpen] = useState(true);
    const isHidden = useMemo(()=> !open && window.innerWidth < 640 ,[open,window.innerWidth]);


    let {pathname}  = useLocation();

   
    const name = localStorage.getItem('name')


    const [dashboard, setDashboard] = useState(false);
    const [trends, setTrends] = useState(false);
    const [report, setReport] = useState(false);
    const [map, setMap] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [inventory, setInventory] = useState(false);
    const [task, setTask] = useState(false);
    const [configuration, setConfiguration] = useState(false);

    const [trendReal, setTrendReal] = useState(false);
    const [trendHistorical, setTrendHistorical] = useState(false);
    const [reportReal, setReportReal] = useState(false);
    const [reportHistory, setReportHistory] = useState(false);
    const [adminMaster, setAdminMaster] = useState(false);
    const [adminConfig, setAdminConfig] = useState(false);
    const [adminAsset, setAdminAsset] = useState(false);
    const [adminDevice, setAdminDevice] = useState(false);
    const [adminSite, setAdminSite] = useState(false);

    const [dash, setdash] = useState(false)


    const dashboardHandler = () => {
        setDashboard((x) => !x);
        setTrends(false);
        setReport(false);
        setMap(false);
        setAnalytics(false);
        setInventory(false);
        setTask(false);
        setConfiguration(false);
    };
    const trendHandler = () => {
        setDashboard(false);
        setTrends((x) => !x);
        setReport(false);
        setMap(false);
        setAnalytics(false);
        setInventory(false);
        setTask(false);
        setConfiguration(false);
    };
    const reportHandler = () => {
        setDashboard(false);
        setTrends(false);
        setReport((x) => !x);
        setMap(false);
        setAnalytics(false);
        setInventory(false);
        setTask(false);
        setConfiguration(false);
    };
    const mapHandler = () => {
        setDashboard(false);
        setTrends(false);
        setReport(false);
        setMap((x) => !x);
        setAnalytics(false);
        setInventory(false);
        setTask(false);
        setConfiguration(false);
    };
    const analyticsHandler = () => {
        setDashboard(false);
        setTrends(false);
        setReport(false);
        setMap(false);
        setAnalytics((x) => !x);
        setInventory(false);
        setTask(false);
        setConfiguration(false);
    };
    const inventoryHandler = () => {
        setDashboard(false);
        setTrends(false);
        setReport(false);
        setMap(false);
        setAnalytics(false);
        setInventory((x) => !x);
        setTask(false);
        setConfiguration(false);
    };
    const taskHandler = () => {
        setDashboard(false);
        setTrends(false);
        setReport(false);
        setMap(false);
        setAnalytics(false);
        setInventory(false);
        setTask((x) => !x);
        setConfiguration(false);
    };

    const configurationHandler = () => {
        setDashboard(false);
        setTrends(false);
        setReport(false);
        setMap(false);
        setAnalytics(false);
        setInventory(false);
        setTask(false);
        setConfiguration((x) => !x);
    };



    const adminMasterHandler = () =>{
        setAdminMaster((x) => !x)
        setAdminConfig(false)
        setAdminAsset(false)
        setAdminDevice(false)
        setAdminSite(false)
    }

    const adminConfigHandler = () =>{
        setAdminMaster(false)
        setAdminConfig((x) => !x)
        setAdminAsset(false)
        setAdminDevice(false)
        setAdminSite(false)
    }

    const adminAssetHandler = () =>{
        setAdminMaster(false)
        setAdminConfig(false)
        setAdminAsset((x) => !x)
        setAdminDevice(false)
        setAdminSite(false)
    }

    const adminDeviceHandler = () =>{
        setAdminMaster(false)
        setAdminConfig(false)
        setAdminAsset(false)
        setAdminDevice((x) => !x)
        setAdminSite(false)
    }

    const adminSiteHandler = () =>{
        setAdminMaster(false)
        setAdminConfig(false)
        setAdminAsset(false)
        setAdminDevice(false)
        setAdminSite((x) => !x)
    }

    const reportRealHandler = () =>{
        setReportReal((x) => !x)
        setReportHistory(false)
    }
    const reportHistoryHandler = () =>{
        setReportReal(false)
        setReportHistory((x) => !x)
    }

    const trendRealHandler = () =>{
        setTrendReal((x) => !x)
        setTrendHistorical(false)
    }
    const trendHistoricalHandler = () =>{
        setTrendReal(false)
        setTrendHistorical((x) => !x)
    }

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
                        { name : 'Country', path : 'admintask/config/country'},
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

        }
    ]



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
                {/* {open ? (
                    <FiChevronLeft
                        // style={{ backgroundColor: '#263238' }}
                        onClick={() => setOpen((x) => !x)}
                        className=' h-12 border-l-2 border-t-2 border-b-2 rounded-lg text-2xl absolute -right-2 top-4 cursor-pointer bg-white text-black dark:bg-[#263238] dark:text-white '
                    />
                ) : (
                    <FiChevronRight
                        // style={{ backgroundColor: '#263238' }}
                        onClick={() => setOpen((x) => !x)}
                        className=' h-12 border-l-2 border-t-2 border-b-2 rounded-lg text-2xl absolute -right-2 top-4 cursor-pointer bg-white text-black dark:bg-[#263238] dark:text-white'
                    />
                )} */}
{/* //////////// */}

{/* Home  */} 
<ul className="space-y-2 mt-3 font-normal pt-4">
         <li>
         <NavLink to='/dashboard' >

            <button   onClick={dashboardHandler} type="button" className={`flex ${pathname === '/dashboard' ?  'bg-slate-200 dark:bg-slate-700' : ''  } hover:bg-slate-200 dark:hover:bg-slate-700 items-center ${ open ? 'w-[230px]' : 'w-full' } p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white`} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
               <AiOutlineHome className='text-2xl' /> 
                  <span className={`flex-1 ms-3 text-md  text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Dashboard</span>
                  {/* <FaChevronDown  className='pl-2'  /> */}
            </button>
            </NavLink>

            {/* {
                dashboard ? 
                    <ul  id="dropdown-example" className=" py-2 space-y-2">
                        <NavLink to='/dashboard' >
                        <li className='flex  items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                            <button  type="button" className={`flex ${pathname === '/dashboard' ?  'bg-slate-200 dark:bg-slate-700' : ''  }  hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example`}>
                                <BiHomeAlt className='text-2xl' />
                                <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Home</span>
                            </button>
                        </li>
                        </NavLink>
                    </ul>
                    :
                    null
            } */}
         </li>
      </ul>

{/* Trends */}
{/* <ul className="space-y-2 font-normal pt-4">
        {
            sidebarList?.map((parent,ind)=>(
                <li key={ind} >
                    <button  onClick={trendHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <BsGraphUpArrow className='text-2xl' />
                            <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>{parent.parent}</span>
                            {parent.childs ? <FaChevronDown  className='pl-2'  /> : null }
                    </button>
                    <ul  id="dropdown-example" className=" py-2 space-y-2">
                            {
                                parent.childs?.map((childs,ind)=>(
                                    <li key={ind} className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                                        <button onClick={trendRealHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                            <AiFillSignal className='text-2xl' />
                                            <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>{childs.child}</span>
                                            {childs.subChild ? <FaChevronDown  className='pl-2'  /> : null }
                                        </button>
                                        <ul  id="dropdown-example" className={` ${  open ?  'block' : 'hidden'} py-2 space-y-2`}>
                                            {
                                                childs.subChild?.map((subChild)=>(
                                                    <NavLink to={`/${parent.parent.toLowerCase()}/${childs.child.toLowerCase()}/${subChild.name.toLowerCase()}`} >
                                                        <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700`} >
                                                            <a   onClick={() => {navigate(`/${parent.parent}/${childs.child}/${subChild.name}`) }}
                                                                className={`flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white ${pathname === `/${parent.parent.toLowerCase()}/${childs.child.toLowerCase()}/${subChild.name.toLowerCase()}` ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>{subChild.name}</a>
                                                        </li>
                                                    </NavLink>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                ))
                            }
                    </ul>
                </li>
            ))
        }
</ul> */}

<ul className="space-y-2 font-normal pt-4">
    <li>
    <button  onClick={trendHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <BsGraphUpArrow className='text-2xl' />
            <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Trends</span>
            <FaChevronDown  className='pl-2'  />
    </button>
    {
        trends ? 
// RealTime
            <ul  id="dropdown-example" className=" py-2 space-y-2">
                <li className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={trendRealHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <AiFillSignal className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Real Time</span>
                        <FaChevronDown  className='pl-2'  />
                    </button>
                    {
                        trendReal ? 
                            <ul  id="dropdown-example" className={` ${  open ?  'block' : 'hidden'} py-2 space-y-2`}>
                                <NavLink to='/trends/realtime/energy' >
                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700`} >
                                    <a   onClick={() => {navigate('/trends/realtime/energy') }}
                                        className={`flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white ${pathname === '/trends/realtime/energy' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>Energy</a>
                                </li>
                                </NavLink>
                                <NavLink to='/trends/realtime/temprature' >
                                    <li className={`hover:bg-slate-200 rounded-lg mt-1  dark:hover:bg-slate-700 ${pathname === '/trends/realtime/temprature' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}>
                                        <a  className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Temprature-HVAC</a>
                                    </li>
                                </NavLink>
                                <NavLink to='/trends/realtime/kitchen' >
                                    <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/realtime/kitchen' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}>
                                        <a  className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Kitchen Asset</a>
                                    </li>
                                </NavLink>

                                <NavLink to='/dashboard' >
                                    <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/dashboard' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}>
                                        <a  className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-red-500 dark:text-white">Savings</a>
                                    </li>
                                </NavLink>
                                <NavLink to='/trends/realtime/alerts' >
                                    <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/realtime/alerts' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}>
                                        <a onClick={() => {navigate('/trends/realtime/alerts')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Alerts</a>
                                    </li>
                                </NavLink>
                                <NavLink to='/trends/realtime/compilance' >
                                    <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/realtime/compilance' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}>
                                        <a  className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Compilance</a>
                                    </li>
                                </NavLink>
                                <NavLink to='/trends/realtime/electricalhealth' >
                                    <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '//trends/realtime/electricalhealth' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}>
                                        <a onClick={() =>{ navigate('/trends/realtime/electricalhealth')} } className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Electrical Health</a>
                                    </li>
                                </NavLink>

                                <NavLink to='/trends/realtime/override' >

                                    <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/realtime/override' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}> 
                                        <a  onClick={() =>{ navigate('/trends/realtime/override') }} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-red-500 dark:text-white">Override</a>
                                    </li>
                                </NavLink>
                                <NavLink to='/trends/realtime/control' >
                                    <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/realtime/control' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}>
                                        <a onClick={() => {navigate('/trends/realtime/control') }} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-red-500 dark:text-white">Control Enablement</a>
                                    </li>
                                </NavLink  >
                                <NavLink to='/dashboard' >
                                    <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/dashboard' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}>
                                        <a onClick={() => {navigate('/dashboard')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-red-500 dark:text-white">Food Storage</a>
                                    </li>
                                </NavLink>
                                <NavLink to='/trends/realtime/realiaq' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/realtime/realiaq' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}>
                                    <a onClick={() => {navigate('/trends/realtime/realiaq')} } className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-red-500 dark:text-white">IAQ</a>
                                </li>
                                </NavLink>
                            </ul>
                            :
                            null
                    }
                </li>
{/* Historical */}
                <li className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={trendHistoricalHandler} type="button" className="flex  hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <AiOutlineBarChart className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left   whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Historical</span>
                        <FaChevronDown  className='pl-2'  />
                    </button>
                    {
                        trendHistorical ? 
                            <ul  id="dropdown-example" className={` ${  open ?  'block' : 'hidden'} py-2 space-y-2`}>

                                <NavLink to='/trends/historical/energy' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700  ${pathname === '/trends/historical/energy' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>navigate('/trends/historical/energy')} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Energy</a>
                                </li>
                                </NavLink>
                                <NavLink to='/trends/historical/hvac' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/historical/hvac' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>{ navigate('/trends/historical/hvac')}} className="flex text-red-500 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group  dark:text-white">Temprature-HVAC</a>
                                </li>
                                </NavLink>
                                <NavLink to='/trends/historical/kitchen' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/historical/kitchen' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('/trends/historical/kitchen')}} className="flex text-red-500 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group  dark:text-white">Kitchen Asset</a>
                                </li>
                                </NavLink>
                                <NavLink to='/dashboard' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/dashboard' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('/dashboard')}} className="flex text-red-500 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group  dark:text-white">Savings</a>
                                </li>
                                </NavLink>
                                <NavLink to='/trends/historical/alerts' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/historical/alerts' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>{ navigate('/trends/historical/alerts')}} className="flex text-red-500 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group  dark:text-white">Alerts</a>
                                </li>
                                </NavLink>
                                <NavLink to='/trends/historical/electricalhealth' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/historical/electricalhealth' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}> 
                                    <a onClick={() => {navigate('/trends/historical/electricalhealth')}} className="flex text-red-500 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group  dark:text-white">Compilance</a>
                                </li>
                                </NavLink>
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/historical/energy' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a  className="flex text-red-500 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Electrical Health</a>
                                </li> */}
                                <NavLink to='/trends/historical/override' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/historical/override' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('/trends/historical/override')}} className="flex text-red-500 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group  dark:text-white">Override</a>
                                </li>
                                </NavLink>
                                <NavLink to='/trends/historical/control' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/historical/control' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('/trends/historical/control')}} className="flex text-red-500 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group  dark:text-white">Control Enablement</a>
                                </li>
                                </NavLink>
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/dashboard' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>{ navigate('/dashboard') }} className="flex text-red-500 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Food Storage</a>
                                </li> */}
                                <NavLink to='/trends/historical/realiaq' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/trends/historical/realiaq' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('/trends/historical/realiaq')}} className="flex text-red-500 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group  dark:text-white">IAQ</a>
                                </li>
                                </NavLink>
                            </ul>
                            :
                            null
                    }
                </li>
            </ul>
            
            :
            null
    }
    </li>
</ul>
{/* Reports */}


<ul className="space-y-2 font-normal pt-4">
    <li>
    <button onClick={reportHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <BsFileText className='text-2xl' />
            <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Reports</span>
            <FaChevronDown  className='pl-2'  />
    </button>
    {
        report ? 
// RealTime
            <ul  id="dropdown-example" className=" py-2 space-y-2">
                <li className='flex  flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={reportRealHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <BsFileEarmarkText className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Real Time Report</span>
                        <FaChevronDown  className='pl-2'  />
                    </button>
                    {
                        reportReal ? 
                            <ul  id="dropdown-example" className={` ${  open ?  'block' : 'hidden'} py-2 space-y-2`}>
                                <NavLink to='/report/realtime/hvac' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/report/realtime/hvac' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a  className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">HVAC</a>
                                </li>
                                </NavLink>
                                <NavLink to='/report/realtime/kitchen' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/report/realtime/kitchen' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('report/realtime/kitchen'); }} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group  dark:text-white">Kitchen</a>
                                </li>
                                </NavLink>
                                <NavLink to='/report/realtime/energy' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/report/realtime/energy' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('report/realtime/energy'); }} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-red-500  dark:text-white">Energy Report</a>
                                </li>
                                </NavLink>
                            </ul>
                            :
                            null
                    }
                </li>
{/* Historical */}
                <li className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={reportHistoryHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <BsFileEarmarkSpreadsheetFill className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left text-red-500   whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Historical Report</span>
                        <FaChevronDown  className='pl-2'  />
                    </button>
                    {
                        reportHistory ? 
                            <ul  id="dropdown-example" className={`${  open ?  'block' : 'hidden'} py-2 space-y-2`}>
                                <NavLink to='report/historical/hvac' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/report/historical/hvac' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('report/historical/hvac')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">HVAC</a>
                                </li>
                                </NavLink>
                                <NavLink to='report/historical/kitchen' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/report/historical/kitchen' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>{ navigate('report/historical/kitchen')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Kitchen</a>
                                </li>
                                </NavLink>
                                <NavLink to='report/historical/energy' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/report/historical/energy' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('report/historical/energy')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Energy Report</a>
                                </li>
                                </NavLink>

                            </ul>
                            :
                            null
                    }
                </li>
            </ul>
            
            :
            null
    }
    </li>
</ul>

{/* Map */}

<ul className="space-y-2 font-normal pt-4">
         <li>
            <button onClick={mapHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <BiMap className='text-2xl' />
                  <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Map</span>
                  <FaChevronDown  className='pl-2'  />
            </button>
            {
                map ? 
                    <ul  id="dropdown-example" className=" py-2 space-y-2">
                                <NavLink to='/map' >

                        <li className='flex items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                            <button onClick={() => {navigate('/map')}} type="button" className={`flex ${pathname === '/map' ?  'bg-slate-200 dark:bg-slate-700' : ''  } hover:bg-slate-200 dark:text-white dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example`}>
                                <BiSolidMapPin className='text-2xl' />
                                <span className={`flex-1 ms-3 text-md text-left dark:text-white  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Map View</span>
                            </button>
                        </li>
                        </NavLink>
                    </ul>
                    :
                    null
            }
         </li>
      </ul>
{/* Analytics */}

<ul className="space-y-2 font-normal pt-4">
         <li>
            <button onClick={analyticsHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <BiBarChart className='text-2xl' />
                  <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Analytics</span>
                  <FaChevronDown  className='pl-2'  />
            </button>
            {
                analytics ? 
                    <ul  id="dropdown-example" className=" py-2 space-y-2">
                                <NavLink to='/dashboard' >

                        <li className='flex items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                            <button onClick={() => {navigate('/dashboard')}} type="button" className={`flex  ${pathname === '/dashboard' ?  'bg-slate-200 dark:bg-slate-700' : ''  } hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example`}>
                                <BiBarChartAlt className='text-2xl' />
                                <span className={`flex-1 ms-3 text-md text-left text-red-500  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Analytics</span>
                            </button>
                        </li>
                        </NavLink>
                    </ul>
                    :
                    null
            }
         </li>
      </ul>
{/* Inventory */}

<ul className="space-y-2 font-normal pt-4">
         <li>
            <button onClick={inventoryHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <BiCalendarEdit className='text-2xl' />
                  <span className={`flex-1 ms-3 text-md text-left   whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Inventory</span>
                  <FaChevronDown  className='pl-2'  />
            </button>
            {
                inventory ? 
                    <ul  id="dropdown-example" className=" py-2 space-y-2">
                                <NavLink to='/inventory/order' >

                        <li className='flex items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                            <button onClick={() => {navigate('inventory/order')}} type="button" className={`flex ${pathname === '/inventory/order' ?  'bg-slate-200 dark:bg-slate-700' : ''  } hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example`}>
                                <BiListOl className='text-2xl' />
                                <span className={`flex-1 ms-3 text-md text-left text-red-500   whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Order</span>
                            </button>
                        </li>
                        </NavLink>
                    </ul>
                    :
                    null
            }
         </li>
      </ul>
{/* Admin Task */}

<ul className="space-y-2 font-normal pt-4">
    <li>
    <button onClick={taskHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <AiOutlineTool className='text-2xl' />
            <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Admin Task</span>
            <FaChevronDown  className='pl-2'  />
    </button>
    {
        task ? 
// Master
            <ul  id="dropdown-example" className=" py-2 space-y-2">
                <li className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={adminMasterHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <CiSettings className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Master</span>
                        <FaChevronDown  className='pl-2'  />
                    </button>
                    {
                        adminMaster ? 
                            <ul  id="dropdown-example" className={`${  open ?  'block' : 'hidden'} py-2 space-y-2`}>
                                <NavLink to='admintask/master/role' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/master/role' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>{ navigate('admintask/master/role')}} className="flex items-center w-full p-2 text-md  cursor-pointer  transition duration-75 rounded-lg  group text-black dark:text-white">Role</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/master/rolesubmenu' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/master/rolesubmenu' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>{ navigate('admintask/master/rolesubmenu')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg  group text-black dark:text-white">RoleSub Menu</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/master/designation' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/master/designation' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>navigate('admintask/master/designation')} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg  group text-black dark:text-white">Designation</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/master/user' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/master/user' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/master/user')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white">Users</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/master/usertype' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/master/usertype' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a  onClick={() => {navigate('admintask/master/usertype')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg  group text-black dark:text-white">Users Type</a>
                                </li>
                                </NavLink>
                            </ul>
                            :
                            null
                    }
                </li>
{/* Config Master */}
                <li className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={adminConfigHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <BsDatabaseExclamation className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Config Master</span>
                        <FaChevronDown  className='pl-2'  />
                    </button>
                    {
                        adminConfig ? 
                            <ul  id="dropdown-example" className={`${  open ?  'block' : 'hidden'} py-2 space-y-2`}>
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700`}>
                                    <a onClick={() => {navigate('admintask/config/country')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Country</a>
                                </li> */}
                                <NavLink to='admintask/config/state' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/state' ?  'bg-slate-200 dark:bg-slate-700' : ''  } `}>
                                    <a onClick={() => {navigate('admintask/config/state')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">State</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/config/city' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/city' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/config/city')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">City</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/config/contact' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/contact' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/config/contact')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Contact</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/config/contacttype' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/contacttype' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/config/contacttype')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Contact Type</a>
                                </li>
                                </NavLink>
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/address' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>{ navigate('admintask/config/address')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Address Type</a>
                                </li> */}
                                <NavLink to='admintask/config/customer' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/customer' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/config/customer')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Customer Details</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/config/customersetup' >
                                    <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/customersetup' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                        <a onClick={() => {navigate('admintask/config/customersetup')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Customer Setup</a>
                                    </li>
                                </NavLink>

                                <NavLink to='admintask/config/customercontact' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/customercontact' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/config/customercontact')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Customer Contact</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/config/customersite' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/customersite' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/config/customersite')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Customer Site</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/config/customeruser' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/customeruser' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/config/customeruser')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Customer User</a>
                                </li>
                                </NavLink>
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/zone' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/config/zone')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Zone</a>
                                </li> */}
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/config/state' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/config/status')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Status</a>
                                </li> */}
                            </ul>
                            :
                            null
                    }
                </li>
{/*  Asset Master */}
<li className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={adminAssetHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <BsListTask className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Asset Master</span>
                        <FaChevronDown  className='pl-2'  />
                    </button>
                    {
                        adminAsset ? 
                            <ul  id="dropdown-example" className={`${  open ?  'block' : 'hidden'} py-2 space-y-2`}>
                                <NavLink to='admintask/asset/assets' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/asset/assets' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/asset/assets')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Asset</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/asset/assettype' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/asset/assettype' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/asset/assettype')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Asset Type</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/asset/assetsparameter' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/asset/assetsparameter' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/asset/assetsparameter')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Asset Parameter</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/asset/assetsrule' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/asset/assetsrule' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>{ navigate('admintask/asset/assetsrule')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Asset Rules</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/asset/assetsoverride' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/asset/assetsoverride' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/asset/assetsoverride')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Asset Override</a>
                                </li>
                                </NavLink>
                            </ul>
                            :
                            null
                    }
                </li>
{/* Device Master */}

<li className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={adminDeviceHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <AiOutlineLaptop className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Device Master</span>
                        <FaChevronDown  className='pl-2'  />
                    </button>
                    {
                        adminDevice ? 
                            <ul  id="dropdown-example" className={`${  open ?  'block' : 'hidden'} py-2 space-y-2`}>
                                <NavLink to='admintask/device/status' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/device/status' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/device/status')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Device Status</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/device/details' >


                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/device/details' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() =>{ navigate('admintask/device/details') }} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Device Details</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/device/type' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/device/type' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/device/type')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Device Type</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/device/sensor' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/device/sensor' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/device/sensor')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Device Sensor</a>
                                </li>
                                </NavLink>
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/device/meter' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/device/meter')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Device Meter</a>
                                </li> */}
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/device/energy' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/device/energy')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Device Energy</a>
                                </li> */}
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/device/alert' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/device/alert')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Device Alert</a>
                                </li> */}
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/device/aqi' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/device/aqi')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Device AQI</a>
                                </li> */}
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/device/odour' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/device/odour')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Device Odour</a>
                                </li> */}
                            </ul>
                            :
                            null
                    }
                </li>
{/* Site Master */}

        <li className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={adminSiteHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <BiSitemap className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${open ?  'block' : 'hidden'}`}>Site Master</span>
                        <FaChevronDown  className='pl-2'  />
                    </button>
                    {
                        adminSite ? 
                            <ul  id="dropdown-example" className={`${  open ?  'block' : 'hidden'} py-2 space-y-2`}>
                                <NavLink to='admintask/site/site' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/site/site' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a  onClick={() => {navigate('admintask/site/site')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Site Information I&C</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/site/operatingrules' >

                                <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/site/operatingrules' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/site/operatingrules')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Site Operating Rules</a>
                                </li>
                                </NavLink>
                                <NavLink to='admintask/site/operations' >
                                    <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/site/operations' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                        <a onClick={() =>{ navigate('admintask/site/operations')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Site Operation Window</a>
                                    </li>
                                </NavLink>
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/site/baseline' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/site/baseline')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Site Information I&C</a>
                                </li> */}
                                {/* <li className={`hover:bg-slate-200 rounded-lg mt-1 dark:hover:bg-slate-700 ${pathname === '/admintask/site/information' ?  'bg-slate-200 dark:bg-slate-700' : ''  }`}>
                                    <a onClick={() => {navigate('admintask/site/information')}} className="flex items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg pl-4 group text-black dark:text-white">Site Information Baseline</a>
                                </li> */}
                            </ul>
                        :
                        null
                    }
                </li>
            </ul>
            
            :
            null
    }
    </li>
</ul>

{/* Configuration */}

<ul className="space-y-2 font-normal pt-4">
    <li>
    <button  onClick={configurationHandler} type="button" className="flex hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <AiFillSetting className='text-2xl' />
            <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Configuration</span>
            <FaChevronDown  className='pl-2'  />
    </button>
    {
        configuration ? 
// menu
            <ul  id="dropdown-example" className=" py-2 space-y-2">
        <NavLink to='admintask/configure/menu' >

                 <li className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={() => {navigate('admintask/configure/menu')}} type="button" className={`flex ${pathname === '/admintask/configure/menu' ?  'bg-slate-200 dark:bg-slate-700' : ''  } hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example`}>
                        <BsMenuDown className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Menu</span>
                    </button>
                   
                </li> 

            </NavLink>
{/* Sub Menu */}
<NavLink to='admintask/configure/submenu' >

                <li className='flex flex-col items-center w-full p-2  transition duration-75 rounded-lg pl-4 group text-black dark:text-white'>
                    <button onClick={() => {navigate('admintask/configure/submenu')}} type="button" className={`flex ${pathname === '/admintask/configure/submenu' ?  'bg-slate-200 dark:bg-slate-700' : ''  } hover:bg-slate-200 dark:hover:bg-slate-700 items-center w-full p-2 text-md cursor-pointer  transition duration-75 rounded-lg group text-black dark:text-white" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example`}>
                        <BsMenuApp className='text-2xl' />
                        <span className={`flex-1 ms-3 text-md text-left  whitespace-nowrap ${  open ?  'block' : 'hidden'}`}>Sub Menu</span>
                    </button>
                    
                </li>
                </NavLink>
            </ul>
            
            :
            null
    }
    </li>
</ul>



{/* ////////////////////// */}
            </div>
        </div>
        }
        </>
    );
};

export default Sidebar;
