import { green, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   typography: {
      fontFamily: [
         'Inter',
         'Roboto'
      ].join(','),
      fontSize: 20,
      body1: {
         fontWeight: 900
      },
      body2: {
         fontWeight: 400
      }
   },
   palette: {
      primary: {
         main: green[700],
         light: grey[50]
      },
      secondary: {
         main: green[400],
         light: green[200]
      }
   }
})

export default theme;
