import {NavLink, Route, Routes} from "react-router-dom";

const Category = () => {
 
 return <>
  <nav>
   <ul>
    <li><NavLink to={"/category"}>Category Home</NavLink></li>
    <li><NavLink to={"/category/computer"}>Computer</NavLink></li>
   </ul>
  </nav>
  <Routes>
   <Route path={"/"} element={<div>Category home</div>} />
   <Route path={"computer"} element={<div>Computer home</div>} />
  </Routes>
 </>
}

export default Category