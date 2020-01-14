import React from "react";
import "./style.css";
import { IconsCDNLinks } from "../../data/links";
export default function SearchBar() {
  return (
    <div className="searchbar-container">
      <input type="text" placeholder="Search..." />
    </div>
  );
}
