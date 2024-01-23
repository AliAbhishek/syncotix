import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import exporting from 'highcharts/modules/exporting';
import { useSelector } from 'react-redux';
exporting(Highcharts);


const CompilanceCharts = ({firValue,secValue,name }) => {
    const {dark} = useSelector((state)=> state.themeReducer)


    const options = {
        chart: {
            type: 'bar',
        backgroundColor: dark ? '#263238' : '#ffffff', 

        },
        title: {
            text: name,
            align: 'center'
        },
        xAxis: {
            categories: ['firValue', 'secValue'],
            title: {
                text: '',
                style: {
                  color: dark ? '#ffffff' : '#000000', // Text color
                },
              },
            gridLineWidth: 1,
            lineWidth: 0,
           
              labels: {
                style: {
                  color: dark ? '#ffffff' : '#000000', // Text color
                },
              },
            lineColor: dark ? '#ffffff' : '#000000'
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'low'
            },
            labels: {
                style: {
                  color: dark ? '#ffffff' : '#000000', // Text color
                },
              },
              lineColor: dark ? '#ffffff' : '#000000',
            gridLineWidth: 0
        },
        
       
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },
                groupPadding: 0.1
            }
            // scatter: {
            //   tooltip: {
            //     headerFormat: '',
            //     pointFormat: '<b>{point.name}</b>',
            //   },
            // },
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [ {
            name: name,
            data: [firValue,secValue]
        },
        
    ]

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

export default CompilanceCharts