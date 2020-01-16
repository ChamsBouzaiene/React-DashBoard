import React, { useRef, useEffect, useState } from "react";

export const Ball = () => {
  let [offsetX, setoffsetX] = useState(0);
  let [width, setWidth] = useState(0);
  const ref = useRef(null);

  const calculateNewPos = (width, xpos, e) => {
    let rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    console.log(width, xpos, x);
    setoffsetX(x);
  };
  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    setWidth(width);
    console.log("width", width);
  }, [ref.current]);

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
        <Ball />
        <span>Filter by:</span>
        <span>Filter by:</span>
        <span>Filter by:</span>
        <span>Filter by:</span>
        <span>Filter by:</span>
      </div>
    </div>
  );
}
