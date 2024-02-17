import "./Utils.scss";
import { Children } from "../types";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="loader"></div>
  )
}

const Container = ({ children }: Children) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

const Dewider = ({ children, name, isOpen }: any) => {

  return (
    <div style={isOpen ? { transform: "translateX(0%)" } : { transform: "translateX(-200%)" }} className={`dewider-${name}`}>
      {children}
    </div>
  )
}

const CardSkeleton = ({ amount }: { amount: any }) => {
  return new Array(amount).fill("").map((_: any, index: number) => (
    <div className="font-content font-content-sceleton" style={{ border: "none" }} key={index}>
      <Skeleton count={1} style={{ padding: "30px 0" }} />
      <Skeleton count={3} style={{ marginTop: "10px" }} />
    </div>
  ));
};


export { Container, Dewider, CardSkeleton, Loading };