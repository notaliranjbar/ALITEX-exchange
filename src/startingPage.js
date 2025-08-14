import React from "react";
import { useState, useEffect } from "react";
import currenciesIcons from "./currencies.json";
const StartingPage= ()=> {
    const [items , setItems] = useState([])
    useEffect(() =>{
        const randomPositionGenerator = () =>({
            top: Math.floor(Math.random() * (window.innerHeight - 150)),
            left: Math.floor(Math.random() * (window.innerWidth - 150)),
        })
        const priceFetcher = async ()=>{
            try{
                    const response = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,uniswap,tether&vs_currencies=usd&include_24hr_change=true"
                )
                const pricesData = await response.json();
                const currenciesWithPrice = currenciesIcons.map(item => ({
                    ...item , 
                    price : pricesData[item.id]?.usd||0 ,
                    dailyChange : pricesData[item.id]?.usd_24h_change || 0,
                    position : randomPositionGenerator(),

                }))
                setItems(currenciesWithPrice);
            }catch(err){
                console.error("Failed to fetch prices:", err);
            }
        }
        priceFetcher();
            const intervalPriceFetcher = setInterval(priceFetcher , 60000)
            return () => clearInterval(intervalPriceFetcher)
        

    }, [])
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        {items.map(item => (
            <div
            key={item.id}
            style={{
                position: "absolute",
                left: item.position.left,
                top: item.position.top,
                textAlign: "center",
                border: "1px solid #ccc",
                padding: "8px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                width: "120px"
            }}
            >
            <img src={item.image} alt={item.id} width={50} />
            <p>{item.id}</p>
            <p>${item.price}</p>
            <p style={{ color: item.dailyChange >= 0 ? "green" : "red" }}>
                {item.dailyChange.toFixed(2)}%
            </p>
            </div>
        ))}
        </div>
    );
}
export default StartingPage;