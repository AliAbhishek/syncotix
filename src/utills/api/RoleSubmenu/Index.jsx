import api from ".."
import { paths } from "../endPoints"


export const CreateRoleSubmenu = async (details) => {
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.roleSubMenu,details,{headers : {
        Authorization : `Bearer ${token}`
    }})

    return url?.data

}
export const UpdateRoleSubmenu = async (details) => {
    const token = await localStorage.getItem('token')

    const url = await api.put(paths.roleSubMenu,details,{headers : {
        Authorization : `Bearer ${token}`
    }})

    return url?.data

}

export const RoleSubMenuList = async(details) =>{
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.RoleSubMenuList,details,{ headers : { Authorization : `Bearer ${token}`}})
    return url?.data
}
