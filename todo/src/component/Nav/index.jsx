// path: todo/src/component/Nav/index.jsx
import "./style.scss";
import {NavLink} from "react-router-dom";

const Nav = () => {
 
 const checkIsActive = ({isActive}) => {
  return {
   color: isActive ? "orange" : ""
  }
 }
 
 return (
  <nav className="Nav">
   <ul>
    <li><NavLink style={checkIsActive} to={"/"}>Liste</NavLink></li>
    <li><NavLink style={checkIsActive} to={"/add"}>Ajouter une todo</NavLink></li>
   </ul>
  </nav>
 )
}

export default Nav