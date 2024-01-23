

import api from ".."
import { paths } from "../endPoints"


    


export const createDeviceEnergy= async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.deviceEnergyReading,details)
    return url?.data
}

export const getEnergyReadings = async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.get(paths.getEnergyReadings+details)
    return url?.data
}

export const updateDeviceEnergy = async(details) =>{
     
    const url = await api.put(paths.deviceEnergyReading,details)
    return url?.data
}

export const deviceEnergyList = async(details) =>{
   

    const url = await api.post(paths.deviceEnergyList,details)
    return url?.data
}

