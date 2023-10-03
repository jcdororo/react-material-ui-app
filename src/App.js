import './App.css';
import { Box, Stack, createTheme } from '@mui/material'
import Header from './components/Header'
import LeftBody from './components/LeftBody'
import CenterBody from './components/CenterBody'
import RightBody from './components/RightBody'
import Footer from './components/Footer'
import Create from './components/Create';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';


function App() {

  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })


  return (
    <ThemeProvider theme={darkTheme} color={"text.primary"}>
      <Box bgcolor={"Background.default"}>
        <Header />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <LeftBody />
          <CenterBody />
          <RightBody mode={mode} setMode={setMode} />
        </Stack>
        <Create />
        <Footer />
      </Box>
    </ThemeProvider>

  );
}

export default App;
