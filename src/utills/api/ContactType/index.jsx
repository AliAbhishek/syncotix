

import api from ".."
import { paths } from "../endPoints"

    


export const createContactType= async(details) =>{
     
    const url = await api.post(paths.contactType,details)
    return url?.data
}

export const updateContactType = async(details) =>{
    
    const url = await api.put(paths.contactType,details)
    return url?.data
}

export const contactTypeList = async(details) =>{
    
    const url = await api.post(paths.contactTypeList,details)
    return url?.data
}
