import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import exporting from 'highcharts/modules/exporting';
import { useSelector } from 'react-redux';
exporting(Highcharts);


const HVACcharts = ({data,time}) => {

    const {dark} = useSelector((state)=> state.themeReducer)


  const options = {
    chart: {
        backgroundColor: dark ? '#263238' : '#ffffff', 
      },
    title: {
        text: '',
        align: 'center',
    },
    yAxis: {
        title: {
            text: 'power',
            style: {
              color: dark ? '#ffffff' : '#000000', // Text color
            },
          },
          labels: {
            style: {
              color: dark ? '#ffffff' : '#000000', // Text color
            },
          },
        lineColor: dark ? '#ffffff' : '#000000'
    },

    xAxis: {
      categories:  time,
      labels: {
        style: {
          color: dark ? '#ffffff' : '#000000', // Text color
        },
      },
      lineColor: dark ? '#ffffff' : '#000000'
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom'
    },

    plotOptions: {
        series: {
            label: 
                ['p1','p2']
            
        }
        // scatter: {
        //   tooltip: {
        //     headerFormat: '',
        //     pointFormat: '<b>{point.name}</b>',
        //   },
        // },
    },

    series: data,

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                }
            }
        }]
    },
   
    exporting: {
        enabled: true, 
    },
    navigation: {
        menuStyle: {
            border: '1px solid #A0A0A0',
            background: '#FFFFFF',
            padding: '5px 0',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },
        menuItemStyle: {
            padding: '0.5em 1em',
        },
        menuItemHoverStyle: {
            background: '#335cad',
            color: '#FFF',
        },
    },

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

export default HVACcharts