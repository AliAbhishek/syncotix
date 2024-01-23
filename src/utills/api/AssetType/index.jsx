import api from ".."
import { paths } from "../endPoints"

const token = localStorage.getItem('token')

export const assetTypeList = async(details) =>{
   

    const url = await api.post(paths.assetTypeList,details)
    return url?.data
}


export const createAssetType= async(details) =>{
   

    const url = await api.post(paths.assetType,details)
    return url?.data
}

export const updateAsset = async(details) =>{
   

    const url = await api.put(paths.assetType,details)
    return url?.data
}
