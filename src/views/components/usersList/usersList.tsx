import React from 'react'
import { Typography, Avatar, Box, styled } from "@mui/material";
import { observer } from 'mobx-react-lite';
import { Iuser } from 'types';
import { HBox } from '@simosol/boxes';

interface PostListProps {
   users: Iuser[]
}

const UserStyle = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: "space-around",
   alignItems: "center",
   height: theme.spacing(6),
   marginTop: theme.spacing(6),
}));

const UsersList: React.FC<PostListProps> = observer((props) => {
   const {
      users
   } = props;

   return (
      <Box>
         {users.map(({ id, avatar, name, role, lastSeen }: Iuser) =>
            <UserStyle key={id}>
               <HBox gap={8}>
                  <Avatar>{avatar}</Avatar>
                  <Typography>{name}</Typography>
               </HBox>
               <Typography>{role}</Typography>
               <Typography>{lastSeen}</Typography>
            </UserStyle>
         )}
      </Box>
   )
});

export default UsersList;