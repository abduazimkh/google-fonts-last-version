import "./Utils.scss";
import { Children } from "../types";
import Skeleton from "react-loading-skeleton";


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

const CardSkeleton = ({ amount }) => {
  return new Array(amount).fill("").map((skeleton, index) => (
    <div className="font-content" style={{ border: "none" }} key={index}>
      <Skeleton count={1} style={{ padding: "30px 0" }} />
      <Skeleton count={3} style={{ marginTop: "7px" }} />
    </div>
  ));
};


export { Container, Dewider, CardSkeleton };