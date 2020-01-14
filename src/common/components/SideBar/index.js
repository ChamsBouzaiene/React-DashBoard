import React from "react";
import NavigationLink from "../NavigationLink";
import "./style.css";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <NavigationLink label={"Flightes"} to={""} />
        <NavigationLink label={"Hotels"} to={""} />
        <NavigationLink label={"Renting"} to={""} />
        <NavigationLink label={"Contact"} to={""} />
        <NavigationLink label={"About us"} to={""} />
      </div>
      <div className="sidebar-footer">
        <span className="footer-copyright">Copyright 2018 (c)</span>
      </div>
    </div>
  );
}
