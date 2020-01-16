import React from "react";
import FlightTableRow from "./FlightTableRow";
import { fligtsData } from "../../common/data/dummyData";
import "./style.css";
export default function Flights() {
  return (
    <div className="flights">
      <div className="flights-title">
        <span>Best Value Offers to Europe!</span>
      </div>
      <div className="flights-table">
        {fligtsData.map((flightData, i) => {
          return <FlightTableRow {...flightData} key={i} />;
        })}
      </div>
    </div>
  );
}
