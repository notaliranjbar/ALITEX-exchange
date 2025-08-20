import { createContext, useContext, useState } from "react";
const CurrenciesContext = createContext();

export const CurrenciesProvider = ({ children }) => {
  const [ownedCurrencies, setOwnedCurrencies] = useState([
    { name: "tether", amount : 1000 },
  ]);

  return (
    <CurrenciesContext.Provider value={{ ownedCurrencies, setOwnedCurrencies }}>
      {children}
    </CurrenciesContext.Provider>
  );
};
export const useCurrencies = () => useContext(CurrenciesContext);