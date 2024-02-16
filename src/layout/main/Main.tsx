import "./Main.scss";
import { getFonts } from "../../redux/features/fonts-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FontsTypes } from "../../types";
import { CardSkeleton } from "../../utils/Utils";


const Main = () => {
  const { fonts_data, input_value, isLoading } = useSelector((state: any) => state.fonts)
  const dispatch: any = useDispatch()


  useEffect(() => {
    dispatch(getFonts())
  }, [])

  return (
    <div className="main-wrapper">
      {isLoading ? <CardSkeleton amount={10} />
        :
        fonts_data.filter((font: any) => font.family.toLocaleLowerCase().indexOf(input_value) != -1).map((font: FontsTypes, index: number) => (
          <div className="font-content" key={index} >
            <div>
              <p>{font.family}</p>
              <strong> | &nbsp; {font.variants.length > 1 ? font.variants.length + " styles" : font.variants.length + " style"}</strong>
            </div>
            <h2 style={{ fontFamily: font.family + "," + font.category }}>Lorem ipsum dolor sit amet.</h2>
          </div>
        ))
      }
    </div>
  )
}

export default Main