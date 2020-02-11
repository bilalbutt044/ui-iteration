import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import TileCard from "./TileCard";
import NewCardButton from "./NewCardButton";

export const TileCardStackSection2 = props => {
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
    <Row className="TileCardStackSection2" gutter={[8, 16]}>
      <Col lg={4} md={24} sm={24} xs={24}>
        <NewCardButton />
      </Col>

      {images.map((item, index) => (
        <React.Fragment key={index}>
          <Col className="stack-card-list" lg={4} md={6} sm={6} xs={12}>
            <TileCard image={item.download_url} />
          </Col>
        </React.Fragment>
      ))}
    </Row>
  ) : null;
};
