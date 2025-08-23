import React from "react";
import "./WalletPage.css"; 
import { useUsers } from "../UsersProvider"; 
import WalletPageFooter from "./WalletPageFooter";
import WalletPageHeader from "./WalletPageHeader";
import { useNavigate } from "react-router-dom";
const WalletPage = () => {
  const { user, updateOwnedCurrencies } = useUsers();
  const ownedCurrencies = user?.ownedCurrencies || [];
  const navigate = useNavigate();
  return (
    <div className="wallet-page" style={{backgroundColor : "#2d2e2d"}}>
        <WalletPageHeader/>
        <div className="wallet-container">
        <h2 className="wallet-title">My Wallet</h2>
        <div className="wallet-list">
            {ownedCurrencies.length > 0 ? (
            ownedCurrencies.map((currency, index) => (
                <div key={index} className="wallet-item" onClick={() =>navigate("/trade", { state: { selectedRightCurrency: currency.name } })}>
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