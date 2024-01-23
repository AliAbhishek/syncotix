import api from ".."
import { paths } from "../endPoints"


    
export const createCustomer = async(details) =>{
   

    const url = await api.post(paths.customer,details)
    return url?.data
}

export const customerList = async(details) =>{
   

    const url = await api.post(paths.customerList,details)
    return url?.data
}

export const customerUpdate = async(details) =>{
   

    const url = await api.put(paths.customer,details)
    return url?.data
}


export const setupCustomer = async(details) =>{
    const url = await api.post(paths.setupCustomer,details)
    return url?.data
}