import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
const StartingHeader= () => {
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
                <Link to="/" style={{ color: "inherit",textDecoration: "none",cursor: "pointer"}}>
                            Guide
                </Link>
            </h2>
        </nav>
        </header>

    );
};

export default StartingHeader;
