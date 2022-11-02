import React from 'react';
import AdminTools from 'views/pages/adminTools/adminTools';
import MyForest from 'views/pages/myForest/myForest';
import MapPage from 'views/pages/map/map'
import { router } from 'service/routs/pages';
import Stand from '../../pages/stand/stand';
import EstatePage from '../../pages/estate/estate';
import CreateEstate from '../../pages/createEstate/createEstate';

const PagesComponent: React.FC = () => {
   const { page } = router;

   return (
      <>
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
      </>
   )
}

export default PagesComponent;