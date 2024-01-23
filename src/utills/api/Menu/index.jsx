
import api from ".."
import { paths } from "../endPoints"


export const createMenu = async(details) =>{

    const url = await api.post(paths.menu,details)
    return url?.data
}

export const updateMenu = async(details) =>{
    
    const url = await api.put(paths.menu,details)
    return url?.data
}

export const menuList = async(details) =>{
     const token = await localStorage.getItem('token')

    const url = await api.post(paths.menuList,details)
    return url?.data
}
