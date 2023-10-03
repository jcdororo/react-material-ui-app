import { Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const Item = () => {
  return (
    <Card>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: "red" }}>
            R
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia 
        component="img"
        height="194"
        image="https://avatars.githubusercontent.com/u/66819791?v=4"
      />
      <CardContent>
        <Typography variant='body2' color="text.secondary">
             가시밭길 위로 riding, you made me boost up (ah-ah-ah-ah) 거짓으로 가득 찬 party 가렵지도 않아
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Item