import { ThemeProvider, createTheme, CssBaseline, Container, Typography } from '@mui/material';
import { SequenceAlignment } from './components/SequenceAlignment';
import React from 'react';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ mt: 4, mb: 2, textAlign: 'center' }}
          >
            Amino Acid Sequence Alignment Visualizer
          </Typography>
          <SequenceAlignment />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
