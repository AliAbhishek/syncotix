
import api from ".."
import { paths } from "../endPoints"


    


export const createDeviceAqi = async(details) =>{
    
    const url = await api.post(paths.deviceAQI,details)
    return url?.data
}

export const updateDeviceAqi = async(details) =>{
   
    const url = await api.put(paths.deviceAQI,details)
    return url?.data
}

export const deviceAqiList = async(details) =>{
    
    const url = await api.post(paths.deviceAqiList,details)
    return url?.data
}
