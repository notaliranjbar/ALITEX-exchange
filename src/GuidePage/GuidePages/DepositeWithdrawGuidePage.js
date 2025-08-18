import GuidePageStereoType from "./GuidePageStereoType";
import { ReactComponent as DepositeIcon } from "../Icons/saving-icon.svg";
const DepositeWithdrawGuidePage = () =>{
    return(
        <><GuidePageStereoType title = {"How can i deposite and withdraw money"} 
        description={"At Alitex, depositing and withdrawing funds is designed to be fast, secure, and convenient. To deposit, simply navigate to your Funding Wallet, select the desired cryptocurrency or fiat currency, and follow the on-screen instructions to generate a deposit address or complete a bank transfer. Make sure to double-check the address and network before sending funds to avoid errors. To withdraw, go to the same Funding Wallet, choose the currency, enter the destination address, and confirm the withdrawal. Alitex applies multiple layers of security, including two-factor authentication (2FA) and withdrawal confirmation emails, to protect your assets. Transaction histories for all deposits and withdrawals are clearly displayed, allowing you to monitor your fund movements at any time. By following these steps, you can safely manage your funds on the Alitex platform."}
        />
        <DepositeIcon className = "guide-icon"/>
        </>
    )
}
export default DepositeWithdrawGuidePage;