import api from ".."
import { paths } from "../endPoints"


    
export const createSiteOperation = async(details) =>{
    
    const url = await api.post(paths.siteOperation,details)
    return url?.data
}

export const SiteOperationUser = async(details) =>{
    
    const url = await api.put(paths.siteOperation,details)
    return url?.data
}

export const SiteOperationList = async(details) =>{
   
    const url = await api.post(paths.siteOperationList,details)
    return url?.data
}
