import React from "react";

export default function FlightTableRow({ land, price, date }) {
  return (
    <div className="flights-table-row">
      <div className="col-title">
        <span>{land}</span>
      </div>
      <div className="col-price">
        <span className="col-price-label">From </span>
        <span>{price} USD</span>
      </div>
      <div className="col-date">
        <span>{date}</span>
      </div>
      <div className="col-button">
        <span>Book now →</span>
      </div>
    </div>
  );
}
