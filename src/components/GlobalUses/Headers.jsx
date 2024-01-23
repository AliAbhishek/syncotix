import React from 'react'
import { useNavigate } from 'react-router-dom'

const Headers = ({name,breadList}) => {

    const navigate = useNavigate()

 
  return (
    <div className='flex justify-between w-full bg-white dark:bg-[#263238] py-4 rounded-lg shadow-sm' >
        <h4 className="dark:text-white   pl-4   text-lg font-medium">{name}</h4>
        <nav className="flex pr-4" aria-label="Breadcrumb">
        <ol className="inline-flex  flex-wrap items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li onClick={()=>navigate('/dashboard')} className="inline-flex items-center cursor-pointer">
                            <a className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                                Dashboard
                            </a>
                        </li>
            {
                breadList?.map((x,ind)=>(
                    
                        <li key={ind} >
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>

                                <a onClick={()=>navigate(`${x.href}`)} className={`ms-1  ${ !!x.href  ? 'cursor-pointer' : 'cursor-text'  } text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white`}>{x.name}</a>
                            </div>
                        </li>
                        
                ))
            }
                    </ol>

          
        </nav>
    </div>
  )
}

export default Headers