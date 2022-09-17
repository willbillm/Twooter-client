import React from 'react';
import { Link } from "react-router-dom";

import CreateP from '../functions/createPost.js';

import Stack from '@mui/material/Stack';

export default function CreatePost() {
  return (
    <>
      <Stack direction='row' spacing={3}>
        <nav>
          <Link to="/createUser">Create User</Link>
        </nav>
        <nav>
          <Link to="/showPost">View Posts</Link>
        </nav>
      </Stack>

      <CreateP />
    </>
  );
}