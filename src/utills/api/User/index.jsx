import api from ".."
import { paths } from "../endPoints"


    
export const createUser = async(details) =>{
    
    const url = await api.post(paths.user,details)
    return url?.data
}

export const updateUser = async(details) =>{
    
    const url = await api.put(paths.user,details)
    return url?.data
}

export const userList = async(details) =>{
    
    const url = await api.post(paths.userList,details)
    return url?.data
}


export const userDetails = async(email) => {
   
    const url = await api(paths.userDetails+email,{ headers : { Authorization : `Bearer ${token}` } })
    return url?.data
}