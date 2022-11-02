import {
   Typography,
   MenuItem,
   Avatar,
   styled
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import UsersList from 'views/components/usersList/usersList';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { app } from 'models/appModel';
import { HBox } from '@simosol/boxes';

const WrapperStyle = styled('div')(() => ({
   width: "100%",
   minHeight: '100vh'
}));

const LanguageWrapperStyle = styled('div')(({ theme }) => ({
   width: '100%',
   margin: theme.spacing(2),
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'flex-end'
}));

const LoginWrapperStyle = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center'
}));

const LoginButtonStyled = styled('button')(({ theme }) => ({
   width: theme.spacing(20),
   display: 'flex',
   justifyContent: 'space-around',
   alignItem: 'center',
   margin: theme.spacing(2),
   background: 'inherit',
   cursor: 'pointer',
   border: 'none',
   '&:hover': {
      background: theme.palette.action.hover,
   }
}));

const UsersBlockWrapperStyle = styled('div')(({ theme }) => ({
   margin: theme.spacing(25, 4, 0, 4)
}));

const UsersTableHeadStyle = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: "space-around",
   alignItems: "center",
   height: theme.spacing(6),
   backgroundColor: theme.palette.action.disabledBackground,
   borderRadius: theme.spacing(1),
}));

const AvatarStyle= styled(Avatar)(({theme}) => ({
   display: 'inline-block',
   textAlign: 'center',
   marginRight: theme.spacing(1),
}));

const AdminTools: React.FC = observer(() => {
   const [language, setLanguage] = useState('');

   const handleChange = (event: SelectChangeEvent) => {
      setLanguage(event.target.value);
   };

   return (
      <WrapperStyle>
         <HBox>
            <LanguageWrapperStyle>
               <Select
                  value={language}
                  onChange={handleChange}
                  displayEmpty
               >
                  <MenuItem value="">
                     <AvatarStyle
                        sx={{ marginRight: '10px' }}
                        alt="English"
                        src="https://i0.wp.com/fal.by/wp-content/uploads/2016/03/%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F.png?w=256&ssl=1"
                     />
                     English
                  </MenuItem>
                  <MenuItem value='{10}'>
                     <AvatarStyle
                        sx={{ marginRight: '10px' }}
                        alt="Finish"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQDxzEnjUuthwTkRjebm3zptWH-t0Ct0rqhmdTyj6jpuA83V8VZ2RSyOEUxk7kXcgMBs&usqp=CAU" />
                     Finish
                  </MenuItem>
               </Select>
            </LanguageWrapperStyle>
            <LoginWrapperStyle>
               <Avatar>U</Avatar>
               <LoginButtonStyled>
                  <Typography>Log out</Typography>
                  <ExitToAppIcon />
               </LoginButtonStyled>
            </LoginWrapperStyle>
         </HBox>
         <UsersBlockWrapperStyle>
            <UsersTableHeadStyle>
               <Box>
                  <Typography>User</Typography>
               </Box>
               <Box>
                  <Typography>Role</Typography>
               </Box>
               <Box>
                  <Typography>Last seen</Typography>
               </Box>
            </UsersTableHeadStyle>
            <UsersList users={app.users.users} />
         </UsersBlockWrapperStyle>
      </WrapperStyle>
   )
})

export default AdminTools;