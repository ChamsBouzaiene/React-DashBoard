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
      <Logo />
      <SearchBar />
      <NotificationElement />
      <Avatar />
      <Typographie />
    </div>
  );
}
