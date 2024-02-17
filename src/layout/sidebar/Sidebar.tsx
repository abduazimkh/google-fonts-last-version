import "./Sidebar.scss";
import { GrLanguage } from "react-icons/gr";
import { TbIcons } from "react-icons/tb";
import { PiGraduationCap } from "react-icons/pi";
import { BsQuestionCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { FiMoon } from "react-icons/fi";
import { TfiShine } from "react-icons/tfi";


const Sidebar = ({ colorMode }: { colorMode: any }) => {
  const theme: any = useTheme();

  return (
    <div style={{ backgroundColor: `${theme.palette.mode == 'dark' ? "#777" : "#fff"}` }} className="sidebar-wrapper">
      <aside>
        <ul>
          <li>
            <NavLink style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }} to="/">
              <i>
                <p>A</p>
              </i>
              <span>Fonts</span>
            </NavLink>
          </li>

          <li>
            <NavLink style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }} to="/nato">
              <i><GrLanguage /></i>
              <span>Noto</span>
            </NavLink>
          </li>

          <li>
            <NavLink style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }} to="/icons">
              <i><TbIcons /></i>
              <span>Icons</span>
            </NavLink>
          </li>

          <li>
            <NavLink style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }} to="/knowladge">
              <i><PiGraduationCap /></i>
              <span>Knowladge</span>
            </NavLink>
          </li>

          <li>  
            <NavLink style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }} to="/faq">
              <i><BsQuestionCircle /></i>
              <span>Faq</span>
            </NavLink>
          </li>
        </ul>

        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <TfiShine style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }} /> : <FiMoon style={{ color: `${theme.palette.mode !== 'dark' ? "#333" : "#fff"}` }} />}
        </IconButton>
      </aside>
    </div>
  )
}

export default Sidebar