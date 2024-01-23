import React, { useState } from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { useMutation, useQuery } from 'react-query';
import { createDeviceSensor, updateDeviceSensor } from '../../../utills/api/DeviceSensor';
import { deviceList } from '../../../utills/api/Device';
import { createDeviceMeter, updateDeviceMeter } from '../../../utills/api/DeviceMeterReading';
import { toast } from 'react-toastify';
import { InputDate } from '../../../utills/helpers/DateFormat';
import { Modal } from '@mantine/core';



const AddDeviceMeter = ({modalName,isActive,meter,totalPow,avgPf,powR,voltR,currR,powY,voltY,currY,powB,voltB,currB,cummEn,
    runHrs,powFac,r,y,b,cumConsp,ac1,ac2,ac3,foh,boh,sinage,exFaR,exFaY,exFaB,oven1,oven2,oven3,tdate,deviceId,ids,meterFetch}) => {
    const [ isOpen, setIsOpen] = useState(false)
    const [ meterData, setMeterData ] = useState({
        isActive : isActive ? isActive : true,
        meter: meter ? meter : "",
        totalPow: totalPow ? totalPow : "",
        avgPf: avgPf ? avgPf : "",
        powR:  powR ? powR : "",
        voltR: voltR ? voltR : "",
        currR: currR ? currR : "",
        powY: powY ? powY : "",
        voltY: voltY ? voltY :"",
        currY: currY ? currY :"",
        powB: powB ? powB : "",
        voltB: voltB ? voltB : "",
        currB: currB ? currB : "",
        cummEn:cummEn ? cummEn : "",
        runHrs: runHrs ? runHrs : "",
        powFac: powFac ? powFac : "",
        r: r ? r : "",
        y: y ? y :"",
        b: b ? b : "",
        cumConsp: cumConsp ? cumConsp : "",
        ac1: ac1 ? ac1 : "",
        ac2: ac2 ? ac2 :"",
        ac3: ac3 ? ac3 :"",
        foh: foh ? foh :"",
        boh: boh ? boh : "",
        sinage: sinage ? sinage :"",
        exFaR: exFaR ? exFaR : "",
        exFaY: exFaY ? exFaY : "",
        exFaB: exFaB ? exFaB : "",
        oven1: oven1 ? oven1 : "",
        oven2: oven2 ? oven2 : "",
        oven3: oven3 ? oven3 : "",
        tdate: tdate ? tdate : "",
        deviceId: deviceId ? deviceId : ""
    })

    const [ meterDataErr, setMeterDataErr ] = useState({
        meterErr :  "",
        totalPowErr:  "",
        avgPfErr: "",
        powRErr:   "",
        voltRErr: "",
        currRErr: "",
        powYErr:  "",
        voltYErr: "",
        currYErr: "",
        powBErr: "",
        voltBErr:  "",
        currBErr:  "",
        cummEnErr: "",
        runHrsErr:  "",
        powFac:  "",
        rErr: "",
        yErr:"",
        bErr: "",
        cumConspErr:  "",
        ac1Err:  "",
        ac2Err: "",
        ac3Err: "",
        fohErr: "",
        bohErr:  "",
        sinageErr: "",
        exFaRErr: "",
        exFaYErr: "",
        exFaBErr:  "",
        oven1Err: "",
        oven2Err:  "",
        oven3Err:  "",
        tdateErr:  "",
        deviceIdErr:  ""
    })


    const [deviceDrop, setDeviceDrop] = useState([])
    const [ deviceFilter, setDeviceFilter ] = useState({
        "sortOrder": "",
        "sortDirection": "",
        "filterby": "",
        "pageNo": 1,
        "pageSize": 1000
    })
    
    const { } = useQuery('deviceList',deviceList.bind(this,deviceFilter),{ onSuccess : (x) =>setDeviceDrop(x?.items)} )

    const { mutateAsync : meterDetails } = useMutation('createDeviceMeter',createDeviceMeter)
    const { mutateAsync : meterUpdated } = useMutation('updateDeviceMeter',updateDeviceMeter)


    const changeHandler = (e) =>{
        setMeterData( old => ({ ...old, [e.target.name] : e.target.value }))
        setMeterDataErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
    }

    const activeHandler = (e) =>{
        setMeterData( old => ({...old,[e.target.name] : e.target.checked }))
    }

    const submitHandler = async(e)=>{

        e.preventDefault();

        let isValid = true
        const {
            meter,totalPow,avgPf,powR,voltR,currR,powY,voltY,currY,powB,voltB,currB,cummEn,
            runHrs,powFac,r,y,b,cumConsp,ac1,ac2,ac3,foh,boh,sinage,exFaR,exFaY,exFaB,oven1,oven2,oven3,tdate,deviceId
        } = meterData

        const updatedDetails = {...meterData,id : ids}

        const newErr = {
            meterErr :  "",
            totalPowErr:  "",
            avgPfErr: "",
            powRErr:   "",
            voltRErr: "",
            currRErr: "",
            powYErr:  "",
            voltYErr: "",
            currYErr: "",
            powBErr: "",
            voltBErr:  "",
            currBErr:  "",
            cummEnErr: "",
            runHrsErr:  "",
            powFacErr:  "",
            rErr: "",
            yErr:"",
            bErr: "",
            cumConspErr:  "",
            ac1Err:  "",
            ac2Err: "",
            ac3Err: "",
            fohErr: "",
            bohErr:  "",
            sinageErr: "",
            exFaRErr: "",
            exFaYErr: "",
            exFaBErr:  "",
            oven1Err: "",
            oven2Err:  "",
            oven3Err:  "",
            tdateErr:  "",
            deviceIdErr:  ""
        }

        if(!meter){
            newErr.meterErr = 'please enter valid details',
            isValid = false
        }
        if(!totalPow){
            newErr.totalPowErr = 'please enter valid details',
            isValid = false
        }
        if(!avgPf){
            newErr.avgPfErr = 'please enter valid details',
            isValid = false
        }
        if(!powR){
            newErr.powRErr = 'please enter valid details',
            isValid = false
        }
        if(!voltR){
            newErr.voltRErr = 'please enter valid details',
            isValid = false
        }
        if(!currR){
            newErr.currRErr = 'please enter valid details',
            isValid = false
        }
        if(!powY){
            newErr.powYErr = 'please enter valid details',
            isValid = false
        }
        if(!voltY){
            newErr.voltYErr = 'please enter valid details',
            isValid = false
        }
        if(!currY){
            newErr.currYErr = 'please enter valid details',
            isValid = false
        }
        if(!powB){
            newErr.powBErr = 'please enter valid details',
            isValid = false
        }
        if(!voltB){
            newErr.voltBErr = 'please enter valid details',
            isValid = false
        }
        if(!currB){
            newErr.currBErr = 'please enter valid details',
            isValid = false
        }
        if(!cummEn){
            newErr.cummEnErr = 'please enter valid details',
            isValid = false
        }
        if(!runHrs){
            newErr.runHrsErr = 'please enter valid details',
            isValid = false
        }
        if(!powFac){
            newErr.powFacErr = 'please enter valid details',
            isValid = false
        }
        if(!r){
            newErr.rErr = 'please enter valid details',
            isValid = false
        }
        if(!y){
            newErr.yErr = 'please enter valid details',
            isValid = false
        }
        if(!b){
            newErr.bErr = 'please enter valid details',
            isValid = false
        }
        if(!cumConsp){
            newErr.cumConspErr = 'please enter valid details',
            isValid = false
        }
        if(!ac1){
            newErr.ac1Err = 'please enter valid details',
            isValid = false
        }
        if(!ac2){
            newErr.ac2Err = 'please enter valid details',
            isValid = false
        }
        if(!ac3){
            newErr.ac3Err = 'please enter valid details',
            isValid = false
        }
        if(!foh){
            newErr.fohErr = 'please enter valid details',
            isValid = false
        }
        if(!boh){
            newErr.bohErr = 'please enter valid details',
            isValid = false
        }
        if(!sinage){
            newErr.sinageErr = 'please enter valid details',
            isValid = false
        }
        if(!exFaR){
            newErr.exFaRErr = 'please enter valid details',
            isValid = false
        }
        if(!exFaY){
            newErr.exFaYErr = 'please enter valid details',
            isValid = false
        }
        if(!exFaB){
            newErr.exFaBErr = 'please enter valid details',
            isValid = false
        }
        if(!oven1){
            newErr.oven1Err = 'please enter valid details',
            isValid = false
        }
        if(!oven2){
            newErr.oven2Err = 'please enter valid details',
            isValid = false
        }
        if(!oven3){
            newErr.oven3Err = 'please enter valid details',
            isValid = false
        }
        if(!tdate){
            newErr.tdateErr = 'please enter valid details',
            isValid = false
        }
        if(!deviceId){
            newErr.deviceIdErr = 'please Select',
            isValid = false
        }

        if(!isValid){
            setMeterDataErr(newErr)
            return
        }

        modalName === 'add' ?
            await meterDetails(meterData)
            .then((res)=>{
                setIsOpen(false)
                meterFetch()
                toast.success('added successfully')
            })
            .catch((err)=>{
                console.log(err)
            })
        :
            await meterUpdated(updatedDetails)
            .then((res)=>{
                setIsOpen(false)
                meterFetch()
                toast.success('updated successfully')
            })
            .catch((err)=>{
                console.log(err)
            })

    }

  return (
    <div>
        {
            modalName === 'add' ? 
                <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                    <span> Add Device Meter </span>
                </button>
                :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />
        }

<Modal
                centered
                opened={isOpen}
                onClose={() => {setIsOpen(false);resetState()}}
                title="Device Meter Details"
size='lg'
closeOnClickOutside={false}
                transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
            >

                <form onSubmit={submitHandler} className="relative flex flex-col md:grid md:grid-cols-4 gap-2 w-full  px-8 pb-3 pt-6  "  >
                    
                        <div  className='' >
                            <label className="block mb-2 text-sm text-gray-600 dark:text-black">Device Name</label>
                            <select  defaultValue={meterData.deviceId} name='deviceId' onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                <option disabled selected value='' >Select</option>
                                {
                                    deviceDrop?.map((x,ind)=>(
                                        <option  value={x.id} >{x.deviceName}</option>
                                    ))
                                }
                            </select>
                            <p className='font-mono text-red-700' >{meterDataErr.deviceIdErr}</p>
                        </div>

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Meter </label>
                            <input type="number" name='meter' value={meterData.meter} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.meterErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Total Pow </label>
                            <input type="number" name='totalPow' value={meterData.totalPow} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.totalPowErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Avg Pf </label>
                            <input type="number" name='avgPf' value={meterData.avgPf} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.avgPfErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">PowR </label>
                            <input type="number" name='powR' value={meterData.powR} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.powRErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">VoltR </label>
                            <input type="number" name='voltR' value={meterData.voltR} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.voltRErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">CurrR </label>
                            <input type="number" name='currR' value={meterData.currR} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.currRErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">PowY </label>
                            <input type="number" name='powY' value={meterData.powY} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.powYErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">VoltY </label>
                            <input type="number" name='voltY' value={meterData.voltY} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.voltYErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">CurrY </label>
                            <input type="number" name='currY' value={meterData.currY} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.currYErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">PowB </label>
                            <input type="number" name='powB' value={meterData.powB} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.powBErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">VoltB </label>
                            <input type="number" name='voltB' value={meterData.voltB} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.voltBErr}</p>
                        </div>

                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">CurrB </label>
                            <input type="number" name='currB' value={meterData.currB} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.currBErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">CummEn </label>
                            <input type="number" name='cummEn' value={meterData.cummEn} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.cummEnErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">RunHrs </label>
                            <input type="number" name='runHrs' value={meterData.runHrs} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.runHrsErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">PowFac </label>
                            <input type="number" name='powFac' value={meterData.powFac} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.powFacErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">R </label>
                            <input type="number" name='r' value={meterData.r} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.rErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Y </label>
                            <input type="number" name='y' value={meterData.y} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.yErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">b </label>
                            <input type="number" name='b' value={meterData.b} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.bErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Cum Consp </label>
                            <input type="number" name='cumConsp' value={meterData.cumConsp} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.cumConspErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Ac1 </label>
                            <input type="number" name='ac1' value={meterData.ac1} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.ac1Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Ac2 </label>
                            <input type="number" name='ac2' value={meterData.ac2} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.ac2Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Ac3 </label>
                            <input type="number" name='ac3' value={meterData.ac3} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.ac3Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Foh </label>
                            <input type="number" name='foh' value={meterData.foh} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.fohErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Boh </label>
                            <input type="number" name='boh' value={meterData.boh} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.bohErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">Sinage </label>
                            <input type="number" name='sinage' value={meterData.sinage} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.sinageErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">exFaR </label>
                            <input type="number" name='exFaR' value={meterData.exFaR} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.exFaRErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">exFaY </label>
                            <input type="number" name='exFaY' value={meterData.exFaY} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.exFaYErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">exFaB </label>
                            <input type="number" name='exFaB' value={meterData.exFaB} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.exFaBErr}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">oven1 </label>
                            <input type="number" name='oven1' value={meterData.oven1} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.oven1Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">oven2 </label>
                            <input type="number" name='oven2' value={meterData.oven2} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.oven2Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">oven3 </label>
                            <input type="number" name='oven3' value={meterData.oven3} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.oven3Err}</p>
                        </div>
                        <div  >
                            <label className="block mb-2 text-sm text-black dark:text-black">tdate </label>
                            <input type="date" name='tdate' value={InputDate(meterData.tdate)} onChange={changeHandler}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <p className='font-mono text-red-700' >{meterDataErr.tdateErr}</p>
                        </div>
                    


                        <div className="flex items-center pt-4">
                            <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={meterData.isActive} name='isActive' className="w-4 h-4 " />
                            <label  className="ml-2 text-md font-medium text-black  ">Is Active</label>
                        </div>
                        <div></div>
                        <div></div>

                        <button type='submit' className="flex w-24 bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                            <span> Submit </span>
                        </button>

                        

                    </form>
             </Modal>
    </div>
  )
}

export default AddDeviceMeter