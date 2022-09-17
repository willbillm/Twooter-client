import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function CreateP() {

const createPost = () => {
  axios.post('http://localhost:5000/posts', post).then( () => {
    window.location.reload(false);
  })
}

const handleChange = (e) => {
  console.log('user selected!');
  setPost({ user: e.target.value})
}

useEffect(() => {
  axios.get('http://localhost:5000/users').then( (allUsers) => {
    setUserList(allUsers.data)
  })
}, [])

const [post, setPost] = useState({

  user: '',
  title: '',
  entry: ''

});

const [userList, setUserList] = useState([])

return (
<>  
  <select value={post.user} onChange={handleChange}>
    {userList.map((users) => (
      <option value={users.userName}>{users.userName}</option>
    ))}
  </select>


  <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
    position="absolute"
    left='80ch'
    top='23ch'
  >
    <h2>Create Post</h2>
    <Stack direction='column' spacing={3}>
      <Stack direction='row' spacing={3}>
        <TextField id="standard-textarea" label="Title" placeholder="Title" multiline variant="standard" value={post.title} onChange={(event) => {
          setPost({ ...post, title: event.target.value})
        }}/>
        <Button variant="contained" onClick={createPost} >
          Create Post
        </Button>
      </Stack>
      <TextField id="outlined-textarea" label="Entry" placeholder="Entry" multiline value={post.entry} onChange={(event) => {
        setPost({ ...post, entry: event.target.value})
      }}/>
  
    </Stack>
  </Box>
</>
);
}