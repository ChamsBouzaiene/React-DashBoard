import React from "react";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import NotificationElement from "../NotificationElement";
import Avatar from "../Avatar";
import Typographie from "../Typographie";

import "./style.css";
export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <Logo
          classNames={"header-logo-img-container"}
          widh="80%"
          height="80%"
        />
      </div>
      <div className="header-searchbar">
        <SearchBar />
      </div>
      <div className="header-menu">
        <NotificationElement />
        <Avatar
          classNames={"header-logo-img-container"}
          widh="80%"
          height="80%"
        />
        <Typographie />
      </div>
    </div>
  );
}
