import { useEffect, useState } from "react";
const StartingHeader= () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <nav>
            <img src="/img/coinex-logo.svg"  style={{marginRight : "1%" , marginLeft: "3%" , width : "4%"}} ></img>
            <h1 className="alitexText">Alitex</h1>
            <h2>Trade</h2>
            <h2>Wallet</h2>
            <div className="searchBar">
                <img src="/img/search-icon-png-9969.png" className="searchIcon"></img>
                <input 
                    type="text" 
                    placeholder="Search for Coins / Tokens" 
                    className="searchInput" 
                />
            </div>
            <button className="headerButton" id="guideBtn">Guide</button>
            <button className="headerButton" id="signupBtn">Signup</button>
        </nav>
        </header>

    );
};

export default StartingHeader;
