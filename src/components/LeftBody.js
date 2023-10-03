import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
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
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddShoppingCart />
            </ListItemIcon>
            <ListItemText primary="Shopping" />
          </ListItemButton>
          </ListItem>
        </List>
      </Box>

    </Box>
  )
}

export default LeftBody