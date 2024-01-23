import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import { login } from '../utills/api/login'
import { userDetails } from '../utills/api/User'
import { toast } from 'react-toastify'
import { FaEye, FaEyeSlash } from 'react-icons/fa'




const LoginPage = () => {

    const navigate = useNavigate();
    const [isShow,setIsShow] = useState(true)

    
    const [ user, setUser ] = useState({
        email : "",
        password : ""
    })

    const [ err, setErr] = useState({
        emailErr : "",
        passwordErr : "",
        apiErr : ""
    })

    const { mutateAsync : userDetail } = useMutation('login',login)
    const { mutateAsync : userIds} = useMutation(userDetails, {
        onSuccess : (x) => localStorage.setItem('userId',x?.customerId)
        
    })

    const changeHandler = (e) =>{
        setUser( old => ({...old,[e.target.name] : e.target.value }))
        setErr( old => ({...old,[`${e.target.name}Err`] : "" }))
    }

    const submitHandler = async (e) =>{
        e.preventDefault();

        const {email,password} = user

        const newErr = {
            emailErr : "",
            passwordErr : ""
        }

        let isValid = true;

        if(!email){
            newErr.emailErr = 'please enter a valid email!',
            isValid = false
        }
        if(!password || password.length < 6){
            newErr.passwordErr = 'please enter a valid password!',
            isValid = false
        }

        if(!isValid){
            setErr(newErr)
            return
        }


        const formData = new FormData();
        formData.append('email',email) 
        formData.append('password',password) 

      
        await userDetail(formData)
        .then((res)=>{
            userIds(email)
            localStorage.setItem('token',res.token)
            localStorage.setItem('userId',res.id)
            localStorage.setItem('siteId',res.customerSiteId)
            localStorage.setItem('customerId',res.customerId)
            localStorage.setItem('name',res.fullName)
            navigate('/dashboard')
        })
        .catch((err)=>{
            if(err?.message === "Network Error"){
                toast.error("Network Error")
            }else{
                setErr({ apiErr : "Invalid Details" })
            }
        })

    }




  return (
    <div>
        <div style={{ backgroundColor : '#f0f0ff' }} className=' w-screen h-screen flex justify-center items-center ' >
            
            <div className='absolute   ' >
                <div className="w-full  max-w-full max-h-full px-3 mx-auto mt-0 md:flex-0  ">
                    <div className="  flex flex-col justify-center items-center min-w-0 break-words h-1/2 bg-white border-0 shadow-xl rounded-2xl bg-clip-border">
                        <div  className="w-full p-6 mb-0 text-center bg-slate-100 rounded-xl ">
                            <p className=' text-lg font-bold text-gray-600 pb-4 ' >Welcome to SynCoTix</p>
                            <p className='font-thin text-sm text-black' >please sign-in to your account</p>
                        </div> 
                        
                        <form className='w-96 px-8 py-6 flex flex-col gap-4' onSubmit={submitHandler} >
                            <div className='w-full flex justify-center' >
                                <p className='font-mono text-red-700' >{err.apiErr}</p>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-black">Email address</label>
                                <input type="email" name='email' value={user.email} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{err.emailErr}</p>
                            </div>
                            {/* <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-black">Password</label>
                                <div>

                                <input type="password" name='password'  value={user.password} onChange={changeHandler}   placeholder="*************" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <p className='font-mono text-red-700' >{err.passwordErr }</p>
                            </div> */}
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-black">Password</label>

                                <div className="relative">
                                    <input type={`${isShow ? 'password' : 'text' }`} name='password'  value={user.password} onChange={changeHandler}   placeholder="*************" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {
                                        isShow ? 
                                        <FaEyeSlash onClick={()=>setIsShow(x => !x)} className='text-black absolute right-3 top-4 cursor-pointer' />
                                        :
                                        <FaEye onClick={()=>setIsShow(x => !x)} className='text-black absolute right-3 top-4 cursor-pointer' />
                                    }
                                </div>
                                <p className='font-mono text-red-700' >{err.passwordErr }</p>
                            </div>


                            
                            <button  type='submit' style={{ backgroundColor : '#29669f' }} className="flex items-center w-20  justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                <span> Login </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage