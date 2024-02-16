import "./Main.scss";
import { getFonts } from "../../redux/features/fonts-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FontsTypes } from "../../types";
import { CardSkeleton } from "../../utils/Utils";
import { useTheme } from "@emotion/react";


const Main = ({ text, textSize, resize }: { text: string, textSize: number, resize: number }) => {
  const { fonts_data, input_value, search_select, isLoading } = useSelector((state: any) => state.fonts)
  const dispatch: any = useDispatch()
  const theme = useTheme();

  useEffect(() => {
    dispatch(getFonts(search_select))
  }, [search_select])

  return (
    <div className="main-wrapper">
      {isLoading ? <CardSkeleton amount={10} />
        :
        fonts_data.slice(0, 50).filter((font: any) => input_value ? font.family.toLocaleLowerCase().indexOf(input_value) != -1 : font.variants.length === resize).map((font: FontsTypes, index: number) => (
          <div className="font-content" key={index} >
            <div>
              <p style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }} >{font.family}</p>
              <strong style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`, }} > | &nbsp; {font.variants.length > 1 ? font.variants.length + " styles" : font.variants.length + " style"}</strong>
            </div>
            <h2 style={{
              color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`,
              fontFamily: font.family + "," + font.category,
              whiteSpace: "nowrap",
              fontSize: textSize,
            }}
            > {text.trim().length > 0 ? text : "Lorem ipsum dolor sit amet."} </h2>
          </div>
        ))
      }
    </div>
  )
}

export default Main