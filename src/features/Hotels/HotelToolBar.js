import React from "react";

export default function HotelToolBar() {
  return (
    <div className="hotel-toolbar">
      <div className="hotel-toolbar-title">
        <span className="hotel-toolbar-title-contry">Moscow: </span>
        <span className="hotel-toolbar-title-population">
          4.002 propirties found
        </span>
      </div>
      <div className="hotel-toolbar-filter">
        <span className="hotel-toolbar-filter-by">Search By:</span>
        <span className="hotel-toolbar-filter-selected"> recommadtions ></span>
      </div>
    </div>
  );
}
