import React from 'react';

import { Box } from '@mui/system';
import "mapbox-gl/dist/mapbox-gl.css";

import Map, {
   NavigationControl,
   FullscreenControl,
   GeolocateControl,
} from "react-map-gl";

import { mapAccessToken } from 'helpers/mapAccessToken';

const MapPage: React.FC = () => {

   return (
      <Box component='div'
         sx={{
            width: "100%",
            minHeight: '100vh'
         }}
      >
         <Map
            mapboxAccessToken={mapAccessToken}
            style={{
               width: "100%",
               height: "100%",
            }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
         >
            <NavigationControl position="bottom-right" />
            <FullscreenControl />
            <GeolocateControl />
         </Map>
      </Box>
   )
}

export default MapPage;