import { FC } from 'react';
import { Router } from './pages/Router';
import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/material';
import './styles/globals.css';
import './styles/mui-overrides.css';


interface AppProps {
  name?: any
  children?: Element
  ebconfig?: any
  options?: any
}

const App: FC<AppProps> = ({ children,
  ebconfig,
  options }) => {
  return (
    <div className="App">
 
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
     </div>
  );
}

export default App;
