import "./SingleFont.scss";
import { useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFonts, singleFont } from "../../redux/features/fonts-slice";
import { FontsTypes } from "../../types";
import { CardSkeleton } from "../../utils/Utils";
import { useTheme } from "@emotion/react";


const SingleFont = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) => {

  const theme: any = useTheme();
  const { font } = useParams<string>();
  const dispatch = useDispatch();
  const { fonts_data, isLoading, single_font } = useSelector((state: any) => state.fonts)


  useEffect(() => {
    dispatch(singleFont(font))
  }, [font])

  useEffect(() => {
    setIsOpen(false)
  }, [isOpen])

  const value = {
    single_font
  };

  useLayoutEffect(() => {
    dispatch(getFonts(value) as any)
  }, [single_font])

  return (
    <>
      <div className="single-font__wrapper">
        <small className="top-text">refresh berganda ozroq o'ynedi sababi redux dagi 1ta slice ga home pagedagi va single pagedagi api joylangan, reduxdagi qushimcha hsusiyatlarini bilish kurish maqsadida qilingan</small>


        {isLoading ? <CardSkeleton amount={10} />
          :
          fonts_data.slice(0, 1).map((font: FontsTypes, index: number) => (
            <div className="font-content" key={index} >
              <div>
                <p style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }} >{font.family}</p>
                <strong style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`, }} > | &nbsp; {font.variants.length > 1 ? font.variants.length + " styles" : font.variants.length + " style"}</strong>
              </div>
              <h2 style={{
                color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`,
                fontFamily: font.family + "," + font.category,
                whiteSpace: "nowrap",
                fontSize: 30,
              }}
              > {"Lorem ipsum dolor sit amet."} </h2>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SingleFont