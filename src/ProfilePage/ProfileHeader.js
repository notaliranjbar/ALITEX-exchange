import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
const ProfileHeader= () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    return (
        <header className={`header scrolled`}>
        <nav>
            <img src="/img/coinex-logo.svg"  style={{marginRight : "1%" , marginLeft: "3%" , width : "4%"}} ></img>
            <h1 className="alitexText">Alitex</h1>
            <h2>
                <Link to="/" style={{ color: "inherit",textDecoration: "none",cursor: "pointer"}}>
                            Homepage
                </Link>
            </h2>
            <h2>
                <Link to="/guide" style={{ color: "inherit",textDecoration: "none",cursor: "pointer"}}>
                            Guide
                </Link>
            </h2>
            <button className="headerButton" id="guideBtn" onClick={() => navigate("/trade")} style={{marginLeft:"55vh"}}>
                Trade
            </button>
        </nav>
        </header>

    );
};

export default ProfileHeader;
