import { IconButton, styled, TextField } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { HBox } from '@simosol/boxes';

interface EstateInformationItemProps {
   label: string
   value: string | number
}

const InputWrapperStyle = styled('div')(({theme}) => ({
   background: theme.palette.action.hover,
   width: '100%'
}));

const ButtontWrapperStyle = styled('div')(({ theme }) => ({
   padding: theme.spacing(0,2)
}));

const CssTextField = styled(TextField)(({ theme }) => ({
   '& label': {
      fontWeight: 'normal',
      fontSize: theme.spacing(2),
   }, '& .MuiInputBase-input': {
      fontWeight: 'normal',
      fontSize: theme.spacing(2),
   }, 
   
}));

const EstateInformationItem: React.FC<EstateInformationItemProps> = (props) => {
   const {
      label,
      value
   } = props
   return (
      <HBox>
         <InputWrapperStyle>
            <CssTextField
               fullWidth
               label={label}
               defaultValue={value}
            />
         </InputWrapperStyle>
         <ButtontWrapperStyle>
            <IconButton size='small'>
               <EditIcon fontSize='inherit' />
            </IconButton>
        </ButtontWrapperStyle>
      </HBox>
   )
}

export default EstateInformationItem;