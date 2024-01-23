import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbars from '../../components/Navbars';
import Sidebar from '../../components/Sidebar';
import { useMutation, useQuery } from 'react-query';
import { userDetails } from '../../utills/api/User';
import SidebarTwo from '../../components/Sidebar/SidebarTwo';

const Dashboard = () => {

    const [open, setOpen] = useState(true)
    const [value, setValue] = useState('')

    
 

    const toggleHandler = (val) =>{
        setOpen(x => !x)
        setValue(val)
    }




    return (
        <div className=' dark:text-white dark:bg-[#202125] bg-[#f5f5f5] text-black' >
            <Navbars toggleHandler={toggleHandler} opened={open} />
            <div className='flex relative'>
                {/* <Sidebar open={open} value={value} setOpen={setOpen} /> */}
                <SidebarTwo open={open} value={value} setOpen={setOpen} />
                
                <div className='scroll-hidden px-4 overflow-y-auto grow  dark:text-white dark:bg-[#202125] bg-[#f5f5f5] text-black '>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}; 

export default Dashboard;
