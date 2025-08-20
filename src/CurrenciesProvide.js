import { createContext, useContext, useState } from "react";
const CurrenciesContext = createContext();

export const CurrenciesProvider = ({ children }) => {
  const [ownedCurrencies, setOwnedCurrencies] = useState([
    { name: "tether", ownedAmount : 1000 , icon : "/Icons/tether-usdt-icon.svg"},
  ]);

  return (
    <CurrenciesContext.Provider value={{ ownedCurrencies, setOwnedCurrencies }}>
      {children}
    </CurrenciesContext.Provider>
  );
};
export const useCurrencies = () => useContext(CurrenciesContext);