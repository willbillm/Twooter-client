import React, { useState } from 'react';
import { api } from '../../axios';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export default function CreateU() {

const [user, setUser] = useState({

    userName: '',
    passWord: '',
    
});

const createUser = () => {
  api.post('/users', user).then( () => {
    window.location.reload(false);
  })
}
    
return (
<>
  <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <h2>Create User</h2>
      <TextField id="standard-basic" label="Username" variant="standard" value={user.name} onChange={(event) => {
        setUser({ ...user, userName: event.target.value})
      }}/>
      <TextField id="standard-basic" label="Password" variant="standard" value={user.bday} onChange={(event) => {
        setUser({ ...user, passWord: event.target.value})
      }}/>
      <TextField id="standard-basic" label="Favorite Animal" variant="standard" value={user.favAnimal} onChange={(event) => {
        setUser({ ...user, favAnimal: event.target.value})
      }}/>
      <Button variant="contained" onClick={createUser} >
        Create User
      </Button>
  </Box>
</>
);
}
