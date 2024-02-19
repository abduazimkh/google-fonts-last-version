import "./Cart.scss";
import { Container } from "@mui/material"
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { remuveToCart } from "../../redux/features/cart-slice";
import { useTheme } from "@emotion/react";

const Cart = ({ setIsOpen }: { isOpen: boolean, setIsOpen: any }) => {
  setIsOpen(false)
  const { cart } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const theme: any = useTheme();


  return (
    <>
      <div className="cart__wrapper">
        {
          cart.length > 0 && <h2 style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`, }} className="wishlist-length">{cart.length} font family selected</h2>
        }
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
                <div className="cart-item--wrapper">
                  <div className="cart-item--button">
                    <Button>Share</Button>
                    <Button>Remuve All</Button>
                  </div>
                  <div className="cart-item--list">
                    {
                      cart.map((font: any, index: number) => (
                        <div className="cart-box" key={index}>
                          <div className="item-top-content">
                            <b style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`, }} >{font.family}</b>
                            <div>
                              <button onClick={() => dispatch(remuveToCart(font))} >del</button>
                              <button>few</button>
                            </div>
                          </div>
                          <h3 style={{
                            color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}`,
                            fontFamily: font.family + "," + font.category,
                            fontSize: "4rem",
                            textAlign: "center"
                          }} >Lorem ipsum dolor sit amet. Hello world lorem se</h3>

                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="cart-item">
                  <Button>Get embded code</Button>
                  <Button>Download all</Button>

                  <Link to="see">See how to use</Link>
                </div>
              </div>
          }
        </Container>
      </div>
    </>
  )
}

export default Cart