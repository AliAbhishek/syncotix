import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/dashboard'
import Home from '../components/Home'
import Energy from '../components/Trends/TrendRealTime/Energy'
import RealHvac from '../components/Trends/TrendRealTime/RealHvac'
import RealKitchen from '../components/Trends/TrendRealTime/RealKitchen'
import RealAlerts from '../components/Trends/TrendRealTime/RealAlerts'
import RealHealth from '../components/Trends/TrendRealTime/RealHealth'
import RealOverride from '../components/Trends/TrendRealTime/RealOverride'
import RealControl from '../components/Trends/TrendRealTime/RealControl'
import RealIaq from '../components/Trends/TrendRealTime/RealIaq'
import HistoryEnergy from '../components/Trends/TrendHistorical/HistoryEnergy'
import HistoryHvac from '../components/Trends/TrendHistorical/HistoryHvac'
import HistoryKitchen from '../components/Trends/TrendHistorical/HistoryKitchen'
import HistoryAlerts from '../components/Trends/TrendHistorical/HistoryAlerts'
import HistoryHealth from '../components/Trends/TrendHistorical/HistoryHealth'
import HistoryOverride from '../components/Trends/TrendHistorical/HistoryOverride'
import HistoryControl from '../components/Trends/TrendHistorical/HistoryControl'
import HistoryIaq from '../components/Trends/TrendHistorical/HistoryIaq'
import ReportsKitchen from '../components/Reports/Historical Reports/ReportsKitchen'
import ReportsHvac from '../components/Reports/Historical Reports/ReportsHvac'
import ReportEnergy from '../components/Reports/Historical Reports/ReportsEnergy'
import ReportRealHvac from '../components/Reports/RealTimeReports/ReportRealHvac'
import ReportRealKitchen from '../components/Reports/RealTimeReports/ReportRealKitchen'
import ReportRealEnergy from '../components/Reports/RealTimeReports/ReportRealEnergy'
import Map from '../components/Map'
import Order from '../components/Inventory/Order'
import MasterRole from '../components/AdminTask/Master/MasterRole'
import MasterDesignation from '../components/AdminTask/Master/MasterDesignation'
import MasterUser from '../components/AdminTask/Master/MasterUser'
import ConfigCountry from '../components/AdminTask/ConfigMaster/ConfigCountry'
import ConfigState from '../components/AdminTask/ConfigMaster/ConfigState'
import ConfigCity from '../components/AdminTask/ConfigMaster/ConfigCity'
import ConfigAddress from '../components/AdminTask/ConfigMaster/ConfigAddress'
import ConfigCustomer from '../components/AdminTask/ConfigMaster/ConfigCustomer'
import ConfigZone from '../components/AdminTask/ConfigMaster/ConfigZone'
import ConfigStatus from '../components/AdminTask/ConfigMaster/ConfigStatus'
import AssetType from '../components/AdminTask/AssetMaster/AssetType'
import Asset from '../components/AdminTask/AssetMaster/Asset'
import AssetParameter from '../components/AdminTask/AssetMaster/AssetParameter'
import AssetRules from '../components/AdminTask/AssetMaster/AssetRules'
import AssetOverride from '../components/AdminTask/AssetMaster/AssetsOverride'
import DeviceStatus from '../components/AdminTask/DeviceMaster/DeviceStatus'
import DeviceDetails from '../components/AdminTask/DeviceMaster/DeviceDetails'
import DeviceType from '../components/AdminTask/DeviceMaster/DeviceType'
import Site from '../components/AdminTask/SiteMaster/Site'
import SiteOperatingRule from '../components/AdminTask/SiteMaster/SiteOperatingRules'
import SiteOperations from '../components/AdminTask/SiteMaster/SiteOperations'
import SiteInformation from '../components/AdminTask/SiteMaster/SiteInformation'
import SiteBaseline from '../components/AdminTask/SiteMaster/SiteBaseline'
import Menu from '../components/Configuration/Menu'
import SubMenu from '../components/Configuration/SubMenu'
import ProtectedRoutes from './ProtectedRoutes'
import MasterUserType from '../components/AdminTask/Master/MasterUserType'
import DeviceSensor from '../components/AdminTask/DeviceMaster/DeviceSensor'
import DeviceMeter from '../components/AdminTask/DeviceMaster/DeviceMeter'
import ConfigContact from '../components/AdminTask/ConfigMaster/ConfigContact'
import ContactType from '../components/AdminTask/ConfigMaster/ConatctType'
import ConfigCustomerContact from '../components/AdminTask/ConfigMaster/ConfigCustomerContact'
import ConfigCustomerSite from '../components/AdminTask/ConfigMaster/ConfigCustomerSite'
import MasterRoleSubMenu from '../components/AdminTask/Master/MasterRoleSubMenu'
import ConfigCustomerUser from '../components/AdminTask/ConfigMaster/ConfigCustomerUser'
import DeviceEnergy from '../components/AdminTask/DeviceMaster/DeviceEnergy'
import DeviceAlert from '../components/AdminTask/DeviceMaster/DeviceAlert'
import DeviceAqi from '../components/AdminTask/DeviceMaster/DeviceAqi'
import DeviceOdour from '../components/AdminTask/DeviceMaster/DeviceOdour'
import RealCompilance from '../components/Trends/TrendRealTime/RealCompilance'
import Profile from '../components/Profile'
import ConfigCustomerSetup from '../components/AdminTask/ConfigMaster/ConfigCustomerSetup'





const Routing = () => {
  return (
    <>

        <Routes>
            <Route path='/' element={<LoginPage /> } /> 

            <Route path='/' element={<Dashboard /> } >
                <Route path='/dashboard' element={ <ProtectedRoutes Component={Home } />  } />
                <Route path='/dashboard/profile' element={<ProtectedRoutes Component={Profile} />  } />

                <Route path='/trends/realtime/energy' element={<ProtectedRoutes Component={Energy }/> } />
                <Route path='/trends/realtime/hvac' element={ <ProtectedRoutes Component={RealHvac} /> } />
                <Route path='/trends/realtime/kitchen' element={ <ProtectedRoutes Component={RealKitchen } />  } />
                <Route path='/trends/realtime/alerts' element={<ProtectedRoutes Component={RealAlerts }/> } />
                <Route path='/trends/realtime/compilance' element={<ProtectedRoutes Component={RealCompilance }/> } />
                <Route path='/trends/realtime/electricalhealth' element={<ProtectedRoutes Component={RealHealth} /> } />
                <Route path='/trends/realtime/override' element={<ProtectedRoutes Component={RealOverride} /> } />
                <Route path='/trends/realtime/control' element={<ProtectedRoutes Component={RealControl }/> } />
                <Route path='/trends/realtime/realiaq' element={<ProtectedRoutes Component={RealIaq }/> } />

                

                <Route path='/trends/historical/energy' element={ <ProtectedRoutes Component={HistoryEnergy} /> } />
                <Route path='/trends/historical/hvac' element={ <ProtectedRoutes Component={HistoryHvac} /> } />
                <Route path='/trends/historical/kitchen' element={<ProtectedRoutes Component={HistoryKitchen} /> } />
                <Route path='/trends/historical/alerts' element={<ProtectedRoutes Component={HistoryAlerts }/> } />
                <Route path='/trends/historical/electricalhealth' element={<ProtectedRoutes Component={HistoryHealth }/> } />
                <Route path='/trends/historical/override' element={<ProtectedRoutes Component={HistoryOverride} /> } />
                <Route path='/trends/historical/control' element={<ProtectedRoutes Component={HistoryControl }/> } />
                <Route path='/trends/historical/realiaq' element={<ProtectedRoutes Component={HistoryIaq }/> } />

                <Route path='report/historical/kitchen' element={ <ProtectedRoutes Component={ReportsKitchen} /> } />
                <Route path='report/historical/hvac' element={<ProtectedRoutes Component={ReportsHvac} /> } />
                <Route path='report/historical/energy' element={<ProtectedRoutes Component={ReportEnergy }/> } /> 

                <Route path='report/realtime/hvac' element={<ProtectedRoutes Component={ReportRealHvac }/> } /> 
                <Route path='report/realtime/kitchen' element={<ProtectedRoutes Component={ReportRealKitchen} /> } /> 
                <Route path='report/realtime/energy' element={<ProtectedRoutes Component={ReportRealEnergy }/> } /> 

                <Route path='map' element={<ProtectedRoutes Component={Map} /> } />

                <Route path='inventory/order' element={<ProtectedRoutes Component={Order }/>  } />

                <Route path='admintask/master/role' element={<ProtectedRoutes Component={MasterRole }/>  } />
                <Route path='admintask/master/rolesubmenu' element={<ProtectedRoutes Component={MasterRoleSubMenu} />  } />

                <Route path='admintask/master/designation' element={<ProtectedRoutes Component={MasterDesignation} />  } />
                <Route path='admintask/master/user' element={<ProtectedRoutes Component={MasterUser }/>  } />
                <Route path='admintask/master/usertype' element={<ProtectedRoutes Component={MasterUserType }/>  } />

                <Route path='admintask/config/country' element={<ProtectedRoutes Component={ConfigCountry }/>  } />
                <Route path='admintask/config/state' element={<ProtectedRoutes Component={ConfigState} />  } />
                <Route path='admintask/config/city' element={<ProtectedRoutes Component={ConfigCity }/>  } />
                <Route path='admintask/config/address' element={<ProtectedRoutes Component={ConfigAddress }/>  } />
                <Route path='admintask/config/customer' element={<ProtectedRoutes Component={ConfigCustomer }/>  } />
                <Route path='admintask/config/customersetup' element={<ProtectedRoutes Component={ConfigCustomerSetup }/>  } />
                <Route path='admintask/config/customeruser' element={<ProtectedRoutes Component={ConfigCustomerUser }/>  } />

                

                <Route path='admintask/config/customercontact' element={<ProtectedRoutes Component={ConfigCustomerContact} />  } />
                <Route path='admintask/config/customersite' element={<ProtectedRoutes Component={ConfigCustomerSite} />  } />
                <Route path='admintask/config/zone' element={<ProtectedRoutes Component={ConfigZone }/>  } />
                <Route path='admintask/config/status' element={<ProtectedRoutes Component={ConfigStatus }/>  } />
                <Route path='admintask/config/contact' element={<ProtectedRoutes Component={ConfigContact }/>  } />
                <Route path='admintask/config/contacttype' element={<ProtectedRoutes Component={ContactType }/>  } />

                <Route path='admintask/asset/assettype' element={<ProtectedRoutes Component={AssetType} />  } />
                <Route path='admintask/asset/assets' element={<ProtectedRoutes Component={Asset }/>  } />
                <Route path='admintask/asset/assetsparameter' element={<ProtectedRoutes Component={AssetParameter} />  } />
                <Route path='admintask/asset/assetsrule' element={<ProtectedRoutes Component={AssetRules} />  } />
                <Route path='admintask/asset/assetsoverride' element={<ProtectedRoutes Component={AssetOverride} />  } />

                <Route path='admintask/device/status' element={<ProtectedRoutes Component={DeviceStatus }/>  } />
                <Route path='admintask/device/details' element={<ProtectedRoutes Component={DeviceDetails} />  } />
                <Route path='admintask/device/type' element={<ProtectedRoutes Component={DeviceType }/>  } />
                <Route path='admintask/device/sensor' element={<ProtectedRoutes Component={DeviceSensor }/>  } />
                <Route path='admintask/device/meter' element={<ProtectedRoutes Component={DeviceMeter} />  } />
                <Route path='admintask/device/energy' element={<ProtectedRoutes Component={DeviceEnergy }/>  } />
                <Route path='admintask/device/alert' element={<ProtectedRoutes Component={DeviceAlert} />  } />
                <Route path='admintask/device/aqi' element={<ProtectedRoutes Component={DeviceAqi} />  } />
                <Route path='admintask/device/odour' element={<ProtectedRoutes Component={DeviceOdour} />  } />

                <Route path='admintask/site/site' element={<ProtectedRoutes Component={Site }/>  } />
                <Route path='admintask/site/operatingrules' element={<ProtectedRoutes Component={SiteOperatingRule} />  } />
                <Route path='admintask/site/operations' element={<ProtectedRoutes Component={SiteOperations }/>  } />
                <Route path='admintask/site/information' element={<ProtectedRoutes Component={SiteInformation} />  } />
                <Route path='admintask/site/baseline' element={<ProtectedRoutes Component={SiteBaseline} />  } />

                <Route path='admintask/configure/menu' element={<ProtectedRoutes Component={Menu} />  } />
                <Route path='admintask/configure/submenu' element={<ProtectedRoutes Component={SubMenu} />  } />




                
            </Route>

        </Routes>

    </>
  )
}

export default Routing