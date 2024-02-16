import './styles/App.scss';
import Routes from "./routes";
import Nav from './layout/nav/Nav';
import Sidebar from './layout/sidebar/Sidebar';
import { Container } from './utils/Utils';
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='app-wrapper'>
      <Sidebar />
      <div style={isOpen ? { paddingLeft: "300px" } : { paddingLeft: "0px" }} className='app-item'>
        <Container >
          <Nav />
          <Routes isOpen={isOpen} setIsOpen={setIsOpen} />
        </Container>
      </div>
      <ToastContainer position="top-center" theme="colored" limit={2} />
    </div>
  )
}

export default App
