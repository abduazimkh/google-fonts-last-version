import "./Utils.scss";
import { Children } from "../types";

const Container = ({ children }: Children) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

const Dewider = ({ children, name, isOpen }: any) => {

  return (
    <div style={isOpen ? { display: "block" } : { display: "none" }} className={`dewider-${name}`}>
      {children}
    </div>
  )
}


export { Container, Dewider };