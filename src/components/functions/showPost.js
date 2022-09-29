import React, { useState, useEffect } from 'react';
import { api } from '../../axios';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ShowP() {   
    
useEffect(() => {
    api.get('/posts').then( (allPosts) => {
    setPostList(allPosts.data)
    })
}, [])

const [postList, setPostList] = useState([])

const rows = postList
  
return (
<>
  <TableContainer component={Paper} sx={{ maxWidth: 500}}>
    <Table sx={{ maxWidth: 500 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Twooter Posts</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.user}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={row.user} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={ row.title }
                    secondary={
                    <React.Fragment>
                        <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                        >
                        { row.user }
                        </Typography>
                        {" — "} {row.entry}
                    </React.Fragment>
                    }
                />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</>
)
}

