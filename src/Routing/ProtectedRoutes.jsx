import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { userDetails } from '../utills/api/User';
import { useQuery } from 'react-query';

const ProtectedRoutes = ({Component}) => {

    const navigate = useNavigate();



    useEffect(()=>{
        let login = localStorage.getItem('token')
        if(!login){
            navigate('/')
        }
    })

  return (
    <>
        <Component />
    </>
  )
}

export default ProtectedRoutes


