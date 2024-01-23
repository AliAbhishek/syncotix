

import api from ".."
import { paths } from "../endPoints"


    
export const createDeviceType = async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.deviceType,details)
    return url?.data
}

export const updateDeviceType = async(details) =>{
    
    const url = await api.put(paths.deviceType,details)
    return url?.data
}


export const deviceTypeList = async(details) =>{
   
    const url = await api.post(paths.deviceTypeList,details)
    return url?.data
}
