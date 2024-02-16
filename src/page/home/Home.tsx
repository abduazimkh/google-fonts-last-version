import "./Home.scss";
import { Dewider } from "../../utils/Utils";
import Button from '@mui/material/Button';
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Main from "../../layout/main/Main";
import { useState } from "react";


const Home = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: boolean }) => {
  const [text, setText] = useState<string>("");
  const [textSize, setTextSize] = useState<number>(36);

  return (
    <>
      <div>
        <Button className="filter-btn" onClick={() => setIsOpen(!isOpen)} variant="contained"> {isOpen ? <i><IoMdClose /></i> : <i><GiSettingsKnobs /></i>} Filter</Button>

        <Main text={text} textSize={textSize} />

      </div>
      <Dewider isOpen={isOpen} name="left">
        <button className="btn-close" onClick={() => setIsOpen(false)}>X</button>

        <div className="modal-left">
          <strong>Preview</strong>

          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something"></textarea>
          <input value={textSize} onChange={(e) => setTextSize(+e.target.value)} min={8} max={300} type="range" />
        </div>

      </Dewider>
    </>
  )
}

export default Home