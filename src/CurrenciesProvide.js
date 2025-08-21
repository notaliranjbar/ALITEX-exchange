import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [user , setUser] = useState(null)
  const login = async (username , password) => {
    const res = await axios.get(`http://localhost:3001/users?username=${username}&password=${password}`);
    if(res.data.length > 0){
      setUser(res.data[0]);
      return true
    }
    return false

  }

  return (
    <UsersContext.Provider value={{ ownedCurrencies, setOwnedCurrencies : safeSetOwnedCurrencies }}>
      {children}
    </UsersContext.Provider>
  );
};
export const useCurrencies = () => useContext(UsersContext);