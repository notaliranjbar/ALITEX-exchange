import GuidePageStereoType from "./GuidePageStereoType";
import { ReactComponent as LoanIcon } from "../Icons/hand-money-income-dollar-icon.svg";
const LoanGuidePage = () =>{
    return(
        <>
        <GuidePageStereoType title = {"How do the loans work"} 
        description={"At Alitex, loans allow users to borrow funds to increase trading capacity or make purchases without immediately selling their assets. To request a loan, navigate to the Loans section and select the type of loan you need, specifying the amount and repayment period. The system will calculate interest rates and collateral requirements based on the selected loan type and your account status. Borrowed funds are transferred to your Funding Wallet, and you can use them for trading, investing, or other approved purposes. It’s important to monitor your loan carefully: timely repayment ensures your account remains in good standing, while overdue payments may result in automatic collateral liquidation. Alitex’s loan platform provides transparent terms, repayment schedules, and interest calculations, helping you manage borrowed funds safely and efficiently."}
        />
        <LoanIcon className = "guide-icon"/>
        </>
        
    )
}
export default LoanGuidePage;