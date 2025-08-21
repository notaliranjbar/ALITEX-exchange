import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/users?username=${username}&password=${password}`
      );
      if (res.data.length > 0) {
        setUser(res.data[0]);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  };

  const signup = async ({ username, password, phone }) => {
    const newUser = {
      id: username, 
      username,
      phone,
      password,
      ownedCurrencies: [{ name: "tether", amountOwned: 1000 }],
    };
    const res = await axios.post("http://localhost:5000/users", newUser);
    setUser(res.data);
  };

  const updateUser = async (updatedUser) => {
  if (!user) return;
  try {
    const res = await axios.put(
      `http://localhost:5000/users/${encodeURIComponent(user.id)}`,
      updatedUser
    );
    setUser(res.data);
  } catch (err) {
    console.error("Update error:", err);
  }
  };


  const updateUserUsername = async (newUsername) => {
    if (!user) return;
    await updateUser({ ...user, username: newUsername });
  };

  const updateUserPhonenumber = async (newPhone) => {
    if (!user) return;
    await updateUser({ ...user, phone: newPhone });
  };

  const updateUserPassword = async (newPassword) => {
    if (!user) return;
    await updateUser({ ...user, password: newPassword });
  };

  const updateOwnedCurrencies = async (newCurrencies) => {
    if (!user) return;
    await updateUser({ ...user, ownedCurrencies: newCurrencies });
  };

  useEffect(() => {
    if (!user) return;
    const filteredCurrencies = user.ownedCurrencies
      ? user.ownedCurrencies.filter((c) => Number(c.amountOwned) > 0)
      : [];
    if (JSON.stringify(filteredCurrencies) !== JSON.stringify(user.ownedCurrencies)) {
      updateOwnedCurrencies(filteredCurrencies);
    }
  }, [user?.ownedCurrencies]);

  return (
    <UsersContext.Provider
      value={{
        user,
        login,
        signup,
        updateOwnedCurrencies,
        updateUserUsername,
        updateUserPhonenumber,
        updateUserPassword,
        updateUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => useContext(UsersContext);
