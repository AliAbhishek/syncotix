

import api from ".."
import { paths } from "../endPoints"




export const createSubMenu= async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.subMenu,details)
    return url?.data
}

export const updateSubMenu = async(details) =>{
    
    const url = await api.put(paths.subMenu,details)
    return url?.data
}

export const subMenuList = async(details) =>{
    
    const url = await api.post(paths.subMenuList,details)
    return url?.data
}
