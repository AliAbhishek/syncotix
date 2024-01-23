
import api from ".."
import { paths } from "../endPoints"


    


export const createDeviceAlert = async(details) =>{
    
    const url = await api.post(paths.deviceAlert,details)
    return url?.data
}

export const updateDeviceAlert = async(details) =>{
     
    const url = await api.put(paths.deviceAlert,details)
    return url?.data
}

export const deviceAlertList = async(details) =>{
    
    const url = await api.post(paths.deviceAlertList,details)
    return url?.data
}
