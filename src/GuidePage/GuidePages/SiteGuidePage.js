import GuidePageStereoType from "./GuidePageStereoType";
import { ReactComponent as SiteIcon } from "../Icons/software-window-icon.svg";
const SiteGuidePage = () =>{
    return(
        <>
        <GuidePageStereoType title = {"How to work with this site"} 
        description={"Alitex is designed to provide a seamless trading experience, whether you are a beginner or an experienced trader. After signing up and completing identity verification, you can deposit funds into your Spot or Futures Wallet to start trading. The platform features real-time market data, advanced charts, and order management tools to help you make informed trading decisions. You can buy, sell, or transfer cryptocurrencies, participate in leveraged futures trading, and manage loans or staking programs. Each section of the site is clearly labeled, and interactive guides are available to walk you through key functions. To ensure safety, Alitex offers features such as two-factor authentication (2FA), secure withdrawals, and detailed transaction histories. By exploring the platform and following the guides, you can confidently navigate Alitex and make the most of its services."}
        />
        <SiteIcon className = "guide-icon"/>
        </>
        

    )
}
export default SiteGuidePage;