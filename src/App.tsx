import { FC, useEffect, useState } from 'react';
import { Router } from './pages/Router';
import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/material';
import './styles/globals.css';
import './styles/mui-overrides.css';
import { Loader } from './design-system/_common/Loader';


interface AppProps {
  name?: any
  children?: Element
  ebconfig?: any
  options?: any
}



const App: FC<AppProps> = ({ children,
  ebconfig,
  options }) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }

  useEffect(() => {

    setTimeout(() => {

      fetchData()

    }, 1500);

  }, []);

  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <Router />
        {isLoaded ? '' : <Loader />}
      </ThemeProvider>
    </div>
  );
}

export default App;
