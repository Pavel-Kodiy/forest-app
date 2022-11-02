import React from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { styled } from '@mui/material';

const AlertStyle = styled(MuiAlert)(({theme}) => ({
   fontSize: theme.spacing(2),
}));

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
   props,
   ref,
) {
   return <AlertStyle elevation={6} ref={ref} variant="filled" {...props} />;
});

export default Alert;