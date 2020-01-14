import React from "react";
import "./style.css";

export default function NavigationLink({ label }) {
  return (
    <div className="navlink">
      <span className="navlink-icon">⚭</span>
      <span>{label}</span>
    </div>
  );
}
