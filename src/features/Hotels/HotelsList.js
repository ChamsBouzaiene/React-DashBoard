import React from "react";
import HotelCard from "./HotelCard";
import { hotelsData } from "../../common/data/dummyData";
export default function HotelsList() {
  return (
    <div className="hotels-card-list">
      {hotelsData.map((hotel, id) => (
        <HotelCard {...hotel} key={id} />
      ))}
    </div>
  );
}
