import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar.js";
import "./TradePage.css";
import TradePageHeader from "./TradePageHeader.js";
import { ReactComponent as ArrowIcon } from "./line-angle-left-icon.svg";
import TradePageFooter from "./TradePageFooter.js";

const TradePage = () => {
    const [currencies , setCurrencies] = useState([
    { name: "Bitcoin", price: null, icon: "/Icons/bitcoin-color-icon.svg" },
    { name: "Ethereum", price: null, icon: "/Icons/ethereum-eth-icon.svg" },
    { name: "Tether", price: null, icon: "/Icons/tether-usdt-icon.svg" },
    { name: "Uniswap", price: null, icon: "/Icons/uniswap-uni-icon.svg" },
    { name: "Litecoin", price: null, icon: "/Icons/litecoin-ltc-icon.svg" },
    { name: "Ripple", price: null, icon: "/Icons/ripple-xrp-icon.svg" },
    { name: "Cardano", price: null, icon: "/Icons/cardano-ada-icon.svg" },
    { name: "Solana", price: null, icon: "/Icons/solana-sol-icon.svg" },
    { name: "Polkadot", price: null, icon: "/Icons/polkadot-dot-icon.svg" },
    { name: "Dogecoin", price: null, icon: "/Icons/dogecoin-doge-icon.svg" },
    ])
    const [rightCurrencyName, setRightCurrencyName] = useState(null);
    const [rightAmount, setRightAmount] = useState("");
    const [rightPrice, setRightPrice] = useState(null);
    const [leftCurrencyName, setLeftCurrencyName] = useState(null);
    const [leftPrice, setLeftPrice] = useState(null);
    const [rightAmountDollar, setRightAmountDollar] = useState("");
    const [rate, setRate] = useState(null);
    const [calculatedLeftAmount, setCalculatedLeftAmount] = useState(null); 
    const [showSwapPopup, setShowSwapPopup] = useState(false);

  // Update prices and calculations whenever selections or amount change
  // Update left price individually
  useEffect(() => {
    const ids = currencies.map(c => c.name.toLowerCase()).join(",");
        
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`)
    .then(res => res.json())
    .then(data => {
        // update the prices in the currencies list
        const updatedCurrencies = currencies.map(c => ({
        ...c,
        price: data[c.name.toLowerCase()]?.usd || 0
        }));
        setCurrencies(updatedCurrencies);
    })
    .catch(err => console.error(err));
    }, []);
    useEffect(() => {
    if (leftCurrencyName) {
        const leftCurrency = currencies.find(c => c.name === leftCurrencyName);
        if (leftCurrency) setLeftPrice(leftCurrency.price);
    }
    }, [leftCurrencyName]);

// Update right price individually
    useEffect(() => {
    if (rightCurrencyName) {
        const rightCurrency = currencies.find(c => c.name === rightCurrencyName);
        if (rightCurrency) setRightPrice(rightCurrency.price);
    }
    }, [rightCurrencyName]);

// Calculate rate and left amount only when needed
   useEffect(() => {
        const rightCurrency = currencies.find(c => c.name === rightCurrencyName);
        const leftCurrency = currencies.find(c => c.name === leftCurrencyName);

        if (rightCurrency && leftCurrency) {
            setRightPrice(rightCurrency.price);
            setLeftPrice(leftCurrency.price);

            const newRate = rightCurrency.price / leftCurrency.price;
            setRate(newRate);
            setCalculatedLeftAmount(rightAmount * newRate);
        }
    }, [rightCurrencyName, leftCurrencyName, rightAmount]);
    const leftCurrency = currencies.find(c => c.name === leftCurrencyName);
    const rightCurrency = currencies.find(c => c.name === rightCurrencyName);

  return (
    <div className="trade-page">
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div className="trade-container">
            <TradePageHeader/>
        {/* Left Field */}
        <div className="trade-field left-field">
            <Searchbar
            currencies={currencies}
            // Pass selected currency name to TradePage
            selectedCurrencyName={leftCurrencyName}
            setSelectedCurrencyName={setLeftCurrencyName}
            />
            {leftCurrency && (
                <div className="selected-currency">
                <img src={leftCurrency.icon} alt={leftCurrency.name} className="currency-logo" />
                <p className="currency-name">{leftCurrency.name}</p>
                </div>
            )}
        <div className="trade-info">
            <p>Price: {leftPrice !== null ? leftPrice.toFixed(2) : ""}</p>
            <p>Rate: {rate !== null ? rate.toFixed(4) : ""}</p>
            <p>
                 Amount: {rightAmount !== "" && calculatedLeftAmount !== null ? calculatedLeftAmount.toFixed(4) : ""}
            </p>
        </div>

        </div>
        {/* Swap Button */}
        <div className="swap-button">
            <button onClick={() => {
            // Only show popup if left & right currencies and right amount are filled
            if (leftCurrencyName && rightCurrencyName && rightAmount) {
                setShowSwapPopup(true);
            }
            }}>
                <ArrowIcon className="swap-icon" />
            
            </button>
        </div>

        {/* Right Field */}
        <div className="trade-field right-field">
            <Searchbar
            currencies={currencies}
            selectedCurrencyName={rightCurrencyName}
            setSelectedCurrencyName={setRightCurrencyName}
            />
            {rightCurrency && (
                <div className="selected-currency">
                <img src={rightCurrency.icon} alt={rightCurrency.name} className="currency-logo" />
                <p className="currency-name">{rightCurrency.name}</p>
                </div>
            )}
            <div className="trade-info">
            <p>Price: {rightPrice !== null ? rightPrice.toFixed(2) : ""}</p>
            <p>
                Amount$:{" "}
                <input
                    type="number"
                    value={rightAmountDollar}   // NEW
                    onChange={(e) => {          // MODIFIED
                    const val = e.target.value === "" ? "" : Number(e.target.value);
                    setRightAmountDollar(val);   // NEW
                    // auto-fill normal amount based on price
                    setRightAmount(val && rightPrice ? val / rightPrice : ""); // NEW
                    }}
                    min="0"
                    step="any"
                    className="trade-amount"
                />
            </p>

            <p>
                Amount:{" "}
                <input
                type="number"
                value={rightAmount}
                onChange={(e) => {
                    const val = e.target.value === "" ? "" : Number(e.target.value);
                    setRightAmount(val);                    // <- updates rightAmount
                    setRightAmountDollar(val && rightPrice ? val * rightPrice : ""); // <- auto updates amount$
                }}
                min="0"
                step="any"
                className="trade-amount"
                />
            </p>
            </div>
        </div>
        {showSwapPopup && (
        <div className="swap-popup-overlay">
            <div className="swap-popup">
            <p>
                Are you sure you want to swap <strong>{rightAmount || 0}</strong> {rightCurrencyName} ($
                {rightAmountDollar || 0}) for <strong>{calculatedLeftAmount || 0}</strong> {leftCurrencyName} (${rightPrice || 0})?
            </p>
            <div className="swap-popup-buttons">
                <button 
                className="yes-btn" 
                onClick={() => {
                    alert("Swapped successfully!");
                    setShowSwapPopup(false);
                }}
                >
                Yes
                </button>
                <button 
                className="no-btn" 
                onClick={() => setShowSwapPopup(false)}
                >
                No
                </button>
            </div>
            </div>
        </div>
        )}
        </div>
        <TradePageFooter/>
    </div>
  );
};

export default TradePage;
