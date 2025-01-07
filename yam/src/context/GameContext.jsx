import {createContext, useContext} from "react";
import {useGameReducer} from "../store/gameReducer.jsx";

const GameContext = createContext();

const GameProvider = ({children}) => {
 
 const context = useGameReducer()
 
 return <GameContext.Provider value={context}>
  {children}
 </GameContext.Provider>
}

export const useGameContext = () => useContext(GameContext);

export default GameProvider;