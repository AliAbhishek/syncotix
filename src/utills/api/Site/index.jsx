


import api from ".."
import { paths } from "../endPoints"




export const createSite = async(details) =>{

    const url = await api.post(paths.site,details,)
    return url?.data
}

export const updateSite = async(details) =>{

    const url = await api.put(paths.site,details,)
    return url?.data
}

export const siteList = async(details) =>{
   

    const url = await api.post(paths.SiteList,details,)
    return url?.data
}
