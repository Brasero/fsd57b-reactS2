import './App.css'
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./page/Home.jsx";
import User from "./page/User.jsx";
import Nav from "./component/Nav.jsx";
import Params from "./page/Params.jsx";
import Category from "./page/Category.jsx";
import Dashboard from "./page/Dashboard.jsx";

function App() {

 // /user?name=matthieu&age=55
 
  return (
    <>
     <Nav />
     <h1>Nav Bar</h1>
     <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/params"} element={<Params />} />
      <Route path={"/user/:name"} element={<User />} />
      <Route path={"/category/*"} element={<Category />} />
      <Route path={"/dashboard"} element={<Dashboard />}>
       <Route path={"message"} element={<div>Message</div>} />
      </Route>
      <Route path={"/workshop"} element={<Navigate to={"/"} replace={false} />} />
      
      
      <Route path={"*"} element={<div>404 not found</div>} />
     </Routes>
    </>
  )
}

export default App