import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import exporting from 'highcharts/modules/exporting';
import { useSelector } from 'react-redux';
exporting(Highcharts);


const BarCharts = ({data,time}) => {

    const {dark} = useSelector((state)=> state.themeReducer)


//   const options = {
//     chart: {
//         backgroundColor: dark ? '#263238' : '#ffffff', 
//       },
//     title: {
//         text: 'Total Power',
//         align: 'center',
//     },
//     yAxis: {
//         title: {
//             text: 'power',
//             style: {
//               color: dark ? '#ffffff' : '#000000', // Text color
//             },
//           },
//           labels: {
//             style: {
//               color: dark ? '#ffffff' : '#000000', // Text color
//             },
//           },
//         lineColor: dark ? '#ffffff' : '#000000'
//     },

//     xAxis: {
//       categories:  time,
//       labels: {
//         style: {
//           color: dark ? '#ffffff' : '#000000', // Text color
//         },
//       },
//       lineColor: dark ? '#ffffff' : '#000000'
//     },

//     legend: {
//         layout: 'horizontal',
//         align: 'center',
//         verticalAlign: 'bottom'
//     },

//     plotOptions: {
//         series: {
//             label: 
//                 ['p1','p2']
            
//         }
//     },

//     series: data,

//     responsive: {
//         rules: [{
//             condition: {
//                 maxWidth: 500
//             },
//             chartOptions: {
//                 legend: {
//                     layout: 'horizontal',
//                     align: 'center',
//                     verticalAlign: 'bottom',
//                 }
//             }
//         }]
//     },
   
//     exporting: {
//         enabled: true, 
//     },
//     navigation: {
//         menuStyle: {
//             border: '1px solid #A0A0A0',
//             background: '#FFFFFF',
//             padding: '5px 0',
//             boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//         },
//         menuItemStyle: {
//             padding: '0.5em 1em',
//         },
//         menuItemHoverStyle: {
//             background: '#335cad',
//             color: '#FFF',
//         },
//     },

// }


const options= {
    chart: {
        type: 'column',
        backgroundColor: dark ? '#263238' : '#ffffff', 
    },
    title: {
        text: '',
        align: ''
    },
    subtitle: {
        text:
            '',
        align: ''
    },
    xAxis: {
        categories: time,
        crosshair: true,
        accessibility: {
            description: 'Countries'
        },
        labels: {
            style: {
                color: dark ? '#ffffff' : '#000000', 
            },
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        labels: {
            style: {
                color: dark ? '#ffffff' : '#000000',
            },
        },
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
        // scatter: {
        //     tooltip: {
        //       headerFormat: '',
        //       pointFormat: '<b>{point.name}</b>',
        //     },
        //   },
    },
    series: [
        {
            name: '',
            data: data
        },
        {
            name: '',
            data: data
        }
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

export default BarCharts