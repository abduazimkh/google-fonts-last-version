import * as React from 'react';
import './styles/App.scss';
import Routes from "./routes";
import Nav from './layout/nav/Nav';
import Sidebar from './layout/sidebar/Sidebar';
import { Container } from './utils/Utils';
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BackToTop from './components/backtotop/BackToTop';
// import { useLocation } from 'react-router-dom';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const { pathname } = useLocation();
  
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <div className='app-wrapper'>
      <BackToTop />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Sidebar colorMode={colorMode} />
          <div style={isOpen ? { paddingLeft: "300px" } : { paddingLeft: "0px" }} className='app-item'>
            <Container >
              {/* {pathname.includes("/cart") ? <></> : (
                <>
                  <Nav />
                </>
              )} */}
              <Nav />
              <Routes isOpen={isOpen} setIsOpen={setIsOpen as any} />
            </Container>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
      <ToastContainer position="top-center" theme="colored" limit={2} />
    </div>
  )
}

export default App
