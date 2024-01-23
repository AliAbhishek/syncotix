import React, { useEffect, useRef, useState } from 'react';

import { FiBell, FiMaximize, FiSearch, FiSettings } from 'react-icons/fi';
import logo from '../../assets/logoTwo.png';

import { BsBoxArrowInDown } from 'react-icons/bs';
import photo from '../../assets/background.jpg';
import { useFullscreen } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaMoon, FaSun } from 'react-icons/fa';
import moment from 'moment/moment';
import { Burger } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { ThemeAction } from '../../Store';
import {  getById } from '../../utills/api/CustomerSite'


const Navbars = ({toggleHandler,opened}) => {
    const storeRef = useRef(null);
    const profileRef = useRef(null);
    const [drop, setDrop] = useState(false);
    const [storeDrop, setStoreDrop] = useState(false);
    const [storeData, setStoreData] = useState(null); // Use useState hook for storeData
    const name = localStorage.getItem('name')
 
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchStoreName = async () => {
          try {
            const customersiteId = localStorage.getItem('siteId');
            const data = await getById(customersiteId);
            setStoreData(data); // Update the state with the fetched data
          } catch (error) {
            console.error('Error fetching store name:', error);
          }
        };
    
        fetchStoreName();
      }, []); // Run only once on component mount
    

    const [profileDrop, setProfileDrop] = useState(false);
    const { toggle, fullscreen } = useFullscreen();

    const navigate = useNavigate();

    const logoutHandler = () =>{
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('siteId')
        localStorage.removeItem('name')
        localStorage.removeItem('customerId')
        navigate('/')
    }



    const [darkMode, setDarkMode] = useState(false);
    
    const handlerDarkMode = () =>{
        setDarkMode(!darkMode)
        dispatch(ThemeAction.Dark({dark : !darkMode}) );

    }

    useEffect(()=>{
        document.body.classList.toggle('dark',darkMode)

    },[darkMode])

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (
                (storeRef.current && !storeRef.current.contains(e.target)) ||
                (profileRef.current && !profileRef.current.contains(e.target))
            ) {
                setStoreDrop(false);
                setProfileDrop(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className='flex flex-col gap-1'>
            <div   className=' dark:text-white dark:bg-[#263238] bg-white shadow-lg text-black  flex flex-col flex-wrap justify-between px-4 py-2 gap-2 lg:flex-row  '>
                <p>
                    <span className='text-[#29669f]'>User&Time : </span><span>{name} & {moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
                </p>
                <p>
                    <span className='text-[#29669f]'>Last Updated :</span> {moment().format('MMMM Do YYYY, h:mm:ss a')}
                </p>
                <p>
                    <span className='text-[#29669f]'>Store :</span> {storeData?.name}
                </p>
                <p>
                    <span className='text-[#29669f]'>Store Ranking :</span> 0
                </p>

                <div className='relative text-left'>
                    <div className='flex cursor-pointer '>
                        <p
                            onClick={() => setStoreDrop((x) => !x)}
                            type='button'
                        >
                            My Store
                        </p>
                        <svg
                            className='-mr-1 h-5 w-5 text-gray-400'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                    
                    {storeDrop ? (
                        <div
                            ref={storeRef}
                            className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                            role='menu'
                            aria-orientation='vertical'
                            aria-labelledby='menu-button'
                            tabindex='-1'
                        >
                            <div className='py-1' role='none'>
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Store Information
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Store Profile
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Business Case & ROI
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Program Plan
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Asset View
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    IOT Kit
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Solution
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Site Survey
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Layout & SLD
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Saving Strategies
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Store Operational Schedual
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Compliance Policy
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Baseline Data
                                </p>
                                <p className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100 '>
                                    Energy Spend data
                                </p>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            <div className=' dark:text-white dark:bg-[#263238]   bg-white text-black  py-4 flex items-center justify-between   '>
                <img src={logo} className='h-12 pl-4' />

                <div className=' justify-between items-center w-full pl-12 pr-6 hidden lg:flex'>
                    <div className='flex justify-center items-center gap-4 '>
                    <Burger className='cursor-pointer ' color={`${darkMode ? 'white' : 'black' }`} size={21} opened={opened} onClick={toggleHandler} aria-label="Toggle navigation" />
                        {/* // <FaBars  className='cursor-pointer' onClick={toggleHandler} /> */}
                        <div className='bg-green-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-purple-300'>
                            Online
                        </div>

                        <div className='relative rounded-md '>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'></div>
                            <input
                                type='text'
                                name='price'
                                id='price'
                                className='block w-96 rounded-3xl  py-1 pl-4 pr-20 border border-black  text-gray-900'
                                placeholder='search'
                            />
                            <div className='absolute inset-y-0 right-0 flex items-center'>
                                <FiSearch className='pr-2 w-8 cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-2'>
                        <FiMaximize onClick={toggle} className='text-black dark:text-white cursor-pointer text-xl ' />
                        <button 
                            className="text-gray-500 pl-6 dark:text-gray-400    rounded-lg text-sm p-2.5"
                            onClick={handlerDarkMode} 
                        >
                            {
                                darkMode ?
                                (
                                    <FaSun id='theme-toggle-dark-icon' className='text-xl text-white'  />
                                )
                                :
                                (
                                    <FaMoon id='theme-toggle-dark-icon' className='text-xl text-black' />
                                )
                            }

                        </button>
                        <button
                            type='button'
                            className='relative inline-flex items-center p-3 text-sm font-medium text-center text-black  '
                        >
                            <FiBell className='text-xl text-black dark:text-white  ' />
                            <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white  bg-red-500 border-2  rounded-full -top-2 -right-2 dark:border-gray-900'>
                                20
                            </div>
                        </button>

                        <div
                            onClick={() => setProfileDrop((x) => !x)}
                            className='relative inline-block text-left'
                        >
                            <a className='flex items-center gap-4' >
                                <span className='hidden text-right lg:block'>
                                    <span className='block text-black text-sm font-medium dark:text-white'>
                                        {name}
                                    </span>
                                </span>
                                <img
                                
                                    src={photo}
                                    alt='User'
                                    className='rounded-full h-12 w-12 cursor-pointer '
                                />
                            </a>
                        </div>
                        {profileDrop ? (
                            <div
                                ref={profileRef}
                                className='absolute right-4 z-10 top-28 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                                role='menu'
                                aria-orientation='vertical'
                                aria-labelledby='menu-button'
                                tabindex='-1'
                            >
                                <div className='py-1' role='none'>
                                    <p  onClick={()=>navigate('/dashboard/profile')}  className='text-gray-700 cursor-pointer block px-4 py-2 text-sm hover:bg-slate-100 '>
                                        My Profile
                                    </p>
                                    <p onClick={logoutHandler} className='text-gray-700 block px-4 py-2 cursor-pointer text-sm hover:bg-slate-100 '>
                                        Logout
                                    </p>
                                </div>
                            </div>
                        ) : null
                        }
                    </div>
                </div>

                <div className='flex items-center gap-4' >
                {/* <FaBars  className='lg:hidden cursor-pointer' onClick={toggleHandler.bind(this,'mobile')}  /> */}
                <Burger className='lg:hidden cursor-pointer' opened={opened} onClick={toggleHandler.bind(this,'mobile')}  aria-label="Toggle navigation" />


                    <BsBoxArrowInDown
                        onClick={() => setDrop((x) => !x)}
                        className='text-balck text-xl lg:hidden mr-4 cursor-pointer'
                    />
                </div>
            </div>

            {drop ? (
                <div className=' flex flex-col gap-6 justify-between items-center w-full  bg-white dark:bg-[#263238] py-4  '>
                    <div className='flex justify-center items-center gap-4 flex-wrap '>
                        <div className='bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300'>
                            online
                        </div>

                        <div className='relative rounded-md '>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'></div>
                            <input
                                type='text'
                                name='price'
                                id='price'
                                className='block w-64 rounded-md border-2 border-black  py-1 pl-4 pr-20 text-gray-900'
                                placeholder='search'
                            />
                            <div className='absolute inset-y-0 right-0 flex items-center '>
                                <FiSearch className='pr-2 w-8 cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-8'>
                        {/* <FiMaximize  className='text-black dark:text-white cursor-pointer' /> */}
                        <FiMaximize onClick={toggle} className='text-black dark:text-white cursor-pointer text-xl ' />

                        <button 
                            className="text-black dark:text-white text-sm p-2.5"
                            onClick={handlerDarkMode} 
                        >
                            {
                                darkMode ?
                                (
                                    <FaMoon  className='text-black dark:text-white' />
                                )
                                :
                                (
                                    <FaSun className='text-black dark:text-white' />
                                )
                            }

                        </button>
                        <button
                            type='button'
                            className='relative inline-flex items-center p-3 text-sm font-medium text-center text-white  '
                        >
                            <FiBell className='text-black dark:text-white' />
                            <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2  rounded-full -top-2 -right-2 dark:border-gray-900'>
                                20
                            </div>
                        </button>

                        <a className=' items-center gap-4' onClick={() => setProfileDrop((x) => !x)}>
                            <img
                                src={photo}
                                alt='User'
                                className='rounded-full h-12 w-12 cursor-pointer '
                            />
                        </a>
                    </div>
                    {profileDrop ? (
                            <div
                                ref={profileRef}
                                className='absolute right-4 z-10  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                                role='menu'
                                aria-orientation='vertical'
                                aria-labelledby='menu-button'
                                tabindex='-1'
                            >
                                <div className='py-1' role='none'>
                                    <p onClick={()=>navigate('/dashboard/profile')} className='text-gray-700 cursor-pointer block px-4 py-2 text-sm hover:bg-slate-100 '>
                                        My Profile
                                    </p>
                                    <p onClick={logoutHandler} className='text-gray-700 block px-4 py-2 cursor-pointer text-sm hover:bg-slate-100 '>
                                        Logout
                                    </p>
                                </div>
                            </div>
                        ) : null
                        }
                </div>
            ) : null}
        </div>
    );
};

export default Navbars;
