
import api from ".."
import { paths } from "../endPoints"


    
export const createAssetParam = async(details) =>{
    

    const url = await api.post(paths.AssetParameter,details)
    return url?.data
}

export const updateAssetParam = async(details) =>{
    

    const url = await api.put(paths.AssetParameter,details)
    return url?.data
}

export const assetParamList = async(details) =>{

    const url = await api.post(paths.assetParameterList,details)
    return url?.data
}
