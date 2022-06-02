import { FC } from 'react';
import { Router } from './Router';
import { theme } from './utils/theme';
import { ThemeProvider } from '@mui/material';
import './styles/globals.css';
import './styles/mui-overrides.css';
import Home from './pages/home';

interface AppProps {
  name?: any
}

const App: FC<AppProps> = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
