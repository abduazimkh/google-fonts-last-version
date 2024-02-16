import './styles/App.scss';
import Routes from "./routes";
import Nav from './layout/nav/Nav';
import Sidebar from './layout/sidebar/Sidebar';
import { Container } from './utils/Utils';
import { useState } from 'react';

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

    </div>
  )
}

export default App
