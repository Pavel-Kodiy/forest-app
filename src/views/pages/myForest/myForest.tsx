import React from 'react';

import { styled, Typography } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

import EstatesList from 'views/components/estatesList/estatesList';
import { observer } from 'mobx-react-lite';
import { app } from 'models/appModel';
import { router } from 'service/routs/pages';

const WrapperStyle = styled('div')(() => ({
   width: "100%",
   minHeight: '100vh'
}));

const ContentStyle = styled('div')(({theme}) => ({
   margin: theme.spacing(16, 4, 8, 4)
}));

const ButtonStyle = styled('button')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   width: theme.spacing(28),
   textDecoration: 'underline',
   color: theme.palette.primary.main,
   fontWeight: 900,
   fontSize: theme.spacing(4),
   background: 'inherit',
   border: 'none',
   cursor: 'pointer',

   '&:hover': {
      background: theme.palette.action.hover,
   }
}));

const MyForest: React.FC = observer(() => {
   return (
      <WrapperStyle>
         <ContentStyle>
            <ButtonStyle
               onClick={() => { router.page = { p: 'createEstate' } }}
            >
               <AddCircleOutlineRoundedIcon />
               <Typography>Create estate</Typography>
            </ButtonStyle>
         </ContentStyle>
         <EstatesList estates={app.estates.estates} />
      </WrapperStyle >
   )
})

export default MyForest;