import React, { useState, useEffect } from "react";
import TileCard from "./TileCard";

export const TileCardStackSection1 = props => {
  const [images, SetImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const obj = await fetch("https://picsum.photos/v2/list");
      const data = await obj.json();
      const images = await data;

      SetImages(images);
    };

    fetchData();
  }, []);

  return images !== undefined ? (
    <div className="TileCardStackSection1">
      {images.map((item, index) => (
        <React.Fragment key={index}>
          <TileCard image={item.download_url} />
        </React.Fragment>
      ))}
    </div>
  ) : null;
};
