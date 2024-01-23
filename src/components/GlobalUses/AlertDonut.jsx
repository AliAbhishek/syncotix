import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import exporting from 'highcharts/modules/exporting';
import { useSelector } from 'react-redux';
exporting(Highcharts);



const AlertDonut = ({data}) => {
    const {dark} = useSelector((state)=> state.themeReducer)

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
                borderWidth: 2,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}: {point.y}',
                    distance: 20
                }
            }
            // scatter: {
            //     tooltip: {
            //       headerFormat: '',
            //       pointFormat: '<b>{point.name}</b>',
            //     },
            //   },
        },
        series: [{
            // Disable mouse tracking on load, enable after custom animation
            enableMouseTracking: true,
            animation: {
                duration: 1000
            },
            colorByPoint: true,
            data: data || []
        }]
    }



  return (
    // <>
    //     <HighchartsReact
    //         highcharts={Highcharts}
    //         options={options}
    //     />
    // </>
    <>
        {data && data.length > 0 ? (
            <HighchartsReact highcharts={Highcharts} options={options} />
        ) : (
            <div className="text-center text-gray-500 py-8 ">No data</div>
        )}
    </>
  )
}

export default AlertDonut