import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const ElectricalHealth = () => {

    const {dark} = useSelector((state)=> state.themeReducer)

    const [state, setState] = useState({
        series: [75],
        options: {
            responsive: [
                {
                    breakpoint: 576,
                    options: {
                        // chart: {
                        //     width: '100%',
                        //     height: 100,
                        // },
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
            chart: {
                height: 180,
                type: 'radialBar',

            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: '80%',
                        backgroundColor: dark ? '#263238' : '#ffffff', 
                        
                        image: undefined,
                        imageOffsetX: 0,
                        imageOffsetY: 0,
                        position: 'front',
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24,
                        },
                        
                    },
                    track: {
                        background: '#fff',
                        strokeWidth: '67%',
                        margin: 0, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35,
                        },
                    },

                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: "	#A9A9A9", 

                            fontSize: '12px',
                        },
                        value: {
                            formatter: function (val) {
                                return parseInt(val);
                            },
                            color: "	#A9A9A9", 
                            fontSize: '25px',
                            show: true,
                        },
                    },
                },
            },
            fill: {
                type: 'color',
                color : 'red',
                // gradient: {
                //     shade: 'dark',
                //     type: 'horizontal',
                //     shadeIntensity: 0.5,
                //     gradientToColors: ['#ABE5A1'],
                //     inverseColors: true,
                //     opacityFrom: 1,
                //     opacityTo: 1,
                //     stops: [0, 100],
                // },
            },
            stroke: {
                lineCap: 'round',
            },
            labels: ['Percent'],
        },
    });

    return (
        <div  className='flex justify-center items-center gap-6
        dark:text-white dark:bg-[#263238] rounded-b-lg bg-white dark:shadow-sm text-black  flex-wrap'>
            <div id='card'  >
                <div id='chart'  >
                    <Chart
                        options={state.options}
                        series={[45]}
                        type='radialBar'
                        height={180}
                        width={150}

                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={180}
                        width={150}

                    />
                </div>
            </div>
            <div id='card' >
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={180}
                        width={150}

                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={180}
                        width={150}

                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={180}
                        width={150}

                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={180}
                        width={150}

                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={180}
                        width={150}

                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={180}
                        width={150}
                    />
                </div>
            </div>
        </div>
    );
};

export default ElectricalHealth;
