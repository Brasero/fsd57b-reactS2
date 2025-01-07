import Nav from "../component/Nav.jsx";
import {Outlet} from "react-router-dom";

const Home = () => {
 return (
  <>
   <Nav />
   <Outlet />
  </>
 )
}

export default Home;