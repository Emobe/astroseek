import React from 'react';
import Box from '@mui/material/Box';
import AppBar from './AppBar';
import NavDrawer from './NavDrawer';
import {Outlet} from 'react-router-dom';

const MainLayout: React.FC = () => {

  return (
    <>
      <Box sx={{flexGrow: 1}}>
        <AppBar />
        <NavDrawer />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;

