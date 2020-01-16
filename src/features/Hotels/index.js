import React from "react";
import "./style.css";
import HotelsList from "./HotelsList";
import HotelToolBar from "./HotelToolBar";
import Hotelfilter from "./Hotelfilter";
import PaginationsToolTip from "./PaginationsToolTip";

export default function Hotels() {
  return (
    <div className="hotels">
      <div className="hotels-container">
        <div className="hotels-cmd">
          <Hotelfilter />
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
