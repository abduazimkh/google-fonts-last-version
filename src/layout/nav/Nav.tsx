import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/fonts-logo.png";
import { IoIosSearch } from "react-icons/io";
import Badge from '@mui/material/Badge';
import { SlBag } from "react-icons/sl";
import { SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputValue, searchSelect } from "../../redux/features/fonts-slice";
import { useTheme } from "@emotion/react";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}



const items: MenuProps['items'] = [
  getItem('Sort by', 'sub8', <SettingOutlined />, [
    getItem('alpha', 'alpha'),
    getItem('date', 'date'),
    getItem('popularity', 'popularity'),
    getItem('style', 'style'),
    getItem('trending', 'trending'),
    getItem('name', ''),
  ]),
];

const Nav = () => {
  const [inputvalue, setInputValue] = useState<string>("");
  const dispatch = useDispatch()
  const theme: any = useTheme()
  const { pathname }: any = useLocation()
  const { cart } = useSelector((state: any) => state.cart);

  useEffect(() => {
    dispatch(inputValue(inputvalue.toLocaleLowerCase()))
  }, [inputvalue])

  const onClick: MenuProps['onClick'] = (e) => {
    dispatch(searchSelect(e.key))
  };

  useEffect(() => {
    document.body.setAttribute('style', theme.palette.mode === 'dark' ? "background-color: #333" : "background-color: #fff")
  }, [theme])

  return (
    <>
      <div className="navigation">
        <nav>
          <Link className="nav-logo" to="/">
            {theme.palette.mode == 'dark' ?
              <div id="dark-logo" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.7rem 0" }}>
                <img width={40} src="https://seeklogo.com/images/G/google-fonts-logo-185D843C0C-seeklogo.com.png" alt="image logo" />
                <h1 style={{ color: "#fff", fontFamily: "sans-serif", fontSize: "1.5rem" }} >Google Fonts</h1>
              </div>
              :
              <img className="first" src={logo} alt="google-fonts logo" />
            }
            <img className="second" src="https://seeklogo.com/images/G/google-fonts-logo-185D843C0C-seeklogo.com.png" alt="image logo" />
          </Link>

          {
            !pathname.includes("/cart") ?
              <>
                <form className="nav-form__wrapper">
                  <i><IoIosSearch /></i>
                  <input value={inputvalue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Search fonts" />
                  <div className="nav-select">
                    <Menu
                      onClick={onClick}
                      items={items}
                    />
                  </div>
                </form>

                {
                  cart.length > 0 ?
                    <Badge color="primary" badgeContent={cart.length} >
                      <Link to="/cart">
                        <i className="cart"><SlBag /></i>
                      </Link>
                    </Badge>
                    :
                    <Link to="/cart">
                      <i className="cart"><SlBag /></i>
                    </Link>
                }
              </> :
              <Link to="/cart">
                <i className="cart"><SlBag /></i>
              </Link>
          }



        </nav>
      </div>
    </>
  )
}

export default Nav;