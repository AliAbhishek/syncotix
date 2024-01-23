

import api from ".."
import { paths } from "../endPoints"

    


export const createSiteRule = async(details) =>{
    
    const url = await api.post(paths.siteRule,details)
    return url?.data
}

export const updateSiteRule = async(details) =>{
    
    const url = await api.put(paths.siteRule,details)
    return url?.data
}

export const siteRuleList = async(details) =>{
    
    const url = await api.post(paths.siteRuleList,details)
    return url?.data
}
