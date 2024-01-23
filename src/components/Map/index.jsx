import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const Map = () => {



   
  
  const maps = async() =>{
    const url = await axios.post('http://bbk.syncotics.com/Deshboard/GetMapDetials/')
    return data?.url
  }
const { data : mapData } = useQuery('maps', maps)

  const [selectedLocation, setSelectedLocation] = useState([
    {
      lat: 28.6742464, 
      lng: 77.4398201, 
    },
    {
      lat: 12.971599, 
      lng: 77.594566, 
    },
    {
          lat: 28.632430, 
          lng: 77.218790, 
    },
   
  ]);


  const REACT_APP_GOOGLE_MAPS_KEY = 'AIzaSyCbDwPN59e4wcuNqJEbCd3yTq2tYOvP3JU'

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Maps";


    

  return(
    <div className=' flex flex-col  gap-2 py-2 px-2 justify-start items-start mt-1 h-full ' >
          <h4 className="dark:text-white  text-[#4884C0] pl-4 pb-2  text-xl font-medium">Cp site on Map</h4>
          <div  className='w-full p-2 dark:text-white dark:bg-[#263238] bg-white text-black rounded-lg' >
            <GoogleMap
              mapContainerStyle={{
                height: "500px",
              }}
              center={selectedLocation[0]}
              zoom={5}
              onLoad={onMapLoad}
            >
              {
              selectedLocation?.map((location, index) => (
                <MarkerF
                  position={location}
                  icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
                />
              ))
              }
            </GoogleMap>
          </div>
    </div>
  );
};

export default Map;


