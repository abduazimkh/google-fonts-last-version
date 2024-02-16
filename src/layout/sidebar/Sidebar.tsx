import "./Sidebar.scss";
import { GrLanguage } from "react-icons/gr";
import { TbIcons } from "react-icons/tb";
import { PiGraduationCap } from "react-icons/pi";
import { BsQuestionCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
      </aside>
    </div>
  )
}

export default Sidebar