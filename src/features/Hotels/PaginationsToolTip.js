import React from "react";

export default function PaginationsToolTip() {
  return (
    <div className="hotel-pagination-toolbar">
      <span className="pagination-element arrow">←</span>
      <div className="pages-counter">
        <span className="pagination-element">1</span>
        <span className="pagination-element">2</span>
        <span className="pagination-element">3</span>
        <span className="pagination-element">4</span>
        <span className="pagination-element">5</span>
        <span className="pagination-element">6</span>
        <span className="pagination-element">7</span>
        <span className="pagination-element">8</span>
      </div>
      <span className="pagination-element arrow">→</span>
    </div>
  );
}
