import React from "react";
import { FaThLarge } from "react-icons/fa";
export const TileCardGridIcon = props => {
  const handleClck = () => {
    if (document.body.classList.contains("stack-list")) {
      document.body.classList.remove("stack-list");
    } else {
      document.body.classList.add("stack-list");
    }
  };

  return (
    <div className="tile-card-grid-icon" onClick={() => handleClck()}>
      <FaThLarge />
    </div>
  );
};
