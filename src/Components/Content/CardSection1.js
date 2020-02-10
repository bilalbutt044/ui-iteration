import React from "react";
import { Row, Col } from "antd";
import NewCardButton from "./NewCardButton";
import { TileCardStackSection1 } from "./TileCardStackSection1";

export const CardSection1 = props => {
  return (
    <Row className="card-section1">
      <Col span={4}>
        <NewCardButton />
      </Col>
      <Col span={20}>
        <TileCardStackSection1 />
      </Col>
    </Row>
  );
};
