import React from "react";

export default function HotelCard({ img, name, place, distance, price }) {
  return (
    <div className="hotel-card">
      <div className="hotel-card-img">
        <img src={img} alt="hotel" />
      </div>
      <div className="hotel-card-info">
        <div className="hotel-card-info-container">
          <div className="hotel-card-info-titles">
            <div className="hotel-card-info-titles-right">
              <span>{name}</span>
              <div className="hotel-card-info-titles-right-position">
                <span className="position"> {place}</span>
                <span className="position-distance">{distance}</span>
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
            <div className="description-right">
              <span>. Only 2 of these prices left</span>
              <span>. Reservation possible without a credit card</span>
            </div>
            <div className="description-left">
              <span className="description-left-price">{price}</span>
              <span className="description-left-unit">Per night</span>
            </div>
          </div>

          <div className="hotel-card-info-more">
            <span className="hotel-card-info-more-info ">
              Breakfast included
            </span>
            <span className="hotel-card-info-more-btn">
              See available rooms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
