import api from ".."
import { paths } from "../endPoints"

    
export const createState = async(details) =>{
   
    const url = await api.post(paths.state,details)
    return url?.data
}

export const updateState = async(details) =>{
    
    const url = await api.put(paths.state,details)
    return url?.data
}

export const stateList = async(details) =>{
     const url = await api.post(paths.stateList,details)
    return url?.data
}
