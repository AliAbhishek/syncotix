import React, { useMemo } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useQuery } from 'react-query'
import { TransactionTempSensor } from '../../utills/api/Dashboard'
import { useSelector } from 'react-redux'
// import exporting from 'highcharts/modules/exporting';
// exporting(Highcharts);


const DonutCharts = ({temp,lcl,ucl}) => {


        const {dark} = useSelector((state)=> state.themeReducer)

    const options = {
        chart: {
            type: 'pie',
            renderTo: 'container',
            width : 200,
            height : 180,
            backgroundColor: `${dark ? '#263238' : ' white '}`
        },
        title: {
            verticalAlign: 'middle',
            floating: true,
            text: `Temprature ${temp}`,
            style: {
                fontSize: '12px',
                color : `${dark ? 'white' : ' black '}`,
            },
        },
        
        exporting: {
            enabled: false, 
        },
        
        plotOptions: {
            pie: {
                innerSize: '85%',
                dataLabels: {
                    enabled: false, 
                },
            }
            // scatter: {
            //     tooltip: {
            //       headerFormat: '',
            //       pointFormat: '<b>{point.name}</b>',
            //     },
            //   },
        },
     
        series: [{
            data: [ 
                ['lcl', +lcl], 
                ['ucl', +ucl]
            ]
        }]
        
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

export default DonutCharts