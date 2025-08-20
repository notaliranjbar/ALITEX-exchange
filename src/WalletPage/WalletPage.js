import React from "react";
import "./WalletPage.css"; 
import WalletPageHeader from "./WalletPageHeader";
import WalletPageFooter from "./WalletPageFooter";
const ownedCurrencies =[
  { name: "Bitcoin", amount: 2.34, price: 67000 },
  { name: "Ethereum", amount: 10, price: 3500 },
  { name: "Tether", amount: 5000, price: 1 },
  { name: "Uniswap", amount: 120, price: 6.5 },
  { name: "Litecoin", amount: 50, price: 180 },
  { name: "Ripple", amount: 2000, price: 0.55 },
  { name: "Cardano", amount: 3500, price: 0.40 },
  { name: "Solana", amount: 75, price: 140 },
  { name: "Polkadot", amount: 300, price: 7.2 },
  { name: "Dogecoin", amount: 15000, price: 0.08 }
];

const WalletPage = () => {
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
                    <p className="wallet-amount">Amount: {currency.amount}</p>
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
