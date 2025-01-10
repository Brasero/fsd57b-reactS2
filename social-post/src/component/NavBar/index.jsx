// path: social-post/src/component/NavBar/index.jsx
import "./style.scss";
import {Link, NavLink} from "react-router-dom";
import {selectUser} from "../../store/selector/user-selector.js";
import {useSelector} from "react-redux";

const NavBar = () => {
 
 
 
 const user = useSelector(selectUser)
 
 return (<div className="NavBar">
   <Link to={"/"}><h1>Social Posts</h1></Link>
   <div className={'NavBar__user'}><span>Bonjour</span> <span>{user.username}</span></div>
   <nav className={'NavBar__nav'}>
    <ul>
     <li><NavLink to={"/"}>Fil d'actualités</NavLink></li>
     <li><NavLink to={"/addPost"}>Exprimez-vous</NavLink></li>
    </ul>
   </nav>
  </div>)
}

export default NavBar