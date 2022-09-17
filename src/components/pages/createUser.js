import React from 'react';
import { Link } from "react-router-dom";

import CreateU from '../functions/createUser.js'

import Stack from '@mui/material/Stack';

export default function CreateUser() {   
  return (
    <>
      <Stack direction='row' spacing={3}>
        <nav>
          <Link to="/">Create Post</Link>
        </nav>
        <nav>
          <Link to="/showPost">View Posts</Link>
        </nav>
      </Stack>

      <CreateU />
    </>
  );
}
