import { useRef, useState } from 'react';
import Map, { Marker } from 'react-map-gl';

// Styling
import './mapbox-basic.scss';


const MapboxBasic = () => {
  const [lat, setLat] = useState(51.087101);
  const [lng, setLng] = useState(3.675510);

  const mapRef = useRef(null);

  const handleOnLoad = () => {
    mapRef.current.on('move' , () => {
      setLat(mapRef.current.getCenter().lat.toFixed(4));
      setLng(mapRef.current.getCenter().lng.toFixed(4));
    });
  }

  return (
    <div className={`mapbox`}>
      <div className={`mapbox__info`}>Longitude: {lng}, latitude: {lat}</div>
      <Map
        ref={mapRef}
        onLoad={handleOnLoad}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        <Marker longitude={lng} latitude={lat} anchor="center" >
          <img src="./logo512.png" width={32} heigh={32} />
        </Marker>
      </Map>

    </div>
  )
};

export default MapboxBasic;