import api from ".."
import { paths } from "../endPoints"

export const customerSiteList = async(details) =>{
   

    const url = await api.post(paths.customerSiteList,details)
    return url?.data
}


export const createCustomerSite = async(details) =>{
   

    const url = await api.post(paths.customerSite,details)
    return url?.data
}

export const updateCustomerSite = async(details) =>{
   

    const url = await api.put(paths.customerSite,details)
    return url?.data
}
export const getById = async(id) =>{
    const url = await api.get(paths.customerSite+'?id=' + id)
    return url?.data
}