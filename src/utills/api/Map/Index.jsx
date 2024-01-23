import axios from "axios"

export const maps = async() =>{
    const url = await axios.post('http://bbk.syncotics.com/Deshboard/GetMapDetials/')
    return data?.url
}