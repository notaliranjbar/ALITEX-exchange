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
  const signup = async (username , password , phoneNumber) => {
    const newUser = {username , password , phoneNumber , ownedCurrencies : [{name : "tether" , amountOwned : 1000}]}
    const res = await axios.post("http://localhost:3001/users", newUser);
    setUser(res.data);// to log in when the sign up finished automatically
  }
  const updateOwnedCurrencies = async (newCurrencies) => {
    if (!user) return;
    const updatedUser = { ...user, ownedCurrencies: newCurrencies };
    await axios.put(`http://localhost:3001/users/${user.id}`, updatedUser);
    setUser(updatedUser); // update local state
  };
  useEffect(() => {
    if (!user) return;
    const filteredCurrencies = user.ownedCurrencies.filter(c => (Number(c.amountOwned) || 0) > 0);
    if (filteredCurrencies.length !== user.ownedCurrencies.length) {
      const updatedUser = { ...user, ownedCurrencies: filteredCurrencies };
      axios.put(`http://localhost:3001/users/${user.id}`, updatedUser)
        .then(() => setUser(updatedUser))
        .catch(err => console.error(err));
    }
  }, [user?.ownedCurrencies]); 

  return (
    <UsersContext.Provider value={{ user , login , signup , updateOwnedCurrencies }}>
      {children}
    </UsersContext.Provider>
  );
};
export const useCurrencies = () => useContext(UsersContext);