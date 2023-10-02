import './App.css';
import Button from '@mui/material/Button'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Button variant='text'>Hello world</Button>
      <Button startIcon={<WorkspacePremiumIcon />} fullWidth size='large' variant='contained'>Hello world</Button>
      <Button endIcon={<WorkspacesIcon />} variant='outlined'>Hello world</Button>
      <Button
        sx={{
          backgroundColor: 'gray',
          color: 'white',
          margin: 10,
          "&:hover": {
            backgroundColor: 'black'
          },
          "&:disabled": {
            backgroundColor: 'white',
            color: 'black'
          }
        }}

      >Custom Style</Button>
      <CustomButton>Custom Button Style</CustomButton>
      <Typography variant='h1' gutterBottom>h1. Heading</Typography>
      <Typography variant='h2' gutterBottom>h2. Heading</Typography>
      <Typography variant='h3' gutterBottom>h3. Heading</Typography>

    </div>
  );
}

const CustomButton = styled(Button)({
  backgroundColor: 'gray',
          color: 'white',
          margin: 10,
          "&:hover": {
            backgroundColor: 'black'
          },
          "&:disabled": {
            backgroundColor: 'white',
            color: 'black'
          }
})

export default App;
