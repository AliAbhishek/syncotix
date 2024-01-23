import api from ".."
import { paths } from "../endPoints"



export const createCity = async(details) =>{
    

    const url = await api.post(paths.city,details)
    return url?.data
}

export const updateCity = async(details) =>{
    


    const url = await api.put(paths.city,details)
    return url?.data
}

export const cityList = async(details) =>{
    

    const url = await api.post(paths.cityList,details)
    return url?.data
}

