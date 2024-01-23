import api from ".."
import { paths } from "../endPoints"



export const login = async (details) =>{

    const url = await api.post(paths.LogingetToken,details)
    return url?.data
}

