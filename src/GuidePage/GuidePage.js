import React from "react";
import GuideHeader from "./GuideHeader";
import { useNavigate, Outlet } from "react-router-dom"; 
import "./GuidePage.css";
import GuideFooter from "./GuideFooter";
function GuidePage() {
  const navigate = useNavigate();
  const pages = [
    {link : "signup", discription:"Sign up & Verification"},
    {link : "futures", discription:"Futures / Margin Trading"},
    {link : "deposite-withdraw", discription:"Deposit & Withdrawal"},
    {link : "account", discription:"Account Opening"},
    {link : "loan", discription:"Goods Purchase Loan"},
    {link : "site", discription:"The site"},
  ];
  return (
    <div className="guide-page">
        <div className="guide-page-container">
          <GuideHeader/>
          <h1 className="guide-title fade-up">Alitex Guide</h1>
          <h2 className="guide-discription fade-up">In which field do you need help</h2>
          <div className="guide-boxes fade-up" style={{animationDelay:"0.2s"}}>
            {pages.map((page, index) => (
              <div
                key={index}
                className="guide-box"
                onClick={() => navigate(`/guide/${page.link}`)}>
                <span className="guide-box-text">{page.discription}</span>
              </div>
            ))}
          </div>
        </div>
        <GuideFooter/>
      </div>
  );
}

export default GuidePage;
