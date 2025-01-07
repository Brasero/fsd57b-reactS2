import {NavLink} from "react-router-dom";

const checkIsActive = ({isActive}) => {
 return {
  color: isActive ? "orange" : ""
 }
}

const Nav = () => {
 return <nav>
  <ul>
   <li>
    <NavLink style={checkIsActive} to={"/"}>Home</NavLink>
   </li>
   <li>
    <NavLink style={checkIsActive} to={"/user/testeur"}>User</NavLink>
   </li>
  </ul>
 </nav>
}


export default Nav