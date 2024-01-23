

import api from ".."
import { paths } from "../endPoints"

    
export const createAssetOverride = async(details) =>{
    
    const url = await api.post(paths.assetOverride,details)
    return url?.data
}

export const updateAssetOverride = async(details) =>{
    const url = await api.put(paths.assetOverride,details)
    return url?.data
}

export const assetOverRideList = async(details) =>{
    const url = await api.post(paths.assetOverRideList,details)
    return url?.data
}
