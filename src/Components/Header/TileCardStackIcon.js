import React from "react";

export const TileCardStackIcon = props => {
  const handleClck = () => {
    if (document.body.classList.contains("stack-list")) {
      document.body.classList.remove("stack-list");
    } else {
      document.body.classList.add("stack-list");
    }
  };

  return <div className="tile-card-stack-icon" onClick={() => handleClck()} />;
};
