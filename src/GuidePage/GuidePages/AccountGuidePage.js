import GuidePageStereoType from "./GuidePageStereoType";
import { ReactComponent as AccountIcon } from "../Icons/male-icon.svg";
const AccountGuidePage = () =>{
    return(
        <>        
        <GuidePageStereoType title = {"How does my account parts work"} 
        description={"At Alitex, your account is divided into several sections to help you manage your funds efficiently and securely. The Spot Wallet holds your regular cryptocurrencies, allowing you to trade instantly, transfer funds, and track balances in real-time. The Futures Wallet is designed for leveraged and margin trading, providing advanced tools for experienced users who want to maximize trading opportunities. The Funding Wallet supports deposits, withdrawals, and participation in staking programs or promotional campaigns. Each section displays detailed transaction history, open orders, and available balances, ensuring full transparency. By understanding how these account parts function, you can optimize fund allocation, monitor your portfolio effectively, and make informed trading decisions while navigating the Alitex platform safely and confidently."}
        />
        <AccountIcon className = "guide-icon"/>
        </>

    )
}
export default AccountGuidePage;