

import api from ".."
import { paths } from "../endPoints"


    
export const createCustomerContact = async(details) =>{
 

    const url = await api.post(paths.customerContact,details)
    return url?.data
}

export const customerContactList = async(details) =>{
     const url = await api.post(paths.customerContactList,details)
    return url?.data
}

export const customerContactUpdate = async(details) =>{
     const url = await api.put(paths.customerContact,details)
    return url?.data
}