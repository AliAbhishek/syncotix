
import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import exporting from 'highcharts/modules/exporting';
import { useSelector } from 'react-redux';
exporting(Highcharts);


const AreaChart = ({data,time}) => {

    const {dark} = useSelector((state)=> state.themeReducer)


  const options = {
    chart: {
        type: 'area',
        backgroundColor: `${dark ? '#263238' : ' white '}`

    },
    accessibility: {
        description: ''
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        allowDecimals: true,
        accessibility: {
            rangeDescription: ''
        },
        categories: time
    },
    yAxis: {
        title: {
            text: 'Temprature (°C)'
        }
    },
    tooltip: {
        pointFormat: '{series.name} '
    },
    plotOptions: {
        area: {
            // pointStart: ,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
        // scatter: {
        //     tooltip: {
        //       headerFormat: '',
        //       pointFormat: '<b>{point.name}</b>',
        //     },
        //   },
    },
    series:  data, 
}

  
  return (
    <>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </>
  )
}

export default AreaChart












