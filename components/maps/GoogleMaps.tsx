'use client'
import React, { useCallback, useMemo, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '650px',
  height: '450px',
};

const center = {
  lat: 50.7459,
  lng: 4.505416
};
// const center = useMemo(() => ({
//   lat: 50.7459,
//   lng: 4.505416
// }), []);


function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAnrzJEyo8bpuo_yB-BaM8YQXkdnS2bGK0"
  })

//   const [map, setMap] = useState(null)

//   const onLoad = useCallback(function callback(map: any) {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = useCallback(function callback(map: any) {
//     setMap(null)
//   }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
      >
        <Marker position={center}/>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMaps)