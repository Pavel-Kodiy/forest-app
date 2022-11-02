import React from 'react';
import '@simosol/boxes/lib/boxes.css';
import { observer } from 'mobx-react-lite';
import { HBox } from '@simosol/boxes';
import NavBar from 'views/components/navBar/navBar';
import AdminTools from 'views/pages/adminTools/adminTools';
import MyForest from 'views/pages/myForest/myForest';
import MapPage from 'views/pages/map/map'
import { router } from 'service/routs/pages';
import Stand from './pages/stand/stand';
import EstatePage from './pages/estate/estate';
import CreateEstate from './pages/createEstate/createEstate';
import CreateStand from './pages/createStand/createStand';
import StandMap from './pages/standMap/standMap';

const App: React.FC = observer(() => {
   const { page } = router;

   return (
      <HBox>
         <NavBar />
         {(page.p === '' || page.p === 'adminTools') && (
            <AdminTools />
         )}
         {(page.p === 'myForest') && (
            <MyForest />
         )}
         {(page.p === 'map') && (
            <MapPage />
         )}
         {(page.p === 'stand') && (
            <Stand />
         )}
         {(page.p === 'estate') && (
            <EstatePage />
         )}
         {(page.p === 'createEstate') && (
            <CreateEstate />
         )}
         {(page.p === 'createStand') && (
            <CreateStand />
         )}
         {(page.p === 'standMap') && (
            <StandMap />
         )}
      </HBox>
   )
});

export default App;