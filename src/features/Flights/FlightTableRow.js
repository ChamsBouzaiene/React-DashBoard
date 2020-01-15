import React from "react";

export default function FlightTableRow() {
  return (
    <div className="flights-table-row">
      <div className="col-title">
        <span>Munich</span>
      </div>
      <div className="col-price">
        <span>From</span>
        <span>860 USD</span>
      </div>
      <div className="col-date">
        <span>15 Aug - 22 Aug</span>
      </div>
      <div className="col-button">
        <span>Book Now -></span>
      </div>
    </div>
  );
}
