import React from 'react';

import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   IconButton,
   styled,
   Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { HBox } from '@simosol/boxes';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import StandInformationItem from 'views/components/standInformItem/StandInformationItem';

import Map, {
   NavigationControl,
   FullscreenControl,
   GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { mapAccessToken } from 'helpers/mapAccessToken';

import { app } from 'models/appModel';
import { router } from 'service/routs/pages';
import { Istand } from 'types';

const WrapperStyle = styled('div')(() => ({
   width: "100%",
   minHeight: '100vh'
}));

const HeaderStyle = styled('div')(({ theme }) => ({
   margin: theme.spacing(2)
}));

const MainContantStyle = styled('div')(() => ({
   width: '40%'
}));

const SummaryWrapper = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   alignItem: 'center',
   justifyContent: 'space-between'
}));

const Stand: React.FC = () => {
   const hashId = router.getHash(router.page).split('/')[1];

   const currentStand: Istand = {
      id: '',
      area: 0,
      standNumber: '',
      parcelNumber: '',
      mainGroup: '',
      subGroup: '',
      mainTree: '',
      devClass: '',
      accessibility: '',
      fertility: '',
      soilType: '',
      standQuality: '',
      drinageState: '',
   }

   for (const estate of app.estates.estates) {
      estate.stands.filter((stand) => {
         if (stand.id === hashId) {
            currentStand.id = stand.id
            currentStand.area = stand.area
            currentStand.standNumber = stand.standNumber
            currentStand.parcelNumber = stand.parcelNumber
            currentStand.mainGroup = stand.mainGroup
            currentStand.subGroup = stand.subGroup
            currentStand.mainTree = stand.mainTree
            currentStand.devClass = stand.devClass
            currentStand.accessibility = stand.accessibility
            currentStand.fertility = stand.fertility
            currentStand.soilType = stand.soilType
            currentStand.standQuality = stand.standQuality
            currentStand.drinageState = stand.drinageState
         }
      })
   }

   return (
      <WrapperStyle>
         <HeaderStyle>
            <Typography
               fontSize={32}
            >
               Stand {currentStand.standNumber}
            </Typography>
         </HeaderStyle>
         <HBox>
            <MainContantStyle>
               <Accordion defaultExpanded>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1c-content"
                     id="panel1c-header"
                     sx={{ height: '40px' }}
                  >
                     <Typography
                        fontSize={16}
                     >
                        General information
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: '0px' }}>
                     <StandInformationItem
                        description={'Stand number ext.'}
                        information={currentStand.standNumber}
                     />
                     <StandInformationItem
                        description={'Parcel number'}
                        information={currentStand.parcelNumber}
                     />
                     <StandInformationItem
                        description={'Main group'}
                        information={currentStand.mainGroup}
                     />
                     <StandInformationItem
                        description={'Sub group'}
                        information={currentStand.subGroup}
                     />
                     <StandInformationItem
                        description={'Main tree speices'}
                        information={currentStand.mainTree}
                     />
                     <StandInformationItem
                        description={'Development class'}
                        information={currentStand.devClass}
                     />
                     <StandInformationItem
                        description={'Accessibility classifier'}
                        information={currentStand.accessibility}
                     />
                     <StandInformationItem
                        description={'Fertility classifier'}
                        information={currentStand.fertility}
                     />
                     <StandInformationItem
                        description={'Soil type'}
                        information={currentStand.soilType}
                     />
                     <StandInformationItem
                        description={'Stand quality'}
                        information={currentStand.standQuality}
                     />
                     <StandInformationItem
                        description={'Drinage state'}
                        information={currentStand.drinageState}
                     />
                  </AccordionDetails>
               </Accordion>

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
         <Accordion>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1c-content"
               id="panel1c-header"
               sx={{ height: '40px' }}
            >
               <SummaryWrapper>
                  <Typography
                     fontSize={16}
                     sx={{ paddingTop: '5px' }}
                  >
                     Tree Data
                  </Typography>
                  <IconButton size='small'>
                     <EditOutlinedIcon fontSize="inherit" />
                  </IconButton>
               </SummaryWrapper>
            </AccordionSummary>
         </Accordion>
         <Accordion>
            <AccordionSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1c-content"
               id="panel1c-header"
               sx={{ height: '40px' }}
            >
               <SummaryWrapper>
                  <Typography
                     fontSize={16}
                     sx={{ paddingTop: '5px' }}
                  >
                     Restriction
                  </Typography>
                  <IconButton size='small'>
                     <EditOutlinedIcon fontSize="inherit" />
                  </IconButton>
               </SummaryWrapper>
            </AccordionSummary>
         </Accordion>
      </WrapperStyle>
   )
}

export default Stand;