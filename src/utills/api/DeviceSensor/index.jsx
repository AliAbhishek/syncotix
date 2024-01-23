

import api from ".."
import { paths } from "../endPoints"


    


export const createDeviceSensor= async(details) =>{
    

    const url = await api.post(paths.deviceSensor,details)
    return url?.data
}

export const updateDeviceSensor = async(details) =>{
   
    const url = await api.put(paths.deviceSensor,details)
    return url?.data
}

export const deviceSensorList = async(details) =>{
     
    const url = await api.post(paths.deviceSensorList,details)
    return url?.data
}
