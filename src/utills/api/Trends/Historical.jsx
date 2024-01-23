import api from ".."
import { paths } from "../endPoints"



export const EnergyReport = async({deviceNo,dtFrom,dtTo}) =>{
     const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.energyReport+`&CustomerId=${customerId}&SiteId=${1}&deviceNo=${deviceNo}&dtFrom=${dtFrom}&dtTo=${dtTo}`)
    return url?.data
}

