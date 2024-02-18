import "./Home.scss";
import { Dewider } from "../../utils/Utils";
import Button from '@mui/material/Button';
import { GiSettingsKnobs } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Main from "../../layout/main/Main";
import { useEffect, useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Flex, Typography } from "antd";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MdLanguage } from "react-icons/md";

const Home = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) => {
  const [text, setText] = useState<string>("");
  const [textSize, setTextSize] = useState<number>(36);
  const [rangeSize, setRangeSize] = useState<number>(1)

  const [serifBtn, setSerifBtn] = useState<boolean>(false);
  const [slabSerifBtn, setSlabSerifBtn] = useState<boolean>(false);
  const [sansSerifBtn, setSansSerifBtn] = useState<boolean>(false);

  const [display, setDisplay] = useState<boolean>(false)
  const [handle, setHandle] = useState<boolean>(false)
  const [mono, setMono] = useState<boolean>(false)
  
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true)
    }, 200)
  }, [])

  return (
    <>
      <div>
        <Button className="filter-btn" onClick={() => setIsOpen(!isOpen)} variant="contained"> {isOpen ? <i><IoMdClose /></i> : <i><GiSettingsKnobs /></i>} Filter</Button>

        <Main 
          resize={rangeSize} 
          text={text} 
          textSize={textSize} 
          serifBtn={serifBtn}
          slabSerifBtn={slabSerifBtn}
          sansSerifBtn={sansSerifBtn}
          display={display}
          handle={handle}
          mono={mono}
        />

      </div>
      <Dewider isOpen={isOpen} name="left">
        <button className="btn-close" onClick={() => setIsOpen(false)}>X</button>

        <div className="modal-left">
          <strong>Preview</strong>

          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something"></textarea>
          <input value={textSize} onChange={(e) => setTextSize(+e.target.value)} min={8} max={300} type="range" />

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MdLanguage /> Language
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                All languages
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded className="accordion">
            <AccordionSummary className="accordion-header" expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              <span className="material-symbols-outlined">text_rotation_none</span>
              Technology
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "transparent" }}>
              <Flex gap="small" wrap="wrap">
                <Button style={{ backgroundColor: "#fff" }}>
                  Variable
                </Button>
                <Button style={{ backgroundColor: "#fff" }}>
                  <span>C</span> <span>o</span> <span>l</span> <span>o</span> <span>r</span>
                </Button>
              </Flex>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded  >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              <span className="material-symbols-outlined">brush</span>
              Decorative stroke
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "transparent" }} className="check__btns-action" >
              <Button style={{ backgroundColor: "#fff", margin: "3px" }} className="checked-btn" onClick={() => setSerifBtn(!serifBtn)}>
                {serifBtn ? <span className="material-symbols-outlined">check</span> : ""}
                Serif
              </Button>
              <Button style={{ backgroundColor: "#fff", margin: "3px" }} className="checked-btn" onClick={() => setSlabSerifBtn(!slabSerifBtn)}>
                {slabSerifBtn ? <span className="material-symbols-outlined">check</span> : ""}
                Slab Serif
              </Button>
              <Button style={{ backgroundColor: "#fff", margin: "3px" }} className="checked-btn" onClick={() => setSansSerifBtn(!sansSerifBtn)}>
                {sansSerifBtn ? <span className="material-symbols-outlined">check</span> : ""}
                Sans Serif
              </Button>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary style={{ display: "flex", alignItems: "center", gap: "5px" }} expandIcon={<ExpandMoreIcon />}>
              <span className="material-symbols-outlined">folder</span>
              Classfication
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "transparent" }} className="classfication-btns">
              <Button style={{ backgroundColor: "#fff", margin: "3px" }} onClick={() => setDisplay(!display)} >
                {display ? <span className="material-symbols-outlined">check</span> : ""}
                Display
              </Button>
              <Button style={{ backgroundColor: "#fff", margin: "3px" }} onClick={() => setHandle(!handle)}   >
                {handle ? <span className="material-symbols-outlined">check</span> : ""}
                Handwriting
              </Button>
              <Button style={{ backgroundColor: "#fff", margin: "3px" }} onClick={() => setMono(!mono)}       >
                {mono ? <span className="material-symbols-outlined">check</span> : ""}
                Monospace
              </Button>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary style={{ display: "flex", alignItems: "center", gap: "5px" }} expandIcon={<ExpandMoreIcon />}>
              Properties
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "transparent", width: "100%", padding: "0px" }} className="classfication-btns">
            </AccordionDetails>
            <input min="1" max="18" value={rangeSize} onChange={(e) => setRangeSize(+e.target.value)} type="range" style={{ width: "90%" }} />
          </Accordion>
        </div>



      </Dewider>
    </>
  )
}

export default Home