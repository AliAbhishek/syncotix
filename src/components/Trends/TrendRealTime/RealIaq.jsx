import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const RealIaq = () => {
    const [state, setState] = useState({
        series: [75],
        options: {
            responsive: [
                {
                    breakpoint: 576,
                    options: {
                        chart: {
                            width: '100%',
                            height: 200,
                        },
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
            chart: {
                height: 200,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: '#fff',
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
                            color: '#888',
                            fontSize: '17px',
                        },
                        value: {
                            formatter: function (val) {
                                return parseInt(val);
                            },
                            color: '#111',
                            fontSize: '36px',
                            show: true,
                        },
                    },
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#ABE5A1'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                },
            },
            stroke: {
                lineCap: 'round',
            },
            labels: ['Percent'],
        },
    });

// IAQ -AVG

    const [ toggle,setToggle ] = useState(true)

    const collapseHandler = () =>{
        setToggle(x => !x)
    }

    return (
    <div   className=' flex flex-col  gap-2 py-2 justify-start items-start mt-1  h-screen ' >
            <h4 className=" pl-4 pb-2 text-red-500 dark:text-slate-200 text-lg font-medium">IAQ</h4>

        <div  className='flex flex-wrap dark:text-white dark:bg-[#263238] bg-white text-black'>

            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={200}
                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={200}
                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={200}
                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={200}
                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={200}
                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={200}
                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={200}
                    />
                </div>
            </div>
            <div id='card'>
                <div id='chart'>
                    <Chart
                        options={state.options}
                        series={state.series}
                        type='radialBar'
                        height={200}
                    />
                </div>
            </div>
        </div>

{/* IAQ - AVG */}

        <h4 className=" pl-4 mt-5 dark:text-slate-200 text-lg font-medium" >IAQ - AVG </h4>
        <div  className=' flex flex-col w-full   gap-2 py-2 px-2 justify-start items-start mt-1   h-screen ' >
   <div className='  w-full' >
    <div >
        <button  onClick={collapseHandler} type="button"  className="flex dark:text-white dark:bg-[#263238] bg-white text-black items-center justify-between w-full p-4 font-medium text-left text-black-500 rounded-t-xl ">
            <p className='text-xl text-black ' >Override</p>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
        </button>
        {
            toggle ? 
            
            <div  className="relative overflow-x-auto">
                <table className="w-full text-sm text-left dark:text-white dark:bg-[#263238] bg-white text-black">
                    <thead  className="text-lg  uppercase ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Previous Hr
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Today
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Yesterday
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Current Week
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Previous Week
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Current Month
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" border-b text-lg ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                                No of Overrides
                            </th>
                            <td className="px-6 py-4">
                                29
                            </td>
                            <td className="px-6 py-4">
                                31
                            </td>
                            <td className="px-6 py-4">
                                24
                            </td>
                            <td className="px-6 py-4">
                                16
                            </td>
                            <td className="px-6 py-4">
                                7
                            </td>
                            <td className="px-6 py-4">
                                7
                            </td>
                            
                        </tr>
                        <tr className="  text-lg border-b ">
                            <th scope="row" className="px-6 py-4 font-medium   whitespace-nowrap ">
                                Override Hrs
                            </th>
                            <td className="px-6 py-4">
                                29
                            </td>
                            <td className="px-6 py-4">
                                31
                            </td>
                            <td className="px-6 py-4">
                                24
                            </td>
                            <td className="px-6 py-4">
                                16
                            </td>
                            <td className="px-6 py-4">
                                7
                            </td>
                            <td className="px-6 py-4">
                                7
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            :
            null
        }
    </div>
</div>
    
    </div>

    </div>
  )
}

export default RealIaq