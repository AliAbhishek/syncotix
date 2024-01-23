import api from ".."
import { paths } from "../endPoints"

    
export const createRole = async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.roles,details)
    return url?.data
}

export const roleList = async(details) =>{
    const url = await api.post(paths.roleList,details)
    return url?.data
}

export const roleUpdate = async(details) =>{
    
    const url = await api.put(paths.roles,details)
    return url?.data
}