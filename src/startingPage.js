import React from "react";
import { useState, useEffect } from "react";
import currenciesIcons from "./currencies.json";
import CurrenciesIcons from "./currenciesIcons.js";
import Login from "./Login.js";
import StartingHeader from "./StartingHeader.js";
import StartingFeatures from "./StartingFeatures.js";
import StartingFooter from "./StartingFooter.js";
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
    const [items , setItems] = useState([]);
    const [currenciesData, setCurrenciesData] = useState({});
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
            position:randomPositionGenerator(),
            size: Math.floor(Math.random() * (110 - 60 + 1)) + 60 ,
            animationDelay : -1 * (Math.floor(Math.random() * 20) + 1)
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
            const dataMap = {};
            currenciesWithPrice.forEach(item => {
            dataMap[item.id] = item;
            });
            setCurrenciesData(dataMap);
            }catch(err){
                console.error("Failed to fetch prices:", err);
            }
        }
        priceFetcher();
        const intervalPriceFetcher = setInterval(priceFetcher , 60000)
        return () => clearInterval(intervalPriceFetcher)
    }, [])
    return (
        <div style={{width : "100%"}}>
            <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" , background :"linear-gradient(to bottom, rgba(0, 199, 151, 0.25) 10%, rgba(20, 20, 20, 0.9) 90%)"}}>
                {items.map(item => (
                    <CurrenciesIcons
                    key={item.id}
                    itemId={item.id}
                    imageUrl={item.image}
                    itemPrice={item.price}
                    itemDailyChange={item.dailyChange}
                    itemPositionLeft={item.position.left}
                    itemPositionTop={item.position.top}
                    borderColor={item.borderColor}
                    size={item.size}
                    animationDelay={item.animationDelay}
                    />
                ))}
            <Login />
            </div>
            <StartingHeader/>
            <StartingFeatures
                uniswapPrice={currenciesData["uniswap"]?.price ?? 0}
                uniswapDailychange={currenciesData["uniswap"]?.dailyChange ?? 0}
                tetherPrice={currenciesData["tether"]?.price ?? 0}
                tetherDailychange={currenciesData["tether"]?.dailyChange ?? 0}
                ethereumPrice={currenciesData["ethereum"]?.price ?? 0}
                ethereumDailychange={currenciesData["ethereum"]?.dailyChange ?? 0}
                polygonPrice={currenciesData["cardano"]?.price ?? 0}
                polygonDailychange={currenciesData["cardano"]?.dailyChange ?? 0}
                />
            <StartingFooter/>
            </div>
            

    );
}
export default StartingPage;