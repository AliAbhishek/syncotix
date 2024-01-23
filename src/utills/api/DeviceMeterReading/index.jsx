

import api from ".."
import { paths } from "../endPoints"


    


export const createDeviceMeter= async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.deviceMeterReading,details)
    return url?.data
}

export const updateDeviceMeter = async(details) =>{
   
    const url = await api.put(paths.deviceMeterReading,details)
    return url?.data
}

export const deviceMeterList = async(details) =>{
  
    const url = await api.post(paths.deviceMeterList,details)
    return url?.data
}
