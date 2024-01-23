import api from ".."
import { paths } from "../endPoints"
 
  
export const createAsset= async(details) =>{
    const url = await api.post(paths.asset ,details )
    return url?.data
}

export const updateAsset = async(details) =>{
    const url = await api.put(paths.asset ,details )
    return url?.data
}

export const assetList = async(details) =>{
    
    const url = await api.post(paths.assetList,details)
    return url?.data
}
