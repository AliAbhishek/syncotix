import api from ".."
import { paths } from "../endPoints"



// hvac report

export const hvacReport = async (id) =>{
     const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.hvacReport+`&deviceType=${id}&CustomerId=${customerId}`)
    return url?.data
}