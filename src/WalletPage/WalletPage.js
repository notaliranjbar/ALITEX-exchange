import React from "react";
import "./WalletPage.css"; 
import WalletPageHeader from "./WalletPageHeader";
import WalletPageFooter from "./WalletPageFooter";
import { useUsers } from "../UsersProvider"; 

const WalletPage = () => {
  const { user, updateOwnedCurrencies } = useUsers();
  const ownedCurrencies = user?.ownedCurrencies || [];
  return (
    <div className="wallet-page" style={{backgroundColor : "#2d2e2d"}}>
        <WalletPageHeader/>
        <div className="wallet-container">
        <h2 className="wallet-title">My Wallet</h2>
        <div className="wallet-list">
            {ownedCurrencies.length > 0 ? (
            ownedCurrencies.map((currency, index) => (
                <div key={index} className="wallet-item">
                <img
                    src={`/Icons/${currency.name.toLowerCase()}.svg`} 
                    alt={currency.name}
                    className="wallet-icon"
                />
                <div className="wallet-info">
                    <p className="wallet-name">{currency.name}</p>
                    <p className="wallet-amount">Amount: {(currency.amountOwned.toFixed(4))}</p>
                    <p className="wallet-price">Price: ${currency.price}</p>
                </div>
                <button className="wallet-item-trade">
                    Trade
                </button>
                </div>
            ))
            ) : (
            <p className="wallet-empty">No currencies in wallet</p>
            )}
        </div>
        </div>
        <WalletPageFooter/>
    </div>
  );
};

export default WalletPage;
