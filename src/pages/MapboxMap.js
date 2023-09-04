import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

function MapboxMap() {
  const viewport = {
    width: '100%',
    height: '400px',
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 12,
  };

  return (
    <ReactMapGL {...viewport} mapboxApiAccessToken="pk.eyJ1IjoibmFyc2luZy02NjYiLCJhIjoiY2xtM2o5aDA4NDFhaTNkcHZlODJwMHJjaSJ9.iIEkey6vp_BOt81GquDO_g">
      <Marker latitude={37.7749} longitude={-122.4194}>
        <div>Marker</div>
      </Marker>
    </ReactMapGL>
  );
}

export default MapboxMap;
