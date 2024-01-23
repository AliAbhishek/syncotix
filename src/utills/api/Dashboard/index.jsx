import api from ".."
import { paths } from "../endPoints"


export const EnergyConsumption = async() =>{
    const customerId = localStorage.getItem('customerId')
    const siteId = localStorage.getItem('siteId')
     const url = await api.get(paths.energyConsumptiontotal+`&customerId=${customerId}&SiteId=${siteId}`)
    return url?.data
}


export const DeviceList = async() =>{
    const customerId = localStorage.getItem('customerId')
    const url = await api.get(paths.deviceListChart+`&customerId=${customerId}&DType=1` )
    return url?.data
}

export const EnergyConsumptionAverages = async() =>{
    const customerId = localStorage.getItem('customerId')
    const siteId = localStorage.getItem('siteId')
    const url = await api.get(paths.energyConsumptionAverages+`&customerId=${customerId}&SiteId=${siteId}`)
    return url?.data
}

export const TimeOfDayConsumption = async () =>{
    const siteId = localStorage.getItem('siteId')
    const customerId = localStorage.getItem('customerId')
    const url = await api.get(paths.timeOfDay+`&customerId=${customerId}&SiteId=${siteId}&deviceno=1001`)
    return url?.data
}


export const TransactionTempSensor = async() =>{
    const customerId = localStorage.getItem('customerId')
    const siteId = localStorage.getItem('siteId')
   
    const url = await api.get(paths.transactionTempSensor+`&customerId=${customerId}&SiteId=${siteId}` )
    return url?.data
}

export const TransactionTempSensorKitchen = async() =>{
    const customerId = localStorage.getItem('customerId')
    const siteId = localStorage.getItem('siteId')
   
   
    const url = await api.get(paths.transactionTempSensorKitchen+`&customerId=${customerId}&SiteId=${siteId}` )
    return url?.data
}



export const thermalMonitoringHVACAvg = async () =>{
      const url = await api.get(paths.thermalMonitoringHVACAvg )
    return url?.data
}