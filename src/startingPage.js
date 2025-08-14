import React from "react";
import { useState, useEffect } from "react";
import currenciesIcons from "./currenciesIcons";
const startingPage  = ()=> {
    useEffect( () =>{
        const [items , setItems] = useState([])
        const randomPositionGenerator = () =>({
            top: Math.floor(Math.random() * (window.innerHeight - 150)),
            left: Math.floor(Math.random() * (window.innerWidth - 150)),
        })
        const priceFetcher = async ()=>{
            try{
                    const response = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,uniswap,tether,&vs_currencies=usd&include_24hr_change=true"
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
            priceFetcher();
            const intervalPriceFetcher = setInterval(priceFetcher() , 60000)
            return () => clearInterval(intervalPriceFetcher)
        }
        

    }, [])

    return(
        <div>

        </div>

    )
}
export default startingPage;