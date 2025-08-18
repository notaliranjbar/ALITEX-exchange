import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartingPage from "./StartingPage/startingPage.js";
import TradePage from "./TradePage/TradePage.js";
import WalletPage from "./WalletPage/WalletPage.js";
import GuidePage from "./GuidePage/GuidePage.js";
import SignupPage from "./SignupPage/SignupPage.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/trade" element={<TradePage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
