import React from 'react';

import {
   Accordion,
   AccordionSummary,
   Typography,
   IconButton,
   styled,
   Snackbar,
   Tooltip
} from '@mui/material';
import { Box } from '@mui/system';
import { HBox } from '@simosol/boxes';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ForestIcon from '@mui/icons-material/Forest';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import { observer } from 'mobx-react-lite';
import { Iestate } from 'types';
import { router } from 'service/routs/pages';

import StandsList from '../standsList/standsList';
import Alert from '../alert/alert';
import PopUp from '../popUp/popUp';

const WrapperStyle = styled('div')(({ theme }) => ({
   margin: theme.spacing(4)
}));

const MainContentStyle = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
   color: theme.palette.primary.main,
   margin: theme.spacing(3)
}));

const ButtonStyle = styled('div')(({ theme }) => ({
   margin: theme.spacing(1),
   color: theme.palette.text.primary
}));

const IconButtonStyle = styled(IconButton)(({theme}) => ({
   height: theme.spacing(3),
   '&:hover': {
      backgroundColor: 'inherit',
   },
}));

interface EstatesListProps {
   estates: Iestate[]
}

const EstatesList: React.FC<EstatesListProps> = observer((props) => {
   const {
      estates
   } = props;

   const [openPopup, setOpenPopup] = React.useState(false);
   const [openAlert, setOpenAlert] = React.useState(false);

   const theme = useTheme();
   const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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
         {estates.map(({ id, code, area, stands }: Iestate) =>
            <WrapperStyle key={id}>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panela-content"
                     id="panela-header"
                  >
                     <MainContentStyle >
                        <HBox>
                           <HBox>
                              <IconWrapperStyle>
                                 <ForestIcon sx={{ marginRight: '30px' }} />
                              </IconWrapperStyle>
                           </HBox>
                           <Box>
                              <Box>
                                 <ButtonStyle
                                    onClick={() => { router.page = { p: 'estate', p1: id } }}
                                 >
                                    <Typography>{code}</Typography>
                                 </ButtonStyle>
                              </Box>
                              <HBox>
                                 <Typography sx={{ marginRight: '40px' }}>
                                    {stands.length} stands
                                 </Typography>
                                 <Typography>{area} ha</Typography>
                              </HBox>
                           </Box>
                        </HBox>
                        <HBox>
                           <Tooltip title='Add new stand'>
                              <IconButtonStyle
                                 size='small'
                                 onClick={() => { router.page = { p: 'createStand' } }}
                              >
                                 <AddCircleOutlineRoundedIcon fontSize='inherit' />
                              </IconButtonStyle>
                           </Tooltip>
                           <Tooltip title="Delete">
                           <IconButtonStyle size='small'
                              onClick={(e) => {
                                 e.stopPropagation()
                                 handleClickOpen()
                              }
                              }
                           >
                              <DeleteForeverOutlinedIcon fontSize='inherit' />
                              </IconButtonStyle>
                           </Tooltip>
                           <PopUp
                              fullScreen={fullScreen}
                              openPopup={openPopup}
                              handleClosePopup={handleClosePopup}
                              handleClickAlert={handleClickAlert}
                           />
                        </HBox>
                     </MainContentStyle>
                  </AccordionSummary>
                  <StandsList stands={stands} />
               </Accordion>
            </WrapperStyle>
         )}
         <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
            <Alert severity="success">
               Estate was successfully deleted
            </Alert>
         </Snackbar>
      </>
   )
})

export default EstatesList;