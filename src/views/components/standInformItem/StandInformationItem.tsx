import React from 'react';
import { Divider, IconButton, InputBase, styled, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { HBox } from '@simosol/boxes';

const DescriptionBoxStyle = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   width: '40%',
   background: theme.palette.action.hover,
   paddingLeft: theme.spacing(2)
}));

const TextFieldWrapperStyle = styled('div')(({theme}) => ({
   display: 'flex',
   alignItems: 'center',
   width: '60%',
   padding: theme.spacing(0,1)
}));

interface StandInformationItemProps {
   description: string
   information: string
}

const StandInformationItem: React.FC<StandInformationItemProps> = (props) => {
   const {
      description,
      information
   } = props

   return (
      <>
         <Divider />
         <HBox>
            <DescriptionBoxStyle>
               <Typography
                  fontSize={14}
                  fontWeight={400}
               >
                  {description}
               </Typography>
            </DescriptionBoxStyle>
            <Divider orientation="vertical" flexItem />
            <TextFieldWrapperStyle>
               <InputBase
                  fullWidth
                  multiline
                  defaultValue={information}
                  sx={{ fontSize: '14px', fontWeight: '400' }}
               />
               <IconButton size='small'>
                  <EditOutlinedIcon fontSize='inherit' />
               </IconButton>
            </TextFieldWrapperStyle>
         </HBox>
         <Divider />
      </>
   )
}

export default StandInformationItem;