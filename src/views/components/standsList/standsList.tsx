import React from 'react';
import {
   AccordionDetails,
   IconButton,
   styled,
   Typography,
   Popover,
   Snackbar
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { HBox } from '@simosol/boxes';

import { observer } from "mobx-react"
import { Istand } from 'types';
import { router } from 'service/routs/pages';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import MapIcon from '@mui/icons-material/Map';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import Alert from '../alert/alert';
import PopUp from '../popUp/popUp';

const StandsStyle = styled('div')(({ theme }) => ({
   display: "flex",
   justifyContent: "space-between",
   alignItems: "center",
   height: theme.spacing(6),
   backgroundColor: theme.palette.action.disabledBackground,
   borderRadius: theme.spacing(2),
}));

const ButtonStyle = styled('div')(({ theme }) => ({
   textDecoration: 'underline',
   cursor: 'pointer',
   marginLeft: theme.spacing(2)
}));

interface StandsListProps {
   stands: Istand[]
}

const StandsList: React.FC<StandsListProps> = observer((props) => {
   const {
      stands
   } = props;

   const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
   const [openPopup, setOpenPopup] = React.useState(false);
   const [openAlert, setOpenAlert] = React.useState(false);

   const theme = useTheme();
   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
   const open = Boolean(anchorEl);
   const PopoverId = open ? 'simple-popover' : undefined;

   const handleClickPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClosePopover = () => {
      setAnchorEl(null);
   };

   const handleClickOpen = () => {
      setOpenPopup(true);
   };

   const handleClosePopup = () => {
      setOpenPopup(false);
   };

   const handleClickAlert = () => {
      setOpenAlert(true);
   };

   const handleCloseAlert = (_event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
         return;
      }

      setOpenAlert(false);
   };

   return (
      <>
         {
            stands.map(({ id, standNumber, area, mainGroup }) =>
               <AccordionDetails key={id}>
                  <StandsStyle>
                     <ButtonStyle
                        onClick={() => { router.page = { p: 'stand', p1: id } }}>
                        <Typography>{standNumber}</Typography>
                     </ButtonStyle>
                     <Typography>{area} ha</Typography>
                     <Typography>{mainGroup}</Typography>
                     <IconButton
                        onClick={handleClickPopover}
                     >
                        <MoreVertIcon />
                     </IconButton>
                     <Popover
                        id={PopoverId}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClosePopover}
                        anchorOrigin={{
                           vertical: 'bottom',
                           horizontal: 'left',
                        }}
                     >
                        <HBox>
                           <IconButton
                              size='small'
                              onClick={() => { router.page = { p: 'stand', p1: id } }}
                           >
                              <EditIcon fontSize='inherit' />
                           </IconButton>
                           <IconButton
                              size='small'
                              onClick={() => { router.page = { p: 'standMap', p1: id } }}
                           >
                              <MapIcon fontSize='inherit' />
                           </IconButton>
                           <IconButton
                              size='small'
                              onClick={handleClickOpen}
                           >
                              <DeleteForeverOutlinedIcon fontSize='inherit' />
                           </IconButton>
                        </HBox>
                     </Popover>
                     <PopUp
                        fullScreen={fullScreen }
                        openPopup={openPopup}
                        handleClosePopup={handleClosePopup}
                        handleClickAlert={handleClickAlert}
                     />
                  </StandsStyle>
               </AccordionDetails>
            )
         }
         <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
            <Alert severity="success">
               Stand was successfully deleted
            </Alert>
         </Snackbar>
      </>
   )
});

export default StandsList;