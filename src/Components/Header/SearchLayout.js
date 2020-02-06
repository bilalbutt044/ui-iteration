import React from "react";
import { Row, Col } from "antd";
import { UserAvatar } from "./UserAvatar";
import { TileCardGridIcon } from "./TileCardGridIcon";
import { TileCardRowIcon } from "./TileCardRowIcon";
import { TileCardStackIcon } from "./TileCardStackIcon";

export const SearchLayout = props => {
  return (
    <>
      <Row className="search-layout" gutter={[2, 16]}>
        <Col md={6} sm={6} xs={24}>
          <UserAvatar />
        </Col>
        <Col md={6} sm={6} xs={8}>
          <TileCardGridIcon />
        </Col>
        <Col md={6} sm={6} xs={8}>
          <TileCardRowIcon />
        </Col>
        <Col md={6} sm={6} xs={8}>
          <TileCardStackIcon />
        </Col>
      </Row>
    </>
  );
};
