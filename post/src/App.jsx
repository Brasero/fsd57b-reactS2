import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./page/Home.jsx";
import Detail from "./page/Detail.jsx";

function App() {
 
  return (
    <>
      <h1>React Post</h1>
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/detail/:id"} element={<Detail />} />
    </Routes>
    </>
  )
}

export default App