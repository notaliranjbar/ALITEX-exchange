import React from "react";
import { useState, useEffect } from "react";
import currenciesIcons from "./currencies.json";
import CurrenciesIcons from "./currenciesIcons.js";
import Login from "./Login.js";
const positionsList = [
{ top: 60, left: 870 },
{ top: 380, left: 900 },
{ top: 200, left: 200 },
{ top: 630, left: 1100 },
{ top: 820, left: 700 },
{ top: 200, left: 1250 },
{ top: 600, left: 150 },
{ top: 380, left: 600 },
];
const StartingPage= ()=> {
    const [items , setItems] = useState([])
    useEffect(() =>{
        const availablePositions = [...positionsList];
        const randomPositionGenerator = ()=>{
            if (availablePositions.length === 0) return { top: 0, left: 0 };
            const randomIndex = Math.floor(Math.random() * availablePositions.length);
            const selectedPosition =  availablePositions[randomIndex];
            availablePositions.splice(randomIndex, 1);
            return {
                top: Math.max(selectedPosition.top, 100),
                left: selectedPosition.left
            };
        }
        const currenciesWithPosition = currenciesIcons.map(item => ({
            ...item,
            position:randomPositionGenerator()
        }))
        const priceFetcher = async ()=>{
            try{
                const response = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,uniswap,tether,shiba-inu,cardano,pepe&vs_currencies=usd&include_24hr_change=true"
                )
                const pricesData = await response.json();
                const currenciesWithPrice = currenciesWithPosition.map(item => ({
                    ...item , 
                    price : pricesData[item.id]?.usd||0 ,
                    dailyChange : pricesData[item.id]?.usd_24h_change || 0,
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
        <>
            <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            {items.map(item => (
                <CurrenciesIcons  key = {item.id}  itemId = {item.id} imageUrl = {item.image} 
                itemPrice = {item.price} itemDailyChange = {item.dailyChange} itemPositionLeft = {item.position.left}
                itemPositionTop = { item.position.top} borderColor = {item.borderColor} size = {(Math.floor(Math.random() * (110 - 60 + 1)) + 60)}/>
            ))}
            </div>
            <Login/>
        </>

    );
}
export default StartingPage;