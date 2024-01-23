import api from ".."
import { paths } from "../endPoints"


export const ElectricHealth = async(siteId) =>{
   
    const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.electricHealth+`&CustomerId=${customerId}&SiteId=${siteId}`)
    return url?.data
}
export const GetAlerts = async() =>{
   
    const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.getAlerts+`?&CustomerId=${customerId}&SiteId=1`)
    return url?.data
}

export const DeshAlerts = async() =>{
     const customerId = await localStorage.getItem('customerId')
    
    const url = await api.get(paths.deshAlerts+`?&CustomerId=${customerId}&SiteId=1`)
    return url?.data
}


export const CompilanceOfStore = async() =>{
     const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.compilanceOfStore+`?&customerId=${customerId}&SiteId=1`)
    return url?.data
}

export const DeviationOverall = async() =>{
     const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.deviationOverall+`?&CustomerId=${customerId}&SiteId=1`)
    return url?.data
}

export const thermalMonitoringHVACAvg = async() =>{
    
    const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.thermalMonitoringHVACAvg+`&CustomerId=${customerId}&SiteId=${1}`)
    return url?.data
}

// ///////////////////////////

//  Kitchen
export const KitchenAssets = async() =>{
     const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.KitchenAssets+`&CustomerId=${customerId}&SiteId=${1}`)
    return url?.data
}
export const KitchenChart = async(val) =>{
      const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.kitchenChart+`&CustomerId=${customerId}&deviceType=${val}`)
    return url?.data
}

export const KitchenChartTwo = async(val) =>{
 
    const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.kitchenChart+`&CustomerId=${customerId}&deviceType=${val}`)
    return url?.data
}
// export const GetAlltransactionTempSensorByRealTimeReport = async() =>{
//    
//     const userId = await localStorage.getItem('userId')
//     const url = await api.get(paths.hvacReport + `?&customerId=${customerId}&SiteId=1&deviceType=1 `)
//     return url?.data
// }






// Alerts
export const HvacAlerts = async() =>{
   
    const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.hvacAlerts+`&customerId=${customerId}`)
    return url?.data
}

export const KitchenAlerts = async() =>{
   
    const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.kitchenAlerts+`&CustomerId=${customerId}`)
    return url?.data
}


// Energy

export const FilterEnergy = async({type,menu,subMenu,subRedoMenu}) =>{
   
    const url = await api.get(paths.filterEnergy+`type=${type}&menu=${menu}&submenu=${subMenu}&subRedoMenu=${subRedoMenu}`)
    return url?.data
}

export const EnergyCharts = async() =>{
    const customerId = await localStorage.getItem('customerId')
   
    const url = await api.get(paths.energyCharts+`&CustomerId=${customerId}`)
    return url?.data
}



// HVAC
export const HvacChartOne = async(val) =>{
   
    const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.hvacChart+`&CustomerId=${customerId}&deviceType=${val}`)
    return url?.data
}

export const HvacChartTwo = async(val) =>{
   
    const customerId = await localStorage.getItem('customerId')

    const url = await api.get(paths.hvacChart+`&CustomerId=${customerId}&deviceType=${val}`)
    return url?.data
}

export const TimeForChart = async() =>{
    
   
    const url = await api.get(paths.timeForChart)
    return url?.data
}





