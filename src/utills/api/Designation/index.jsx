import api from ".."
import { paths } from "../endPoints"


    
export const createDesignation = async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.designation,details)
    return url?.data
}

export const updateDesignation = async(details) =>{

    const url = await api.put(paths.designation,details)
    return url?.data
}

export const designationList = async(details) =>{

    const url = await api.post(paths.designationList,details)
    return url?.data
}
