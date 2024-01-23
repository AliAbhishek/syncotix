export const paths = {
        LogingetToken : 'Login/getToken',

    // Assets

        asset : 'Asset',
        assetList : 'Asset/GetPaginatedAll',
        
    // Asset-Type 
        assetType : 'AssetType',
        assetTypeList : 'AssetType/GetPaginatedAll',

    //  Asset OverRide
        assetOverride : 'AssetOverride',
        assetOverRideList : 'AssetOverride/GetPaginatedAll',

    // Asset Parameter
        AssetParameter : 'AssetParameter',
        assetParameterList  : 'AssetParameter/GetPaginatedAll',

    //  Asset-Rule
        assetRule : 'AssetRule',
        assetRuleList : 'AssetRule/GetPaginatedAll',

    // Customer-Site
        customerSite : 'CustomerSite',
        customerSiteList : 'CustomerSite/GetPaginatedAll',

    //  Contact
        contact : 'Contact',
        contactList  : 'Contact/GetPaginatedAll',
        
    // ContactType
        contactType : 'ContactType',
        contactTypeList : 'ContactType/GetPaginatedAll',

    // Device
        device : 'Device',
        deviceList : 'Device/GetPaginatedAll',

    //  Device Alert
        deviceAlert : 'DeviceAlert',
        deviceAlertList : '/DeviceAlert/GetPaginatedAll',

    // Device AQI
        deviceAQI : 'DeviceAQI',
        deviceAqiList : 'DeviceAQI/GetPaginatedAll',

    // Device Odour
        deviceOdour : 'DeviceOdour',
        deviceOdourList : 'DeviceOdour/GetPaginatedAll',
    
    // Device-Type
        deviceType : 'DeviceType',
        deviceTypeList : 'DeviceType/GetPaginatedAll',

    // Device-status
        deviceStatus : 'DeviceStatus',
        deviceStatusList : 'DeviceStatus/GetPaginatedAll',

    // Device Sensor
        deviceSensor : 'DeviceSensorData',
        deviceSensorList : 'DeviceSensorData/GetPaginatedAll',

    // Device Meter Reading 
        deviceMeterReading : 'DeviceMeterReading',
        deviceMeterList : 'DeviceMeterReading/GetPaginatedAll',
        
    // Device Energy Reading
        deviceEnergyReading : 'DeviceEnergyReading',
        deviceEnergyList : 'DeviceEnergyReading/GetPaginatedAll',
        getEnergyReadings : 'DeviceEnergyReading?id=',

    // state
    
        state : 'State',
        stateList : 'State/GetPaginatedAll',

    // City

        city : 'City',
        cityList : 'City/GetPaginatedAll',

    // Customer

        customer : 'Customer',
        customerList : 'Customer/GetPaginatedAll',
        setupCustomer : 'Customer/SetupCustomer',

    // Customer Contact
        customerContact : 'CustomerContact',
        customerContactList : 'CustomerContact/GetPaginatedAll',
    // Customer User
        customerUser : 'CustomerUser',
        customerUserList :  'CustomerUser/GetPaginatedAll',

  

    //  Roles
        roles : 'Roles',
        roleList : 'Roles/GetPaginatedAll',

    // RolesSubmenu
        roleSubMenu : 'RoleSubMenu',
        RoleSubMenuList : 'RoleSubMenu/GetPaginatedAll',


    

    // Designation
        designation : 'Designation',
        designationList : 'Designation/GetPaginatedAll',

    // Menu
        menu : 'Menu',
        menuList : 'Menu/GetPaginatedAll',

    // Site
        site : 'SiteDetail',
        SiteList : 'SiteDetail/GetPaginatedAll',

    // Site Rule
        siteRule : 'SiteRule',
        siteRuleList : 'SiteRule/GetPaginatedAll',


    // Site Operation Details
        siteOperation : 'SiteOperationDetail',
        siteOperationList : 'SiteOperationDetail/GetPaginatedAll',

    // sub Menu
        subMenu : 'SubMenu',
        subMenuList : 'SubMenu/GetPaginatedAll',

    // User
        user : 'User',
        userList : 'User/GetPaginatedAll',
        userTheme : 'User/UpdateDefaultTheme',
        userDetails : 'User?email=',

    // User-Type
        userType : 'UserType',
        userTypeList : 'UserType/GetPaginatedAll',




    //  Dashboard

        energyConsumptiontotal :  'Device/EnergyConsumptiontotal?deviceNo=1008',
        energyConsumptionAverages : 'Device/EnergyConsumptionAverages?deviceNo=4',
        timeOfDay : 'Device/GetAllTimeofDayEnergyConsumption?SiteId=1',
        transactionTempSensor : 'Device/GetTopValueTransactionTempSensor?SiteId=1&deviceType=3,7',
        transactionTempSensorKitchen : 'Device/GetTopValueTransactionTempSensor?SiteId=1&deviceType=4,7',
        deviceListChart :  'Device/GetAllDevice?',

    // Trends
        electricHealth : 'Device/ElectricalHealthAverage?',
        // >>> HVAC
        thermalMonitoringHVACAvg :  'Device/ThermalMonitoringHVACAvg?deviceType=3',
        hvacChart : 'DeviceAlert/GetTransactionTempSensorForChart?',
        timeForChart : 'DeviceAlert/GetTimeForChart',
        
        // >>> Compilance 
        compilanceOfStore : 'Device/GetAllOverallComplianceofStore',
        deviationOverall : 'Device/GetAllDeviationOverallComplianceofStore',

        // >>> Alerts
        getAlerts : '/Device/GetAlerts',
        deshAlerts : '/Device/DeshAlerts',

        hvacAlerts : 'Device/DeshHVACAlerts?deviceType=4,7&SiteId=1',
        kitchenAlerts : 'Device/DeshHVACAlerts?deviceType=3,6&SiteId=1',


    // Temprature Kitchen Asset 

        KitchenAssets : 'Device/ThermalMonitoringHVACAvg?deviceType=4,5,6,7',
        kitchenChart : 'DeviceAlert/GetTransactionTempSensorForChart?',


    // Energy

        filterEnergy : 'Device/EnergyMeterRealtimeBarchart?',
        energyCharts : 'DeviceEnergyReading/GetallmeterdetailsbymeternameChart?meterNo=1002&p=p15&SiteId=1',

    // Trend Historical
        //  Energy
            energyReport :  'Device/GetAllEnergyReportByDate?',


////////////////////////////// 
//  Report 

        // RealTime Reports
        hvacReport : 'Device/GetAlltransactionTempSensorByRealTimeReport?SiteId=1',




}