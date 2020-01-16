import React, { useRef, useEffect, useState } from "react";

export const SliderBall = () => {
  let [offsetX, setoffsetX] = useState(0);
  let [width, setWidth] = useState(0);
  const ref = useRef(null);

  const calculateNewPos = (width, xpos, e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    setoffsetX(x);
  };
  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    setWidth(width);
  }, []);

  return (
    <div
      className="slider-container"
      ref={ref}
      onClick={e => calculateNewPos(width, e.pageX, e)}
    >
      <div className="wrapper" style={{ left: offsetX }} />
      <div className="progress-line" style={{ width: offsetX }} />
    </div>
  );
};

export default function Hotelfilter() {
  return (
    <div className="hotel-filter-container">
      <div className="filter-title">
        <span>Filter by:</span>
      </div>
      <div className="filters-container">
        <div className="filter-budget filter-box">
          <div className="filter-budget-title filter-title">
            <span>Budget per night:</span>
          </div>
          <SliderBall />
          <div className="filter-budget-prices filter-prices">
            <span>$ 100</span>
            <span>$ 750</span>
          </div>
        </div>
        <div className="filter-score filter-box">
          <div className="filter-score-title filter-title ">
            <span>Review score:</span>
            <span className="filter-score-added">+8</span>
          </div>
          <SliderBall />
          <div className="filter-score-prices filter-prices">
            <span>5.0</span>
            <span>10</span>
          </div>
        </div>
        <div className="filter-stars filter-box">
          <div className="filter-stars-title filter-title">
            <span>Star ratings:</span>
          </div>
          <SliderBall />
          <div className="filter-stars-prices filter-prices">
            <span>+1</span>
            <span>+5</span>
          </div>
        </div>
        <div className="filter-btn">
          <span className="filter-other-options">See more options ></span>
        </div>
      </div>
    </div>
  );
}
