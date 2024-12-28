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



function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAnrzJEyo8bpuo_yB-BaM8YQXkdnS2bGK0"
  })


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