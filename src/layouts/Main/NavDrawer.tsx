import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import drawerItems from './DrawerItems';

const AccordionList: React.FC = () => {

  return (
    <>
      {drawerItems.map(item => (
        <Accordion>
          <AccordionSummary>
            {item.name}
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {item.children.map(child => (
                <ListItem>
                  <ListItemButton>
                    <ListItemText>
                      {child.name}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

const NavDrawer: React.FC = () => {

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {width: 240, boxSizing: 'border-box'},

      }}
    >
      <Toolbar />
      <AccordionList />
    </Drawer>
  )
};

export default NavDrawer;
