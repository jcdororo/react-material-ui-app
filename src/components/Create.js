import { Edit } from '@mui/icons-material'
import { Fab, IconButton, Tooltip } from '@mui/material'
import React from 'react'

const Create = () => {
  return (
    <Tooltip title='Create'
      sx={{ position: "fixed", bottom: 20, right: 30}}
    >
      <IconButton>
        <Fab color='secondary'>
          <Edit />
        </Fab>
      </IconButton>
    </Tooltip>
  )
}

export default Create