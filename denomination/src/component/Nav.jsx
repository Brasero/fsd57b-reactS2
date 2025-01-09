import {NavLink} from "react-router-dom";
import "../assets/css/nav.css";

const Nav = () => {
 const checkIsActive = ({isActive}) => {
  return {
   color: isActive ? "orange" : ""
  }
 }
 
 return <nav>
  <ul>
   <li><NavLink style={checkIsActive} to={"/"}>Home</NavLink></li>
   <li><NavLink style={checkIsActive} to={"/denomination"}>Denominations</NavLink></li>
  </ul>
 </nav>
}

export default Nav