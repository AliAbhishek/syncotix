import api from ".."
import { paths } from "../endPoints"

    
export const createUserType = async(details) =>{
    
    const url = await api.post(paths.userType,details)
    return url?.data
}

export const updateUserType = async(details) =>{
    
    const url = await api.put(paths.userType,details)
    return url?.data
}

export const userTypeList = async(details) =>{
     
    const url = await api.post(paths.userTypeList,details)
    return url?.data
}
