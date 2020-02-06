import React from "react";
import { Row, Col } from "antd";
import NewCardButton from "../../../../../Shared/NewCardButton/NewCardButton";
import { TileCardStackSection1 } from "./TileCardStackSection1/TileCardStackSection1";

export const CardSection1 = props => {
  return (
    <Row className="card-section1">
      <Col span={3}>
        <NewCardButton />
      </Col>
      <Col span={21}>
        <TileCardStackSection1 />
      </Col>
    </Row>
  );
};
