

import api from ".."
import { paths } from "../endPoints"


    


export const createContact= async(details) =>{
    

    const url = await api.post(paths.contact,details)
    return url?.data
}

export const updateContact = async(details) =>{
     

    const url = await api.put(paths.contact,details)
    return url?.data
}

export const contactList = async(details) =>{
    

    const url = await api.post(paths.contactList,details)
    return url?.data
}
