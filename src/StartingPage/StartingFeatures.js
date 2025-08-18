import { ReactComponent as LaptopIcon } from "./Icons/laptop-icon.svg";
import { ReactComponent as LightningIcon } from "./Icons/spark-icon.svg";
import { ReactComponent as WalletIcon } from "./Icons/wallet-icon.svg";
const StartingFeatures = ({uniswapPrice , uniswapDailychange , tetherPrice , tetherDailychange , ethereumPrice , ethereumDailychange , polygonPrice ,polygonDailyChange}) => {
    const safe = (value) => Number(value ?? 0);
    return(
        <>
            <div className= "features" style={{ minHeight: "170vh", background: "#2b2b2b" }}>
                    <h2 style={{ textAlign: "center", padding: "2rem" , cursor:"default"}}>Exchange your dreams</h2>
                    <div className="container">
                        <div className="box pink fade-in-up">
                            <LaptopIcon className= "laptopIcon" style= {{fill:"rgba(255, 76, 163, 1)" , width: "20px"}}/>
                            <h1 className="webAppTitle">Web App</h1>
                            <h2>Permissionless trades.</h2>
                            <h3 className="h2Discription">Access every coin and token on the planet and swap easily with connecting the wallet to the
                                web app. Provides more than thousands of coins and swaps in less than seconds
                            </h3>
                            <div className="exploreTokens">
                                Explore tokens
                            </div>
                            <div className="priceBox uniswap">
                                <img src="/img/uniswap-uni-logo.png" alt="Uniswap" className="price-icon" />
                                <span className="iconTitle">Uniswap</span>
                                <span className="iconStand">UNI</span>
                                <span className="price-text">${uniswapPrice}</span>
                                <span className="daily-change" style={{ color: safe(uniswapDailychange) >= 0 ? "green" : "red"}}>{safe(uniswapDailychange).toFixed(2)}%</span>

                            </div>
                            <div className="priceBox tether">
                                <img src="/img/Cjdowner-Cryptocurrency-Flat-Tether-USDT.512.png" alt="Tether" className="price-icon" />
                                <span className="iconTitle">Tether</span>
                                <span className="iconStand">USDT</span>
                                <span className="price-text">${tetherPrice}</span>
                                <span className="daily-change" style={{ color: safe(tetherDailychange) >= 0 ? "green" : "red"}}>{safe(tetherDailychange).toFixed(2)}%</span>

                            </div>
                            <div className="priceBox ethereum">
                                <img src="/img/cdnlogo.com_ethereum-eth.png" alt="Ethereum" className="price-icon" />
                                <span className="iconTitle">Ethereum</span>
                                <span className="iconStand">ETH</span>
                                <span className="price-text">${ethereumPrice}</span>
                                <span className="daily-change" style={{ color: safe(ethereumDailychange) >= 0 ? "green" : "red"}}>{safe(ethereumDailychange).toFixed(2)}%</span>

                            </div>
                            <div className="priceBox polygon">
                                <img src="/img/polygon-matic-logo.png" alt="Polygon" className="price-icon" />
                                <span className="iconTitle">Polygon</span>
                                <span className="iconStand">MATIC</span>
                                <span className="price-text">${polygonPrice}</span>
                                <span className="daily-change" style={{ color: safe(polygonDailyChange) >= 0 ? "green" : "red"}}>{safe(polygonDailyChange).toFixed(2)}%</span>

                            </div>


                        </div>
                        <div className="box green fade-in-up">
                            <h2>Leverage trading with multiplier.</h2>
                            <h3 className="h2Discription">On Nobitex, Iran’s only two-way trading platform, you have the unique opportunity to profit
                                not only when cryptocurrency prices rise but also when they fall. This means you can take advantage of both bullish 
                                and bearish market conditions.
                                With leverage of up to 5×, you can amplify your gains significantly, allowing even small price movements 
                                to have a bigger impact on your potential profits. The platform is designed with advanced tools and real-time
                                data to help you make informed trading decisions quickly and efficiently. Nobitex’s intuitive interface, combined 
                                    with detailed analytics, ensures that both beginner and experienced traders can navigate the market with 
                                    confidence and precision. Don’t miss out on the chance to maximize your returns while managing your risk in a 
                                    dynamic and fast-moving crypto environment.
                            </h3>
                            <div className="exploreTokensg">
                                Start levrage trading
                            </div>
                        </div>
                    </div>
            </div>
            <div className= "features" style={{ minHeight: "100vh", background: "#2b2b2b" }}>
                    <div className="container2">
                        <div className="box orange fade-in-up">
                            <LightningIcon className= "lightningIcon" style= {{fill:"rgba(255, 77, 0, 0.6)"}}/>
                            <h2>Smarter swaps, zero friction.</h2>
                            <h3 className="h2Discription">On Alitex, speed is everything. Our lightning-fast order processing ensures instant confirmations, so buying and selling 
                                 cryptocurrencies feels seamless and effortless. With Alitex, you can trade faster, smarter, and more efficiently, giving you the 
                                 edge you need to stay ahead in the crypto world.
                            </h3>
                            <div className="exploreTokenso">
                                Explore tokens
                            </div>

                        </div>
                        <div className="box white fade-in-up">
                            <h2>Wallets</h2>
                            <h3 className="h2Discription">Alitex provides secure and user-friendly wallets to store all your cryptocurrencies
                                 in one place. Whether you’re a beginner or an experienced trader, Alitex wallets are designed
                                    to make managing your digital assets simple, fast, and safe.
                            </h3>
                            <div className="exploreTokenss">
                                Create wallet
                            </div>
                            <WalletIcon className= "walletIcon" style= {{fill:"grey"}}/>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default StartingFeatures;