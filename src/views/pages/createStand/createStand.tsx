import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   styled,
   TextField,
   Typography
} from '@mui/material';

import { VBox } from '@simosol/boxes';

const WrapperStyle = styled('div')(({ theme }) => ({
   width: "100%",
   margin: theme.spacing(2)
}));

const TextFieldStyle = styled(TextField)(({ theme }) => ({
   marginTop: theme.spacing(2),
   '& .MuiInputBase-input': {
      fontWeight: 'normal'
   }
}));

const CreateStand: React.FC = () => {
   return (
      <WrapperStyle>
         <VBox gap={16}>
            <Accordion defaultExpanded>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1c-content"
                  id="panel1c-header"
               >
                  <Typography>
                     General Information
                  </Typography>
               </AccordionSummary>
               <AccordionDetails>
                  <VBox gap={8}>
                     <TextFieldStyle fullWidth label="Stand number" variant="filled" />
                     <TextFieldStyle fullWidth label="Parcel number" variant="filled" />
                     <TextFieldStyle fullWidth label="Main group" variant="filled" />
                     <TextFieldStyle fullWidth label="Development class" variant="filled" />
                     <TextFieldStyle fullWidth label="Accssibility classifer" variant="filled" />
                     <TextFieldStyle fullWidth label="Fertility classifer" variant="filled" />
                     <TextFieldStyle fullWidth label="Soil type" variant="filled" />
                     <TextFieldStyle fullWidth label="Stand quality" variant="filled" />
                     <TextFieldStyle fullWidth label="Drainage state" variant="filled" />
                     <TextFieldStyle fullWidth label="Ditching year" variant="filled" />
                     <TextFieldStyle fullWidth label="Public text" variant="filled" />
                  </VBox>
               </AccordionDetails>
            </Accordion>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1c-content"
                  id="panel1c-header"
               >
                  <Typography>
                     Tree Data
                  </Typography>
               </AccordionSummary>
            </Accordion>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1c-content"
                  id="panel1c-header"
               >
                  <Typography>
                     Restriction
                  </Typography>
               </AccordionSummary>
            </Accordion>
         </VBox>
      </WrapperStyle>
   )
}

export default CreateStand;