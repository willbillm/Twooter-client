import React from 'react';
import { Link } from "react-router-dom";

import ShowP from '../functions/showPost.js'

import Stack from '@mui/material/Stack';

export default function ShowPost() {     
  return (
    <>
      <Stack direction='row' spacing={3}>
        <nav>
          <Link to="/createUser">Create User</Link>
        </nav>              
        <nav>
          <Link to="/">Create Post</Link>
        </nav>
      </Stack>
        
      <ShowP />
    </>
  )
}

