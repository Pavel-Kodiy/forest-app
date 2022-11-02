import React from 'react';
import {
   Box,
   styled,
} from '@mui/material';
import { HBox, VBox } from '@simosol/boxes';
import EstateInformationItem from 'views/components/estateInformationItem/estateInformationItem';
import Button from '@mui/material/Button';
import {router} from '../../../service/routs/pages';

const WrapperStyle = styled('div')(({ theme }) => ({
   width: "100%",
   minHeight: '100vh',
   marginTop: theme.spacing(22),
   marginLeft: theme.spacing(7)
}));

const InformationWrapperStyle = styled('div')(() => ({
   width: '40%'
}));

const ButtonBlockWrapperStyle = styled('div')(({ theme }) => ({
   marginTop: theme.spacing(22),
   marginLeft: '40%'
}));

const ButtonCancelStyle = styled(Button)(({ theme }) => ({
   width: theme.spacing(16),
   color: theme.palette.primary.dark,
   fontSize: theme.spacing(2),
   textTransform: 'none',
}));

const ButtonCreateStyle = styled(Button)(({ theme }) => ({
   width: theme.spacing(16),
   fontSize: theme.spacing(2),
   textTransform: 'none',
}));

const CreateEstate: React.FC = () => {
   return (
      <WrapperStyle>
         <InformationWrapperStyle>
            <VBox gap={16}>
               <EstateInformationItem label={'CODE'} value={' '} />
               <EstateInformationItem label={'NAME'} value={' '} />
               <EstateInformationItem label={'MUNICIPALITY'} value={' '} />
               <EstateInformationItem label={'AREA'} value={' '} />
               <EstateInformationItem label={'CERTIFICATION'} value={' '} />
               <EstateInformationItem label={'CLIENT NAME'} value={' '} />
            </VBox>
         </InformationWrapperStyle>
         <ButtonBlockWrapperStyle>
            <HBox gap={64}>
               <Box>
                  <ButtonCancelStyle
                     variant="outlined"
                     color='inherit'
                     onClick={() => { router.page = { p: 'myForest' } }}
                  >
                     Cancel
                  </ButtonCancelStyle>
               </Box>
               <Box>
                  <ButtonCreateStyle variant="contained">Create</ButtonCreateStyle>
               </Box>
            </HBox>
         </ButtonBlockWrapperStyle>
      </WrapperStyle>
   )
}

export default CreateEstate;