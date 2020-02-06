import React from "react";
import "antd/dist/antd.css";

const TileCard = props => {
  const image = props.image;
  return (
    <div
      className="card  tile-card-component"
      style={{
        // backgroundImage: `url(${image}?auto=compress&cs=tinysrgb&dpr=2&h=70&w=60)`,
        backgroundColor: "grey",
        backgroundBlendMode: "multiply",
        position: "relative",
        color: "white"
      }}
    ></div>
  );
};

export default TileCard;
