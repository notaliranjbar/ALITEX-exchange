import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartingPage from "./StartingPage/startingPage.js";
import TradePage from "./TradePage/TradePage.js";
import WalletPage from "./WalletPage/WalletPage.js";
import GuidePage from "./GuidePage/GuidePage.js";
import SignupPage from "./SignupPage/SignupPage.js";
import LoanGuidePage from "./GuidePage/GuidePages/LoanGuidePage.js";
import AccountGuidePage from "./GuidePage/GuidePages/AccountGuidePage.js";
import DepositeWithdrawGuidePage from "./GuidePage/GuidePages/DepositeWithdrawGuidePage.js";
import SiteGuidePage from "./GuidePage/GuidePages/SiteGuidePage.js";
import FuturesGuidePage from "./GuidePage/GuidePages/FuturesGuidePage.js";
import SignupGuidePage from "./GuidePage/GuidePages/SignupGuidePage.js";
import RouteWrapper from "./RouteWrapper";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RouteWrapper />}>
        <Route path="/" element={<StartingPage />} />
        <Route path="/trade" element={<TradePage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/guide" element={<GuidePage />}/>
        <Route path ="/guide/site" element={<SiteGuidePage/>}/>
        <Route path ="/guide/loan" element={<LoanGuidePage/>}/>
        <Route path ="/guide/account" element={<AccountGuidePage/>}/>
        <Route path ="/guide/deposite-withdraw" element={<DepositeWithdrawGuidePage/>}/>
        <Route path ="/guide/signup" element={<SignupGuidePage/>}/>
        <Route path ="/guide/futures" element={<FuturesGuidePage/>}/>
        <Route path="signup" element={<SignupPage />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
