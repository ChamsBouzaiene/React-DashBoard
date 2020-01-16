import React, { useRef, useEffect, useState } from "react";

export const SliderBall = () => {
  let [offsetX, setoffsetX] = useState(0);
  let [width, setWidth] = useState(0);
  const ref = useRef(null);

  const calculateNewPos = (width, xpos, e) => {
    let rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;

    setoffsetX(x);
  };
  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    setWidth(width);
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
