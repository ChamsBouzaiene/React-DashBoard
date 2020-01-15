import React from "react";
import "./style.css";
export default function Avatar({ img, width, height }) {
  return (
    <div className="avatar" style={{ width, height }}>
      <img className="avatar-img" src={img} alt="profile " />
    </div>
  );
}
