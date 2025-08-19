import React, { useState } from "react";
import "./Searchbar.css"; 
const currencies = [
  { name: "Bitcoin", icon: "/SearchbarIcons/bitcoin-black-icon.svg" },
  { name: "Ethereum", icon: "/SearchbarIcons/ethereum-eth-icon.svg" },
  { name: "Tether", icon: "/SearchbarIcons/tether-usdt-icon.svg" },
  { name: "Uniswap", icon: "/SearchbarIcons/uniswap-uni-icon.svg" },
  { name: "Litecoin", icon: "/SearchbarIcons/litecoin-ltc-icon.svg" },
];

const Searchbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const filtered =
    query.length > 0
      ? currencies.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  const handleSelect = (currency) => {
    setSelected(currency);
    setSearchOpen(false);
    setQuery(""); 
  };

  return (
    <div className="search-bar">
      <img src="/img/search-icon-png-9969.png" className="search-icon"></img>
      <input
        type="text"
        value={query}
        onClick={() => setSearchOpen(true)}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={selected ? selected.name : "Search currencies..."}
        className="search-input"
      />
      {searchOpen && query.length > 0 && (
        <div className="popup">
          <div className="results">
            {filtered.length > 0 ? (
              filtered.map((currency) => (
                <div
                  key={currency.name}
                  className="result-item"
                  onClick={() => handleSelect(currency)}
                >
                  <img src={currency.icon} alt={currency.name} />
                  <span>{currency.name}</span>
                </div>
              ))
            ) : (
              <p className="no-results">No results found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;