
import api from ".."
import { paths } from "../endPoints"

const token = localStorage.getItem('token')
    


export const createDevice = async(details) =>{
   
    const url = await api.post(paths.device,details)
    return url?.data
}

export const updateDevice = async(details) =>{
    
    const url = await api.put(paths.device,details)
    return url?.data
}

export const deviceList = async(details) =>{
  
    const url = await api.post(paths.deviceList,details)
 
    return url?.data
}

