import React from "react";
import "./style.css";
import HotelsList from "./HotelsList";
import HotelToolBar from "./HotelToolBar";
import PaginationsToolTip from "./PaginationsToolTip";

export default function Hotels() {
  return (
    <div className="hotels">
      <div className="hotels-container">
        <div className="hotels-cmd">
          <span>Best Value Offers to Europe!</span>
        </div>
        <div className="hotels-table">
          <HotelToolBar />
          <HotelsList />
          <PaginationsToolTip />
        </div>
      </div>
    </div>
  );
}
