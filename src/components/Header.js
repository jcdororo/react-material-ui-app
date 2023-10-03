import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, InputBase, Avatar, Menu, MenuItem } from '@mui/material'
import styled from '@emotion/styled'
import { AcUnit, Badge, Notifications } from '@mui/icons-material'

const Header = () => {
  const [open, setOpen] = useState(false)


const StyledToolbar = styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between'

})
const Search = styled("div")(({theme})=>  ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled("div")(({theme}) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))
  
  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" }}}>
          MUI
        </Typography>
        <AcUnit sx={{ display: { xs: "block", sm: "none" }}} />
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={3} color='error'>
            <Notifications />
          </Badge>
          <Avatar onClick={() => setOpen(true)} sx={{ bgcolor: "gray" }}>N</Avatar>
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Header