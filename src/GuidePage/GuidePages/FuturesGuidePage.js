import GuidePageStereoType from "./GuidePageStereoType";
import { ReactComponent as FuturesIcon } from "../Icons/bulb-dollar-money-icon.svg";
const FuturesGuidePage = () =>{
    return(
        <>
        <GuidePageStereoType title = {"How do i trade in futures"} 
        description={"Trading in futures on Alitex allows you to take advantage of price movements with leverage, enabling higher potential profits (and risks) than spot trading. To start, navigate to your Futures Wallet and transfer the desired amount from your Spot Wallet. Choose a trading pair and decide whether you want to go long (betting the price will rise) or short (betting the price will fall). Set your leverage, keeping in mind that higher leverage increases both potential gains and losses. You can place limit orders, market orders, or stop orders depending on your strategy. Alitex provides real-time charts, risk management tools, and margin indicators to help you monitor positions and avoid liquidation. Always trade responsibly and ensure you understand how leverage affects your exposure before entering futures trades."}
        />
        <FuturesIcon className = "guide-icon"/>
        </>
        
    )
}
export default FuturesGuidePage;