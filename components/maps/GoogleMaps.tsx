'use client'
import React, { useCallback, useMemo, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const DesktopContainerStyle = {
  width: '650px',
  height: '450px',
};
const MobileContainerStyle = {
  width: '350px',
  height: '250px',
};

const center = {
  lat: 50.745909,
  lng: 4.505145
};
// const center = useMemo(() => ({
//   lat: 50.7459,
//   lng: 4.505416
// }), []);


function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB7Lzy2xL0MDsxlnMU9oXB0tat7M7DJSq0"
  })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map: any) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map: any) {
      setMap(null)
    }, [])

  return isLoaded ? (<>
    <div className='sm:hidden flex'>

      <GoogleMap
        mapContainerStyle={MobileContainerStyle}
        center={center}
        zoom={20}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
    <div className='sm:flex hidden'>

      <GoogleMap
        mapContainerStyle={DesktopContainerStyle}
        center={center}
        zoom={20}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
    
  </>
  ) : <></>
}

export default React.memo(GoogleMaps)