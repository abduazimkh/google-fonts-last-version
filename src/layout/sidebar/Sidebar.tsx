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
  const theme = useTheme();

  return (
    <div className="sidebar-wrapper">
      <aside>
        <ul>
          <li>
            <NavLink to="/">
              <i>
                <p>A</p>
              </i>
              <span>Fonts</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <i><GrLanguage /></i>
              <span>Noto</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <i><TbIcons /></i>
              <span>Icons</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <i><PiGraduationCap /></i>
              <span>Knowladge</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <i><BsQuestionCircle /></i>
              <span>Faq</span>
            </NavLink>
          </li>
        </ul>


        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode !== 'dark' ? <FiMoon /> : <TfiShine />}
        </IconButton>
      </aside>
    </div>
  )
}

export default Sidebar