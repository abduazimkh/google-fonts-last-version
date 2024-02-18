import "./Cart.scss";
import { Container } from "@mui/material"
import { Button } from "antd";
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";

const Cart = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) => {
  setIsOpen(false)
  const { cart } = useSelector((state: RootState) => state.cartAll)

  console.log(cart)

  return (
    <>
      <div className="cart__wrapper">
        <h2>{cart.length} font family selected</h2>

        <Container>
          {
            cart.length <= 0 ?
              <div className="empty-wishlist">
                <h1><pre>{`(>_<)`}</pre></h1>
                <p>You don't have any fonts yet.
                  Choose a font to get started.</p>
                <Link to="/">
                  <Button style={{ border: "1px solid dodgerblue !important" }}>Browse fonts</Button>
                </Link>
              </div>
              :
              <div className="cart-box">
                <div className="cart-item">
                  wefewf
                </div>
                <div className="cart-item">
                  ewfewfew
                </div>
              </div>
          }
        </Container>
      </div>
    </>
  )
}

export default Cart