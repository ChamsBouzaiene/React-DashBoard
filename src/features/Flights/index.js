import React from "react";
import FlightTableRow from "./FlightTableRow";
import "./style.css";
export default function Flights() {
  return (
    <div className="flights">
      <div className="flights-title">
        <span>Best Value Offers to Europe!</span>
      </div>
      <div className="flights-table">
        <FlightTableRow />
        <FlightTableRow />
        <FlightTableRow />
        <FlightTableRow />
        <FlightTableRow />
      </div>
    </div>
  );
}
