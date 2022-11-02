import React from 'react';
import {
   styled,
   Typography
} from '@mui/material';
import { HBox, VBox } from '@simosol/boxes';
import { Box } from '@mui/system';

import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
   NavigationControl,
   FullscreenControl,
   GeolocateControl,
} from "react-map-gl";

import { mapAccessToken } from 'helpers/mapAccessToken';
import { app } from 'models/appModel';
import { router } from 'service/routs/pages';

import EstateInformationItem from 'views/components/estateInformationItem/estateInformationItem';
import StandsList from 'views/components/standsList/standsList';

const WrapperStyle = styled('div')(() => ({
   width: "100%",
   minHeight: '100vh',
}));

const HeaderStyle = styled('div')(({ theme }) => ({
   margin: theme.spacing(2)
}));

const MainContantStyle = styled('div')(() => ({
   width: '40%',
}));

const MarginStyle = styled('div')(({ theme }) => ({
   margin: theme.spacing(2)
}));

const EstatePage: React.FC = () => {
   const hashId = router.getHash(router.page).split('/')[1];
   const currentEstate = app.estates.estates.filter((estate) => {
      if (estate.id === hashId) {
         return estate
      }
   })[0];

   console.log(currentEstate)
  
   return (
      <WrapperStyle>
         <HeaderStyle>
            <Typography
               fontSize={32}
            >
               Estate {currentEstate.code}
            </Typography>
         </HeaderStyle>
         <MarginStyle>
            <HBox>
               <MainContantStyle>
                  <VBox gap={16}>
                     <EstateInformationItem
                        label={'CODE'}
                        value={currentEstate.code}
                     />
                     <EstateInformationItem
                        label={'NAME'}
                        value={currentEstate.name}
                     />
                     <EstateInformationItem
                        label={'MUNICIPALITY'}
                        value={currentEstate.municipality}
                     />
                     <EstateInformationItem
                        label={'AREA'}
                        value={currentEstate.area}
                     />
                     <EstateInformationItem
                        label={'CERTIFICATION'}
                        value={currentEstate.certification}
                     />
                     <EstateInformationItem
                        label={'CLIENT NAME'}
                        value={currentEstate.clientName}
                     />
                  </VBox>
               </MainContantStyle>
               <Box component='div'
                  sx={{
                     width: "60%",
                     minHeight: '100%'
                  }}
               >
                  <Map
                     mapboxAccessToken={mapAccessToken}
                     style={{
                        width: "100%",
                        minHeight: "100%",
                     }}
                     mapStyle="mapbox://styles/mapbox/streets-v9"
                  >
                     <NavigationControl position="bottom-right" />
                     <FullscreenControl />
                     <GeolocateControl />
                  </Map>
               </Box>
            </HBox>
         </MarginStyle>
         <StandsList stands={currentEstate.stands} />
      </WrapperStyle>
   )
}

export default EstatePage;