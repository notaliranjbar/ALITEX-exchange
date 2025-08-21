import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [user , setUser] = useState(null)
  const login = async (username , password) => {
    const res = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`);
    if(res.data.length > 0){
      setUser(res.data[0]);
      return true
    }
    return false

  }
  const signup = async ({username , password , phoneNumber}) => {
    const newUser = {
    id : username,
    username: username,
    phone: phoneNumber, 
    password: password, 
    ownedCurrencies: [{ name: "tether", amountOwned: 1000 }] 
  };
    const res = await axios.post("http://localhost:5000/users", newUser);
    setUser(res.data);
  }
  const updateOwnedCurrencies = async (newCurrencies) => {
    if (!user) return;
    const updatedUser = { ...user, ownedCurrencies: newCurrencies };
    await axios.put(`http://localhost:5000/users/${user.id}`, updatedUser);
    setUser(updatedUser); 
  };
  const updateUserUsername = async (newUsername) =>{
    if(!user) return;
    const updatedUser = {...user , username : newUsername};
    await axios.put(`http://localhost:5000/users/${user.id}` , updatedUser);
  }
  const updateUserPhonenumber = async (newPhonenumber) =>{
    if(!user) return;
    const updatedUser = {...user , phoneNumber : newPhonenumber};
    await axios.put(`http://localhost:5000/users/${user.id}` , newPhonenumber);
  }
  const updateUserPassword = async (newPassword) =>{
    if(!user) return;
    const updatedUser = {...user , password : newPassword};
    await axios.put(`http://localhost:5000/users/${user.id}` , updatedUser);
  }
 useEffect(() => {
  if (!user) return;
  const filteredCurrencies = user.ownedCurrencies
    ? user.ownedCurrencies.filter(c => (Number(c.amountOwned) || 0) > 0)
    : [];
  const updatedUser = { ...user, ownedCurrencies: filteredCurrencies };
  if (JSON.stringify(filteredCurrencies) !== JSON.stringify(user.ownedCurrencies)) {
        axios.put(`http://localhost:5000/users/${user.id}`, updatedUser)
          .then(() => setUser(updatedUser))
          .catch(err => console.error(err));
      }
    }, [user?.ownedCurrencies]);

  return (
    <UsersContext.Provider value={{ user , login , signup , updateOwnedCurrencies , updateUserUsername , updateUserPhonenumber , updateUserPassword }}>
      {children}
    </UsersContext.Provider>
  );
};
export const useUsers = () => useContext(UsersContext);