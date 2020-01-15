import React from "react";
import "./style.css";
import Link from "../../../features/Router/Link";

export default function NavigationLink({ label, to }) {
  return (
    <div className="navlink">
      <span className="navlink-icon">⚭</span>
      <Link to={to}>{label}</Link>
    </div>
  );
}
