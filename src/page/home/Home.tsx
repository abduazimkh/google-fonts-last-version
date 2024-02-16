import "./Home.scss";
import { Dewider } from "../../utils/Utils";
import Button from '@mui/material/Button';
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Main from "../../layout/main/Main";


const Home = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: boolean }) => {

  return (
    <>
      <div>
        <Button className="filter-btn" onClick={() => setIsOpen(!isOpen)} variant="contained"> {isOpen ? <i><IoMdClose /></i> : <i><GiSettingsKnobs /></i>} Filter</Button>

        <Main />

      </div>
      <Dewider isOpen={isOpen} name="left">
        <button className="btn-close" onClick={() => setIsOpen(false)}>X</button>

        <div className="modal-left">
          <strong>Preview</strong>

          <textarea placeholder="Type something"></textarea>
          <input min={8} max={300} type="range" />
        </div>

      </Dewider>
    </>
  )
}

export default Home