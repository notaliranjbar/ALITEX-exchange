
import React from "react";
import "./GuidePageStereoType.css";
import GuideFooter from "../GuideFooter";
import GuideHeader from "./GuidePagesHeader";
function GuidePageStereoType({ title, description }) {
  return (
    <div className="guide-stereotype-container">
        <GuideHeader/>
        <div className="guide-stereotype">
        <h1 className="guide-stereotype-title fade-up">{title}</h1>
        <p className="guide-stereotype-description fade-up" style={{animationDelay:"0.2s"}}>{description}</p>
        </div>
        <GuideFooter className="guide-page-footer" />
    </div>
  );
}

export default GuidePageStereoType;
