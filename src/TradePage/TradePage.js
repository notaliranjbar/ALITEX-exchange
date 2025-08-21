import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar.js";
import "./TradePage.css";
import TradePageHeader from "./TradePageHeader.js";
import { ReactComponent as ArrowIcon } from "./line-angle-left-icon.svg";
import TradePageFooter from "./TradePageFooter.js";
import { useCurrencies } from "../CurrenciesProvide";

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
    const {ownedCurrencies , setOwnedCurrencies} = useCurrencies();
    const [rightCurrencyName, setRightCurrencyName] = useState(null);
    const [rightAmount, setRightAmount] = useState("");
    const [rightPrice, setRightPrice] = useState(null);
    const [leftCurrencyName, setLeftCurrencyName] = useState(null);
    const [leftPrice, setLeftPrice] = useState(null);
    const [rightAmountDollar, setRightAmountDollar] = useState("");
    const [rate, setRate] = useState(null);
    const [calculatedLeftAmount, setCalculatedLeftAmount] = useState(null); 
    const [showSwapPopup, setShowSwapPopup] = useState(false);
    const [ownedAmount , setownedAmount] = useState(null);
  useEffect(() => {
    const ids = currencies.map(c => c.name.toLowerCase()).join(",");
        
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`)
    .then(res => res.json())
    .then(data => {
        const updatedCurrencies = currencies.map(c => ({
        ...c,
        price: data[c.name.toLowerCase()]?.usd || 0
        }));
        setCurrencies(updatedCurrencies);
    })
    .catch(err => console.error(err));
    }, []);
  useEffect(() => {
    const ids = ownedCurrencies.map(c => c.name.toLowerCase()).join(",");
        
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`)
    .then(res => res.json())
    .then(data => {
        const updatedCurrencies = ownedCurrencies.map(c => ({
        ...c,
        price: data[c.name.toLowerCase()]?.usd || 0,
        icon : `/Icons/${(c.name).toLowerCase()}.svg`
        }));
        setOwnedCurrencies(updatedCurrencies);
    })
    .catch(err => console.error(err));
    }, []);
    useEffect(() => {
    if (leftCurrencyName) {
        const leftCurrency = currencies.find(c => c.name === leftCurrencyName);
        if (leftCurrency) setLeftPrice(leftCurrency.price);
    }
    }, [leftCurrencyName]);
    useEffect(() => {
    if (rightCurrencyName) {
        const rightCurrency = ownedCurrencies.find(c => c.name === rightCurrencyName);
        if (rightCurrency) setRightPrice(rightCurrency.price);
    }
    }, [rightCurrencyName]);
    useEffect(() => {
        if (rightCurrencyName) {
            const found = ownedCurrencies.find(c => c.name === rightCurrencyName);
            setownedAmount(found ? Number(found.ownedAmount) : 0);
        } else {
            setownedAmount(null);
        }
        }, [rightCurrencyName, ownedCurrencies]);
   useEffect(() => {

    if (rightCurrency && leftCurrency) {
        setRightPrice(rightCurrency.price);
        setLeftPrice(leftCurrency.price);

        const newRate = rightCurrency.price / leftCurrency.price;
        setRate(newRate);
        setCalculatedLeftAmount(rightAmount * newRate);
    }
    }, [rightCurrencyName, leftCurrencyName, rightAmount]);
    const leftCurrency = currencies.find(c => c.name === leftCurrencyName);
    const rightCurrency = ownedCurrencies.find(c => c.name === rightCurrencyName);

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
        <div className="trade-field left-field">
            <Searchbar
            currencies={currencies}

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
            <p>Rate: {rate !== null ? rate.toFixed(2) : ""}</p>
            <p>
                 Amount: {rightAmount !== "" && calculatedLeftAmount !== null ? calculatedLeftAmount.toFixed(4) : ""}
            </p>
        </div>

        </div>
        <div className="swap-button">
            <button
                onClick={() => {
                if (leftCurrencyName && rightCurrencyName && rightAmount) {
                    // Ensure the rightAmount does not exceed ownedAmount
                    if (rightCurrency && rightCurrency.ownedAmount) {
                    if (rightAmount > rightCurrency.ownedAmount) {
                        setRightAmount(rightCurrency.ownedAmount);
                        setRightAmountDollar((rightCurrency.ownedAmount * rightPrice).toFixed(2));
                    }
                    }

                    setShowSwapPopup(true);
                }
                }}
            >
                <ArrowIcon className="swap-icon" />
            </button>
        </div>

        <div className="trade-field right-field">
            <Searchbar
            currencies={ownedCurrencies}
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
            <p>amount owned: {ownedAmount !== null ? ownedAmount.toFixed(2) : ""}</p>
            <p>
                Amount$:{" "}
                <input
                    type="number"
                    value={rightAmountDollar}
                    onChange={(e) => { 
                    const val = e.target.value === "" ? "" : Number(e.target.value);
                    setRightAmountDollar(val);

                    setRightAmount(val && rightPrice ? (val / rightPrice).toFixed(2) : "");
                    }}
                    min="0"
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
                    setRightAmount(val);
                    setRightAmountDollar(val && rightPrice ? (val * rightPrice).toFixed(2) : "");
                }}
                min="0"
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
                    setOwnedCurrencies((prev) => {
                    let updated = [...prev];

                    // 1. Subtract from rightCurrency
                    if (rightCurrencyName && rightAmount) {
                        updated = updated.map((c) => {
                        if (c.name === rightCurrencyName) {
                            const current = Number(c.ownedAmount) || 0; // 🔹 use ownedAmount
                            const toSubtract = Number(rightAmount) || 0; // 🔹 convert to number
                            return { ...c, ownedAmount: current - toSubtract }; // 🔹 update ownedAmount
                        }
                        return c;
                        });
                    }

                    // 2. Add to leftCurrency (or create new if missing)
                    if (leftCurrencyName && calculatedLeftAmount) {
                        const toAdd = Number(calculatedLeftAmount) || 0;
                        const existing = updated.find((c) => c.name === leftCurrencyName);

                        if (existing) {
                        updated = updated.map((c) =>
                            c.name === leftCurrencyName
                            ? { ...c, ownedAmount: (Number(c.ownedAmount) || 0) + toAdd } // 🔹 use ownedAmount
                            : c
                        );
                        } else {
                        updated.push({
                            name: leftCurrencyName,
                            ownedAmount: toAdd, // 🔹 use ownedAmount
                            price: leftPrice || 0,
                        });
                        }
                    }

                    return updated;
                    });

                    // Reset fields
                    setRightAmount("");
                    setRightAmountDollar("");
                    setCalculatedLeftAmount(null);
                    setLeftCurrencyName(null);
                    setRightCurrencyName(null);

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
