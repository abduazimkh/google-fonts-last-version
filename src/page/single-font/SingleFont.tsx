import * as React from 'react';
import "./SingleFont.scss";
import { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFonts, singleFont } from "../../redux/features/fonts-slice";
import { FontsTypes } from "../../types";
import { CardSkeleton } from "../../utils/Utils";
import { useTheme } from "@emotion/react";
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const sizes = [12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280]
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SingleFont = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) => {
  const theme: any = useTheme();
  const { font } = useParams<string>();
  const dispatch = useDispatch();
  const { fonts_data, isLoading, single_font } = useSelector((state: any) => state.fonts)
  const [rangeValue, setRangeValue] = React.useState<number>(36)
  const [inputValue, setInputValue] = React.useState<string>("")

  const [age, setAge] = React.useState<any>('');
  const [valuee, setValue] = React.useState(0);

  const handleChangee = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    setRangeValue(age)
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch(singleFont(font))
  }, [font])
  useEffect(() => {
    setIsOpen(false)
  }, [isOpen])
  const value = {
    single_font
  };
  useEffect(() => {
    dispatch(getFonts(value) as any)
  }, [single_font])

  console.log(fonts_data)

  return (
    <>
      <div className="single-font__wrapper">
        <small className="top-text">refresh berganda ozroq o'ynedi sababi redux dagi 1ta slice ga home pagedagi va single pagedagi api joylangan, reduxdagi qushimcha hsusiyatlarini bilish kurish maqsadida qilingan</small>
        <Box sx={{ width: '100%' }}>
          <Box style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`, display: `${theme.palette.mode !== 'dark' ? "flex" : "flex"}`, justifyContent: `${theme.palette.mode !== 'dark' ? "space-between" : "space-between"}` }} sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Specimen" {...a11yProps(0)} />
              <Tab label="typet ester" {...a11yProps(1)} />
              <Tab label="Glyphs" {...a11yProps(2)} />
            </Tabs>
            <button className='download-btn'>Download</button>
          </Box>
          <CustomTabPanel value={valuee} index={0}>
            {isLoading ? <CardSkeleton amount={5} /> :
              fonts_data.slice(0, 1).filter((fontItem: any) => fontItem.family === font ? font : fontItem).map((font: FontsTypes, index: number) => (
                <div className="single-font--content" key={index} >
                  <div className='font-name'>
                    <h1 style={{ fontSize: "4rem", color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }}>{font.family}</h1>
                    <p>Designed by {font.family}</p>
                  </div>
                  <div className='single-title'>
                    <h2 style={{
                      color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`,
                      fontFamily: font.family + "," + font.category,
                      fontSize: "4rem",
                      textAlign: "center"
                    }} >Whereas disregard and contempt for human rights have resulted</h2>
                  </div>
                  <div className='single-styles'>
                    <TextField id="outlined-basic" label="Type here to preview text" variant="outlined" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <div className='range-manu'>
                      <FormControl sx={{ winWidth: 70, maxHeight: 60 }}>
                        <Select
                          value={age}
                          onChange={handleChangee}
                          displayEmpty
                          inputProps={{ 'aria-label': 'Fonts size' }}
                        >
                          <MenuItem value="">
                            <em>8</em>px
                          </MenuItem>
                          {
                            sizes.map((size, i: number) => (
                              <MenuItem key={i} value={size}>{size}px</MenuItem>
                            ))
                          }
                        </Select>
                        <FormHelperText>Font size</FormHelperText>
                      </FormControl>

                      <Slider
                        className='range'
                        min={8}
                        max={300}
                        value={rangeValue}
                        onChange={(e: any) => setRangeValue(e.target.value)}
                        sx={{
                          width: 300,
                          color: 'dodgerblue',
                        }}
                      />
                    </div>
                  </div>
                  {
                    font.variants.map((fontItem: any) => (
                      <div style={{ borderBottom: `${fontItem.length > 1 ? "1px solid transparent" : "1px solid #cfcfcf"}` }} className="single__font">
                        <p style={{ marginBottom: "1rem", color: `${theme.palette.mode !== 'dark' ? "#555" : "#fff"}`, }}>This {fontItem}</p>
                        <h2
                          onClick={(e: any) => {
                            e.target.contentEditable = true
                            if (e.target.innerText == "") {
                              e.target.innerText = "Lorem ipsum dolor sit amet.";
                            }
                          }}
                          contentEditable={false}
                          style={{
                            color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`,
                            fontFamily: font.family + "," + font.category,
                            whiteSpace: "nowrap",
                            fontSize: rangeValue,
                            fontWeight: fontItem,
                            fontStyle: fontItem,
                          }}>
                          {inputValue.trim().length > 0 ? inputValue : "Lorem ipsum dolor sit amet."}
                        </h2>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </CustomTabPanel>
          <CustomTabPanel value={valuee} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={valuee} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </div>
    </>
  )
}

export default SingleFont