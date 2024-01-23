import api from ".."
import { paths } from "../endPoints"


    
export const createUserCustomer = async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.customerUser,details)
    return url?.data
}
export const getById = async(id) =>{
    const url = await api.post(paths.site+'?id=' + id)
    return url?.data
}
export const customerUserList = async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.customerUserList,details)
    return url?.data
}

export const customerUserUpdate = async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.put(paths.customerUser,details)
    return url?.data
}