import {NavLink} from "react-router-dom";
import "./nav.css";

const isActive = ({isActive}) => {
 return {
  color: isActive ? "orange" : ""
 }
}
const Nav = () => {
 
 return (
  <nav>
   <ul className={"nav"}>
    <li className={"nav__link"}>
     <NavLink style={isActive} to={"/"}>Jeu</NavLink>
    </li>
    <li className={"nav__link"}>
     <NavLink style={isActive} to={"/rules"}>Règles</NavLink>
    </li>
   </ul>
  </nav>
 )
}

export default Nav