import api from ".."
import { paths } from "../endPoints"


const userTheme = async(data) =>{
    const token = await localStorage.getItem('token')

    const url = await api.post(paths.userTheme+data,{ headers : { authourization : `Bearer ${token}`  } })
    return url?.data
}