    import React, { useState } from 'react'
    import { AiFillEdit } from 'react-icons/ai';
    import { RxCross1 } from "react-icons/rx";
    import { useMutation, useQuery } from 'react-query';
    import { createAsset, updateAsset } from '../../../utills/api/Asset';
    import { assetTypeList } from '../../../utills/api/AssetType';
    import { customerSiteList } from '../../../utills/api/CustomerSite';
    import { toast } from 'react-toastify';
    import { Modal } from '@mantine/core';


    const AddAsset = ({modalName,isActive, assetFetch,assetName,assetId,customerSiteId,assetTypeId, assetDescription,assetOem,assetTag,assetSerial,assetQuantity,assetModel,type,assetPrice,assetMake}) => {

        const [ isOpen, setIsOpen] = useState(false)

        const [ assetDrop, setAssetDrop ] = useState([])
        const [ customerSiteDrop, setCustomerSiteDrop ] = useState([])

        const [assetDropFilter, setAssetDropFilter ] = useState({
            "sortOrder": "",
            "sortDirection": "",
            "filterby": "",
            "pageNo": 1,
            "pageSize": 1000
        })

        const [ customerSiteFilter, setCustomerSiteFilter ] = useState({
            "sortOrder": "",
            "sortDirection": "",
            "filterby": "",
            "pageNo": 1,
            "pageSize": 1000
        })
        
        const { } = useQuery('assetTypeList',assetTypeList.bind(this,assetDropFilter),{ onSuccess : (x) =>setAssetDrop(x?.items)} )
        
        const { } = useQuery('customerSiteList',customerSiteList.bind(this,customerSiteFilter),{ onSuccess : (x) =>setCustomerSiteDrop(x?.items)} )
        
        const { mutateAsync : assetDetails } = useMutation('createAsset',createAsset)
        const { mutateAsync : updatedAssetsDetails } = useMutation('updateAsset',updateAsset)


        const [ asset, setAsset ] = useState({
            
            isActive : isActive ? isActive : true,
            name: assetName ? assetName : "",
            description: assetDescription ? assetDescription : "" ,
            oem: assetOem ? assetOem : "",
            tag: assetTag ? assetTag : "",
            serialNumber: assetSerial ? assetSerial : "",
            quantity: assetQuantity ? assetQuantity : "",
            model: assetModel ? assetModel : "",
            make: assetMake ? assetMake : "",
            assetTypeId: assetTypeId ? assetTypeId : "",
            // price : assetPrice ? assetPrice : "",
            customerSiteId: customerSiteId ? customerSiteId : "",
        })

        const [ assetErr, setAssetErr ] = useState({
            nameErr :  "",
            descriptionErr : "" ,
            oemErr :  "",
            tagErr :  "",
            serialNumberErr :  "",
            quantityErr :  "",
            modelErr : "",
            makeErr :  "",
            assetTypeIdErr:  "",
            // price : assetPrice ? assetPrice : "",
            customerSiteIdErr:  "",
            
        })

        const resetState = () =>{
            setAsset({
                isActive : true,
                name:  "",
                description:  "" ,
                oem:  "",
                tag:  "",
                serialNumber:  "",
                quantity:  "",
                model:  "",
                make: "",
                assetTypeId:  "",
                // price : assetPrice ? assetPrice : "",
                customerSiteId:  "",
            })
            setAssetErr({
                nameErr : "",
                descriptionErr :"" ,
                oemErr : "",
                tagErr : "",
                serialNumberErr : "",
                quantityErr: "",
                modelErr : "",
                makeErr : "",
                assetTypeIdErr : "",
                // priceErr : "",
                cutomerSiteErr : "",
                customerSiteIdErr: "",
            })


        }

        const resetErr = () =>{
            setAssetErr
        }

        const changeHandler = (e) =>{
            setAsset( old => ({ ...old, [e.target.name] : e.target.value }))
            setAssetErr( old => ({...old,[`${e.target.name}Err`] : "" }) )
        }

        const activeHandler = (e) =>{
            setAsset( old => ({...old,[e.target.name] : e.target.checked }))
        }

        const submitHandler = async (e) =>{
            e.preventDefault()
            const customerId = parseInt(localStorage.getItem('customerId'), 10) 


            const { name, description,oem,tag,serialNumber,quantity,model,assetType,price,make, assetTypeId, customerSiteId } = asset;
            const newAsset = {...asset,customerId}
            const updatedData = {...asset,id:assetId,customerId}
            const newErr = {
                nameErr : "",
                descriptionErr :"" ,
                oemErr : "",
                tagErr : "",
                serialNumberErr : "",
                quantityErr: "",
                modelErr : "",
                makeErr : "",
                assetTypeIdErr : "",
                cutomerSiteErr : "",
                customerSiteIdErr: "",
            }   
            
            let isValid = true;

            if(!name){
                newErr.nameErr = "please enter a valid name",
                isValid = false;
            }
            if(!description){
                newErr.descriptionErr = "please enter valid description",
                isValid = false;
            }
            if(!oem){
                newErr.oemErr = "please enter a valid oem",
                isValid = false;
            }
            if(!tag){
                newErr.tagErr = "please enter a valid tag",
                isValid = false;
            }
            if(!make){
                newErr.makeErr = "please enter a valid make",
                isValid = false;
            }
            if(!serialNumber){
                newErr.serialNumberErr = "please enter a valid serialNumber",
                isValid = false;
            }
            if(!quantity){
                newErr.quantityErr = "please enter a valid quantity",
                isValid = false;
            }
            if(!model){
                newErr.modelErr = "please enter a valid model",
                isValid = false;
            }
            if(!assetTypeId){
                newErr.assetTypeIdErr = "please enter a valid assetType",
                isValid = false;
            }
            if(!customerSiteId){
                newErr.customerSiteIdErr = "please select",
                isValid = false
            }
            if(!isValid){
                setAssetErr(newErr)
                return        
            }
            modalName === 'add' ?
                await assetDetails(newAsset)
                .then((res)=>{
                    setIsOpen(false)
                    assetFetch()
                    toast.success("added successfully")
                    resetState()
                })
                .catch((err)=>{
                    console.log(err)
                    toast.error(err?.response?.data)

                    // var colonIndex = err?.response?.data.indexOf(':');
                    // var errName = err?.response?.data.substring(0,colonIndex).trim();
                    // const after = err?.response?.data.slice(colonIndex+1).trim()

                    // if(errName == 'Asset Name'){
                    //     setAssetErr( old => ({...old,nameErr :after}))
                    // }else if(errName == 'Asset Serial'){
                    //     setAssetErr( old => ({...old,serialNumberErr :after}))
                    // }
                })
            :
                await updatedAssetsDetails(updatedData)
                .then((res)=>{
                    setIsOpen(false)
                    assetFetch()
                    toast.success("updated successfully")
                    if(errName == 'Asset Name'){
                        setAssetErr( old => ({...old,nameErr : err?.response?.data}))
                    }else if(errName == 'Asset Serial'){
                        setAssetErr( old => ({...old,serialNumberErr : err?.response?.data}))
                    }
                })
                .catch((err)=>{
                    console.log(err)
                        toast.error(err?.response?.data)

                    // var colonIndex = err?.response?.data.indexOf(':');
                    // var errName = err?.response?.data.substring(0,colonIndex).trim();
                    // const after = err?.response?.data.slice(colonIndex+1).trim()

                    // if(errName == 'Asset Name'){
                    //     setAssetErr( old => ({...old,nameErr :after}))
                    // }else if(errName == 'Asset Serial'){
                    //     setAssetErr( old => ({...old,serialNumberErr :after}))
                    // }
                })

        }


    return (
        <div>
            {
                modalName === 'add' ? 

                <button onClick={()=>setIsOpen(true)}  className="flex bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                    <span> Add Asset </span>
                </button>
                :
                <AiFillEdit onClick={()=>setIsOpen(true)} className='cursor-pointer'  />

            }
        
        <Modal
                    centered
                    opened={isOpen}
                    onClose={() => {setIsOpen(false);resetState()}}
                    title="Asset Details"
                    size='lg'
                    closeOnClickOutside={false}
                    transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
                >

                    <form onSubmit={submitHandler} className="    px-4 py-6  "  >
                            {/* <div  >
                                <label className="block mb-2 text-sm text-gray-600 dark:text-black">Asset Type</label>
                                <input type="text" name='assetType' onChange={changeHandler} value={asset.assetType}   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{assetErr.assetTypeErr}</p>
                            </div> */}
                            <div className='relative w-full  grid md:grid-cols-2 gap-2'>
                            <div  className='' >
                                <label className="block mb-2 text-sm text-black dark:text-white">Asset Type</label>
                                <select defaultValue={asset.assetTypeId} name='assetTypeId'  onChange={changeHandler}    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                    <option  >Select</option>
                                    {
                                        assetDrop?.map((x,ind)=>(
                                            <option  value={x.id} >{x.name}</option>
                                        ))
                                    }
                                </select>
                                <p className='font-mono text-red-700' >{assetErr.assetTypeIdErr}</p>

                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Tag</label>
                                <input type="text" name='tag' onChange={changeHandler} value={asset.tag} placeholder="Tag" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{assetErr.tagErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Name</label>
                                <input type="text" name='name' onChange={changeHandler} value={asset.name} placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{assetErr.nameErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Description </label>
                                <input type="text" name='description' onChange={changeHandler}  value={asset.description} placeholder="Description" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{assetErr.descriptionErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">OEM </label>
                                <input type="text" name='oem' onChange={changeHandler} value={asset.oem}  placeholder="OEM" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{assetErr.oemErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Make </label>
                                <input type="text" name='make' onChange={changeHandler} value={asset.make}  placeholder="Make" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{assetErr.makeErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Model </label>
                                <input type="text" name='model' onChange={changeHandler} value={asset.model}  placeholder="Model" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{assetErr.modelErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Serial No </label>
                                <input type="number" name='serialNumber' onChange={changeHandler}  value={asset.serialNumber}  placeholder="Serial no" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{assetErr.serialNumberErr}</p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Quantity </label>
                                <input type="number" name='quantity' onChange={changeHandler} value={asset.quantity}  placeholder="Quantity" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{assetErr.quantityErr}</p>
                            </div>

                            {/* <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Price </label>
                                <input type="text" name='price' onChange={changeHandler} value={asset.price}  placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' >{assetErr.priceErr}</p>
                            </div> */}

                            <div  className='' >
                                <label className="block mb-2 text-sm text-black dark:text-white">Customer Site</label>
                                <select defaultValue={asset.customerSiteId} name='customerSiteId'  onChange={changeHandler} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" >
                                    <option disabled selected value='' >Select</option>
                                    {
                                        customerSiteDrop?.map((x,ind)=>(
                                            <option  value={x.id} >{x.name}</option>
                                        ))
                                    }
                                </select>
                                <p className='font-mono text-red-700' >{assetErr.customerSiteIdErr}</p>
                            </div>
                            {/* <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Customer Site </label>
                                <input type="text" name='cutomerSite'   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' ></p>
                            </div>
                            <div  >
                                <label className="block mb-2 text-sm text-black dark:text-white">Aseet Capacity </label>
                                <input type="text" name='text'   placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-black rounded-md dark:placeholder-gray-600 dark:bg-white dark:text-black dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                <p className='font-mono text-red-700' ></p>
                            </div> */}
                            <div className="flex items-center pt-4">
                                <input   id="disabled-checked-checkbox" type="checkbox" onChange={activeHandler} checked={asset.isActive} name='isActive' className="w-4 h-4 " />
                                <label  className="ml-2 text-md font-medium text-black dark:text-white  ">Is Active</label>
                            </div>
                            <div></div>
                            </div>
                            <div className='w-full flex justify-end items-end gap-2'>
                                <button  type='button' onClick={()=>{setIsOpen(false);resetState()}} className="flex w-24 bg-red-500 items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-red-400  ">
                                    <span> Cancel </span>
                                </button>
                                <button type='submit' className="flex w-24 bg-[#4884C0] items-center justify-between   px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-md hover:bg-blue-400 focus:outline-none focus:ring mt-2 focus:ring-blue-300 focus:ring-opacity-50">
                                    <span> Submit </span>
                                </button>
                            </div>

                        </form>
                    </Modal>
        </div>
    )
    }

    export default AddAsset