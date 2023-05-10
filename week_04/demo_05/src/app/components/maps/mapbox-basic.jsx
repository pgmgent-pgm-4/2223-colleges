// Import extrnal modules
import { useRef, useState, useCallback } from "react";
import Map, { Marker, Layer } from 'react-map-gl';

// Import custom modules

// Styling
import './mapbox-basic.css';

// Constants

const parkLayer = {
  id: 'landuse_park',
  type: 'fill',
  source: 'mapbox',
  'source-layer': 'landuse',
  filter: ['==', 'class', 'park'],
  paint: {
    'fill-color': '#4E3FC8'
  }
};

const MapboxBasic = ({posts, className = ''}) => {
  const mapRef = useRef(null);

  const [lng, setLng] = useState(3.7174243);
  const [lat, setLat] = useState(51.0543422);
  const [zoom, setZoom] = useState(11.5);

  const handleOnMapLoad = useCallback(() => {
    mapRef.current.on('move', () => {
      setLng(mapRef.current.getCenter().lng.toFixed(4));
      setLat(mapRef.current.getCenter().lat.toFixed(4));
      setZoom(mapRef.current.getZoom().toFixed(2));
    });
  }, []);

  return (
    <div className={`${className} mapbox`}>
      <div className="map-info">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</div>
      <Map
        ref={mapRef}
        onLoad={handleOnMapLoad}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: zoom
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{width: '100%', height: '100%'}}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
         <Layer {...parkLayer} />
        <Marker longitude={lng} latitude={lat} anchor="center">
          <img src="./logo512.png" width={32} />
        </Marker>
      </Map>
    </div>
    
  )
};

export default MapboxBasic;