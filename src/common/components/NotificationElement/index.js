import React from "react";
import "./style.css";

export default function NotificationElement({ icon, counter, alt }) {
  return (
    <div className="notif-icon-contatiner">
      <img className="notif-icon" src={icon} alt={alt} />
      <span className="notif-icon-counter">{counter}</span>
    </div>
  );
}
