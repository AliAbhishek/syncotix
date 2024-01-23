

import api from ".."
import { paths } from "../endPoints"


    
export const createDeviceStatus = async(details) =>{
    
    const url = await api.post(paths.deviceStatus,details)
    return url?.data
}

export const updateDeviceStatus = async(details) =>{
    
    const url = await api.put(paths.deviceStatus,details)
    return url?.data
}

export const deviceStatusList = async(details) =>{
    const url = await api.post(paths.deviceStatusList,details)
    return url?.data
}
