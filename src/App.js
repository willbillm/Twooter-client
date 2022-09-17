import React from 'react'
import { Routes, Route} from "react-router-dom";
import CreatePost from './components/pages/createPost.js';
import CreateUser from './components/pages/createUser.js'
import ShowPost from './components/pages/showPost.js'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Stack from '@mui/material/Stack';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Stack spacing={3} direction="column" sx={{ alignItems: 'center', margin: 3 }}>

          <Box>
              <AppBar position="static" sx={{ borderRadius: 15 }}>
                  <Toolbar sx={{ flexDirection: 'row' }}>
                      <AccessibilityNewIcon sx={{ margin: 2}}/>
                          <Typography variant="h6" component="div" sx={{ margin: 2 }}>
                              Twooter
                          </Typography>
                      <AccessibilityNewIcon sx={{ margin: 2}}/>
                  </Toolbar>
              </AppBar>
          </Box>

          <Routes>
            <Route path="/" element={<CreatePost />} />
            <Route path="createUser" element={<CreateUser />} />
            <Route path="showPost" element={<ShowPost />} />
          </Routes>
          
        </Stack>
    </ThemeProvider>
);
}




export default App