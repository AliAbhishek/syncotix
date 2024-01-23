
import api from ".."
import { paths } from "../endPoints"

const token = localStorage.getItem('token')
    
export const createAssetRule = async(details) =>{
    
    const url = await api.post(paths.assetRule,details)
    return url?.data
}

export const updateAssetRule = async(details) =>{
   
    const url = await api.put(paths.assetRule,details)
    return url?.data
}

export const assetRuleList = async(details) =>{
   
    const url = await api.post(paths.assetRuleList,details)
    return url?.data
}
