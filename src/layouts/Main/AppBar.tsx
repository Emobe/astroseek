import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const AppBar: React.FC = () => {
  const NavItems = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Contact',
      link: '/contact',
    },
    {
      text: 'Login',
      link: '/login',
    },
  ];
  return (
    <MuiAppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{mr: 2}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          News
        </Typography>
        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
          {NavItems.map((items, index) => (
            <Button
              variant="outlined"
              key={index}
              style={{color: 'white'}}
            >
              {items.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar;
