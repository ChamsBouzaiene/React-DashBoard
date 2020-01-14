import React from "react";
import { LogoCDNLink } from "../../data/links";

export default function NavigationLabel({ classNames, width, height }) {
  return (
    <div className={classNames}>
      <img
        style={{ width: width, height: height }}
        src={LogoCDNLink}
        alt="company logo"
      />
    </div>
  );
}
