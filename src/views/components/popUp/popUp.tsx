import React from 'react';

import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   styled
} from "@mui/material";

const ButtonCancelStyle = styled(Button)(({ theme }) => ({
   width: theme.spacing(16),
   color: theme.palette.text.primary,
   fontWeight: '700',
   fontSize: theme.spacing(2),
   borderColor: theme.palette.action.disabled,
   textTransform: 'none'
}));

const ButtonDeleteStyle = styled(Button)(({ theme }) => ({
   width: theme.spacing(16),
   fontSize: theme.spacing(2),
   fontWeight: '700',
   background: theme.palette.error.main,
   color: theme.palette.primary.light,
   textTransform: 'none',
   '&:hover': {
      backgroundColor: theme.palette.error.main,
   },
}));

interface PopUpProps {
   fullScreen: boolean
   openPopup: boolean
   handleClosePopup: () => void
   handleClickAlert: () => void
}

const PopUp: React.FC<PopUpProps> = (props) => {
   const {
      fullScreen,
      openPopup,
      handleClosePopup,
      handleClickAlert
   } = props

   return (
      <Dialog
         fullScreen={fullScreen}
         open={openPopup}
         onClose={handleClosePopup}
         aria-labelledby="responsive-dialog-title"
      >
         <DialogContent>
            <DialogContentText>
               Do you want to delete stand?
            </DialogContentText>
         </DialogContent>
         <DialogActions>
            <ButtonCancelStyle
               variant="outlined"
               autoFocus
               onClick={(e) => {
                  e.stopPropagation()
                  handleClosePopup()
               }}
            >
               Cancel
            </ButtonCancelStyle>
            <ButtonDeleteStyle
               variant="outlined"
               onClick={(e) => {
                  e.stopPropagation()
                  handleClosePopup()
                  handleClickAlert()
               }}
               autoFocus
            >
               Delete
            </ButtonDeleteStyle>
         </DialogActions>
      </Dialog>
   )
}

export default PopUp;