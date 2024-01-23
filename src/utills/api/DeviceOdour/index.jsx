
import api from ".."
import { paths } from "../endPoints"


    


export const createDeviceOdour = async(details) =>{
    
    const url = await api.post(paths.deviceOdour,details)
    return url?.data
}

export const updateDeviceOdour = async(details) =>{
    
    const url = await api.put(paths.deviceOdour,details)
    return url?.data
}

export const deviceOdourList = async(details) =>{
  
    const url = await api.post(paths.deviceOdourList,details)
    return url?.data
}
