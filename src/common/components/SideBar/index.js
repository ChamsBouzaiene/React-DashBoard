import React from "react";
import NavigationLink from "../NavigationLink";

import "./style.css";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <NavigationLink label={"Flightes"} to={"/"} />
        <NavigationLink label={"Hotels"} to={"/Hotels"} />
        <NavigationLink label={"Renting"} to={"/Renting"} />
        <NavigationLink label={"Contact"} to={"/Contact_us"} />
        <NavigationLink label={"About us"} to={"/About_us"} />
      </div>
      <div className="sidebar-footer">
        <span className="footer-copyright">Copyright 2018 (c)</span>
      </div>
    </div>
  );
}
