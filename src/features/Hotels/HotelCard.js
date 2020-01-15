import React from "react";

export default function HotelCard() {
  return (
    <div className="hotel-card">
      <div className="hotel-card-img">
        <img
          src="data:image/jpeg;base64,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"
          alt="hotel"
        />
      </div>
      <div className="hotel-card-info">
        <div className="hotel-card-info-container">
          <div className="hotel-card-info-titles">
            <div className="hotel-card-info-titles-right">
              <span>Four Seasons Hotel Moscow</span>
              <div className="hotel-card-info-titles-right-position">
                <span className="position"> Okhotny Ryad Moscow </span>
                <span className="position-distance">( 500 m from center )</span>
              </div>
            </div>
            <div className="hotel-card-info-titles-left">
              <span className="hotel-card-info-titles-left-score">9.2</span>
              <span className="hotel-card-info-titles-left-reviews">
                327 reviews
              </span>
            </div>
          </div>
          <div className="hotel-card-info-discription">
            <span>640 USD</span>
            <span>Rating 4.5</span>
            <span>Moscow</span>
          </div>

          <div className="hotel-card-info-more">
            <span>Breakfast included</span>
            <span>See available rooms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
