import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useQuery } from 'react-query';
// import { DeviceList } from '../../utills/api/Dashboard';
import { useSelector } from 'react-redux';
import { deviceList } from '../../utills/api/Device';

const RealTimeChart = () => {



    const [ chartDevice, setChartDevice] = useState([])

    const [ deviceFilter, setDeviceFilter ] = useState({
        sortOrder : "ModifiedOn",
        sortDirection : "desc",
        filterby : "",
        pageNo : 1,
        pageSize : 10
    })
 
    
    const { refetch : deviceFetch } = useQuery(['deviceList', deviceFilter],deviceList.bind(this,deviceFilter),{ onSuccess : (x)=> {
        setChartDevice(x?.items);
        
    }})

    // const { data: chartDevice } = useQuery('DeviceList',DeviceList)
    const {dark} = useSelector((state)=> state.themeReducer)


    const deviceNames = chartDevice?.map((device) => device.deviceName) || [];
    const percentagePerName = 100 / deviceNames.length;


    const list = chartDevice?.map((x)=>(
       { name : x.deviceName, y : percentagePerName}
    ))

    // const [state, setState] = useState({
    //     options: {
    //         responsive: [
    //             {
    //                 breakpoint: 576,
    //                 options: {
    //                     chart: {
    //                         width: '100%',
    //                     },
    //                     legend: {
    //                         show: false,
    //                     },
    //                 },
    //             },
    //         ],
    //     },
    //     series: [44, 55, 41, 17, 15],
    //     labels: ['A', 'B', 'C', 'D', 'E'],
        
    // });



    const options= {
        chart: {
            type: 'pie',
            backgroundColor: `${dark ? '#263238' : ' white '}`

        },
        title: {
            text: '',
            align: ''
        },
        subtitle: {
            text: '',
            align: ''
        },
        tooltip: {
            pointFormat: '{series.name}'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                innerSize: '70%',

                borderWidth: 2,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>',
                    distance: 20
                }
            },
        },
        series: [{
            // Disable mouse tracking on load, enable after custom animation
            enableMouseTracking: false,
            animation: {
                duration: 2000
            },
            colorByPoint: true,
            data: list
        }]
    }

   

    return (
        <div className='donut h-full w-full  '>
            <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
        </div>


    );
};




export default RealTimeChart;
