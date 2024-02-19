import "./Main.scss";
import { getFonts } from "../../redux/features/fonts-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FontsTypes } from "../../types";
import { CardSkeleton } from "../../utils/Utils";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";


const Main = ({ text, textSize, resize, serifBtn, slabSerifBtn, sansSerifBtn, display, handle, mono }:

  {
    text: string, textSize: number, resize: number, serifBtn: boolean, slabSerifBtn: boolean, sansSerifBtn: boolean,
    display: boolean, handle: boolean, mono: boolean
  }) => {

  const { fonts_data, input_value, search_select, isLoading } = useSelector((state: any) => state.fonts)
  const dispatch: any = useDispatch()
  const theme: any = useTheme();

  useEffect(() => {
    dispatch(getFonts(search_select))
  }, [search_select])

  return (
    <div className="main-wrapper">
      {isLoading ? <CardSkeleton amount={10} />
        :
        fonts_data.filter((b: any) => b.category.indexOf(
          display && "display" || mono && "monospace" || handle && "handwriting" ||
          ((display && "display") && (mono && "monospace") && (handle && "handwriting")) ||
          ((display && "display") && (mono && "monospace")) || (serifBtn && "serif" || sansSerifBtn && "sans-serif" || slabSerifBtn && "slab-serif") || ""
        ) !== -1).filter((font: any) => input_value ? font.family.toLocaleLowerCase().indexOf(input_value) != -1 : font.variants.length === resize).map((font: FontsTypes, index: number) => (
          <Link key={index} to={`/single-font/${font.family}`}>
            <div className="font-content" key={index} >
              <div>
                <p style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }} >{font.family}</p>
                <strong style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`, }} > | &nbsp; {font.variants.length > 1 ? font.variants.length + " styles" : font.variants.length + " style"}</strong>
              </div>
              <h2 className="main__wrapper-font" style={{
                color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`,
                fontFamily: font.family + "," + font.category,
                whiteSpace: "nowrap",
                fontSize: textSize,
              }}
              > {text.trim().length > 0 ? text : "Lorem ipsum dolor sit amet."} </h2>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Main