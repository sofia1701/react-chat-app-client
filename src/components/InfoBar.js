import React from "react";
import "../styles/infoBar.css";
import closeIcon from "../styles/icons/closeIcon.png";
import onlineIcon from "../styles/icons/onlineIcon.png";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"> <img src={closeIcon} alt="close" className="closeIcon"/></a>
    </div>
  </div>
);

export default InfoBar;
