import React from "react";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import NotificationElement from "../NotificationElement";
import Avatar from "../Avatar";
import Typographie from "../Typographie";
import { IconsCDNLinks } from "../../data/links";

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
        <SearchBar onChange={e => console.log(e.target.value)} />
      </div>
      <div className="header-menu">
        <NotificationElement
          icon={IconsCDNLinks.messages}
          alt={"messages icon"}
          counter={5}
        />
        <NotificationElement
          icon={IconsCDNLinks.bookMark}
          alt={"messages icon"}
          counter={5}
        />
        <Avatar img={IconsCDNLinks.avatarImg} width="25%" height="100%" />
        <Typographie />
      </div>
    </div>
  );
}
