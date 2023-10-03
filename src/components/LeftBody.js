import React from 'react'
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { AddShoppingCart, Drafts, Home, Inbox } from '@mui/icons-material'

const LeftBody = () => {
  return (
    <Box
      flex={1} p={2}
      sx={{
        display: { xs: 'none', sm: 'block'},
        backgroundColor: 'primary.main'

        
      }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <AddShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Shopping" />
          </ListItem>
        </List>
      </Box>

    </Box>
  )
}

export default LeftBody