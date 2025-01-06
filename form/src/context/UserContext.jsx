import {createContext, useContext} from "react";
import useUserReducer from "../store/index.jsx";

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
 
 const value = useUserReducer()
 
 return <UserContext.Provider value={value}>
  {children}
 </UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext);


export default UserContextProvider