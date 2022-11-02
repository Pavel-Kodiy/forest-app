import React from 'react';

import { Box, styled } from '@mui/system';
import "mapbox-gl/dist/mapbox-gl.css";
import CloseIcon from '@mui/icons-material/Close';

import Map, {
   NavigationControl,
   FullscreenControl,
} from "react-map-gl";

import { mapAccessToken } from 'helpers/mapAccessToken';
import { router } from 'service/routs/pages';
import { IconButton } from '@mui/material';

const ButtonStyle = styled(IconButton)(() => ({
   position: 'absolute',
   top: '0px',
   right: '0px'
}));

const StandMap: React.FC = () => {
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
            <ButtonStyle
               onClick={() => { router.page = { p: 'myForest'} }}
            >
               <CloseIcon />
            </ButtonStyle>
            <FullscreenControl position="top-left" />
         </Map>
      </Box>
   )
}

export default StandMap;