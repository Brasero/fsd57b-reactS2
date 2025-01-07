import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home.jsx";
import Game from "./page/Game.jsx";
import Stats from "./page/Stats.jsx";
import Rules from "./page/Rules.jsx";

function App() {

  return (
    <>
     <h1>YAM</h1>
     <Routes>
      <Route path={"/"} element={<Home />}>
       <Route path={"/"} element={<Game />} />
       <Route path={"stats"} element={<Stats />} />
       <Route path={"rules"} element={<Rules />} />
      </Route>
     </Routes>
    </>
  )
}

export default App