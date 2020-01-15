import React from "react";

export default function FlightTableRow() {
  return (
    <div className="flights-table-row">
      <div className="col-title">
        <span>Munich</span>
      </div>
      <div className="col-price">
        <span className="col-price-label">From </span>
        <span>860 USD</span>
      </div>
      <div className="col-date">
        <span>15 Aug - 22 Aug</span>
      </div>
      <div className="col-button">
        <span>Book now →</span>
      </div>
    </div>
  );
}
