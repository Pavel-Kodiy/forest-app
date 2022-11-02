import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import ForestIcon from '@mui/icons-material/Forest';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import {
   Typography,
   List,
   styled
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { router } from 'service/routs/pages';

const WrapperStyle = styled('div')(({ theme }) => ({
   fontSize: theme.typography.body1.fontSize,
   color: theme.palette.primary.dark,
   background: theme.palette.secondary.main,
   maxWidth: theme.spacing(44),
   minHeight: '100vh'
}));

const TitleStyle = styled('h1')(({ theme }) => ({
   textAlign: 'center',
   color: theme.palette.primary.dark,
   fontFamily: theme.typography.fontFamily,
   fontSize: theme.spacing(6),
   fontWeight: theme.typography.body1.fontWeight,
   padding: theme.spacing(5, 3),
   margin: theme.spacing(0)
}));

const ListItemStyle = styled('li')(({ theme }) => ({
   padding: theme.spacing(1, 0),
   color: theme.palette.primary.dark,
   fontWeight: theme.typography.body1.fontWeight,
   marginBottom: theme.spacing(1)
}));

const ButtonStyle = styled('button')(({ theme }) => ({
   width: '100%',
   height: theme.spacing(11),
   background: theme.palette.secondary.main,
   border: 'none',
   display: 'flex',
   alignItems: 'center',
   color: theme.palette.primary.dark,
   cursor: 'pointer',
   '&:hover': {
      background: theme.palette.secondary.light,
      color: theme.palette.secondary.main
   }
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
   margin: theme.spacing(4)
}));

const NavBar: React.FC = observer(() => {

   return (
      <WrapperStyle>
         <TitleStyle>FORESTAPP</TitleStyle>
         <List>
            <ListItemStyle>
               <ButtonStyle
                  onClick={() => {
                     router.page = { p: 'adminTools' };
                  }}
               >
                  <IconWrapperStyle>
                     <BuildIcon />
                  </IconWrapperStyle>
                  <Typography>Admin tools</Typography>
               </ButtonStyle>
            </ListItemStyle>

            <ListItemStyle>
               <ButtonStyle
                  onClick={() => { router.page = { p: 'myForest' } }}
               >
                  <IconWrapperStyle>
                     <ForestIcon />
                  </IconWrapperStyle>
                  <Typography>My forest</Typography>
               </ButtonStyle>
            </ListItemStyle>

            <ListItemStyle>
               <ButtonStyle
                  onClick={() => { router.page = { p: 'map' } }}
               >
                  <IconWrapperStyle>
                     <MapOutlinedIcon />
                  </IconWrapperStyle>
                  <Typography>Map</Typography>
               </ButtonStyle>
            </ListItemStyle>
         </List>
      </WrapperStyle>
   )
});

export default NavBar;