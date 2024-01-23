import React, { useState } from 'react'
import photo from '../../assets/background.jpg'
import { Image, Modal } from '@mantine/core'

const Profile = () => {

    const [ isOpen, setIsOpen ] = useState(false)

    
  return (
    <div  className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-screen ' >
        <h4 className="dark:text-white  text-[#4884C0] pl-4   text-lg font-medium">Profile</h4>
        <div className="w-full px-6 py-4 rounded-lg dark:text-white dark:bg-[#263238] bg-white text-black">
            <div className="relative ">
                <img className="w-24 h-24  rounded-full" src={photo} alt="" />
            </div>
            <div className='flex gap-2' >
                <button onClick={()=>setIsOpen(true)} type='submit' className="flex w-20 bg-[#4884C0] items-center justify-between   px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                    <span> View </span>
                </button>
                <button type='submit' className="flex w-24 bg-[#4884C0] items-center justify-between   px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                    <span> Change </span>
                </button>
            </div>
        
        </div>

        <Modal opened={isOpen} onClose={()=>setIsOpen(false)} title="Profile" centered>
            <Image
                radius="md"
                w="auto"
                fit="contain"
                src={photo}
            />
        </Modal>
       
    </div>
  )
}

export default Profile