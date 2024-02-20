import "./Embded.scss";
import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from "@mui/material";


const Embded = () => {
  const navigate = useNavigate()
  const { cart } = useSelector((state: any) => state.cart)
  const theme: any = useTheme();
  const divv: any = React.useRef();
  const [value, setValue] = React.useState('1');
  const [valuee, setValuee] = React.useState('1');
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleChangee = (_: React.SyntheticEvent, newValue: string) => {
    setValuee(newValue);
  };

  return (
    <div className="embded__wrapper">
      <div className="embded-top--content">
        <IconButton onClick={() => navigate("/cart")} aria-label="fingerprint" style={{ color: "#000" }}>
          <AiOutlineArrowLeft />
        </IconButton>
        <h1>Embed code</h1>
      </div>

      <div className="emded-box__wrapper">
        <div className="embded-box-fonts">
          {
            cart.map((font: any, index: number) => (
              <div key={index} className="embded-box-font">
                <div>
                  <span>{font.family}</span>
                </div>
                <h2 style={{
                  color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`,
                  fontFamily: font.family + "," + font.category,
                  whiteSpace: "nowrap"
                }} >Lorem ipsum dolor sit amet. Hello world lorem se</h2>
              </div>
            ))
          }
        </div>

        <div className="embded-box-styles">
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Web" value="1" />
                  <Tab label="Android" value="2" />
                  <Tab label="iOS" value="3" />
                  <Tab label="Flutter" value="4" />
                </TabList>
              </Box>
              <TabPanel id="listtt" value="1">
                <b style={{ display: "inline-block", marginBottom: "1rem", fontSize: "1rem", fontFamily: "sans-serif" }}>
                  Embed code in the {`<head>`} of your html
                </b>

                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={valuee}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList onChange={handleChangee} aria-label="lab API tabs example">
                        <Tab label="link" value="1" />
                        <Tab label="import" value="2" />
                      </TabList>
                    </Box>

                    <TabPanel className="aaa" value="1">
                      <span>
                        <code className="links" >
                          {`<link rel="preconnect" href="https://fonts.googleapis.com">`}
                        </code>
                        <code className="links" >
                          {`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`}
                        </code>
                        <code className="links" >
                          {`<link href="https://fonts.googleapis.com/css2?family=${cart.map(a => a.family).join("&family=")}&display=swap" rel="stylesheet">`}
                        </code>
                      </span>

                      <Button style={{ color: "#333", position: "absolute", bottom: ".5rem", right: ".5rem" }} > Copy code</Button>
                    </TabPanel>
                    <TabPanel className="aaa" value="2">
                      <span>
                        <code className="links" >
                          {`<style> `}
                        </code>
                        <code className="links" >
                          {`                         
                            @import url('https://fonts.googleapis.com/css2?family=${cart.map(a => a.family).join("&family=")}&display=swap')
                          `}
                        </code>
                        <code className="links" >
                          {`</style>`}
                        </code>
                      </span>


                      <Button style={{ color: "#333", position: "absolute", bottom: ".5rem", right: ".5rem" }} > Copy code</Button>
                    </TabPanel>
                  </TabContext>
                </Box>


                <div className="css-styles--code">
                  {
                    cart.map((font: any, index: number) => {
                      return (
                        <div className="styles-code" key={index}>
                          <p>{font.family}: CSS casses</p>

                          {
                            font.variants.map((f: any) => {
                              return (
                                <div key={f}>
                                  <pre >
                                    <code ref={divv} style={{ fontSize: "12px !important", whiteSpace: "pre" }} >
                                      {`
    .${font.family + " " + f} {
        font - family: "${font.family}", ${font.category};
        font-weight: ${f};
        font-style: normal;
    }
  `}
                                    </code>
                                  </pre>
                                </div>
                              )
                            })
                          }

                          <Button onClick={(e) => {
                            navigator.clipboard.writeText(divv.current.innerText)
                          }} style={{ color: "#333" }} > Copy code</Button>
                        </div>
                      )
                    })
                  }
                </div>
              </TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
              <TabPanel value="4">Item Four</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>


    </div>
  )
}

export default Embded