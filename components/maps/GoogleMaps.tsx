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
    googleMapsApiKey: ""
  })


  return isLoaded ? (<>
    <div className='sm:hidden flex'>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d519.7493902159407!2d4.505056212906446!3d50.745917484206636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3d7457f1aaad7%3A0x907bde277319d06d!2sLangeweg%20128%2C%203090%20Overijse%2C%20Belgium!5e0!3m2!1sen!2sfr!4v1738666957930!5m2!1sen!2sfr" width="600" height="450" loading="lazy" ></iframe>       </div>
    <div className='sm:flex hidden'>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d519.7493902159407!2d4.505056212906446!3d50.745917484206636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3d7457f1aaad7%3A0x907bde277319d06d!2sLangeweg%20128%2C%203090%20Overijse%2C%20Belgium!5e0!3m2!1sen!2sfr!4v1738666957930!5m2!1sen!2sfr" width="600" height="450" loading="lazy" ></iframe>       </div>
  </>
  ) : <></>
}

export default React.memo(GoogleMaps)