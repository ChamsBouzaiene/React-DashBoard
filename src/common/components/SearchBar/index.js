import React from "react";
import "./style.css";

export default function SearchBar({ onChange }) {
  return (
    <div className="searchbar-container">
      <input type="text" placeholder="Search..." onChange={e => onChange(e)} />
    </div>
  );
}
