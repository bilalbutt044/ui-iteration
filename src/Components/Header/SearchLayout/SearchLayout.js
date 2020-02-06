import React from "react";
import { Row, Col } from "antd";
import { UserAvatar } from "./UserAvatar/UserAvatar";
import { TileCardGridIcon } from "./TileCardGridIcon/TileCardGridIcon";
import { TileCardRowIcon } from "./TileCardRowIcon/TileCardRowIcon";
import { TileCardStackIcon } from "./TileCardStackIcon/TileCardStackIcon";

export const SearchLayout = props => {
  return (
    <>
      <Row className="search-layout" gutter={[2, 16]}>
        <Col md={6} sm={24} xs={24}>
          <UserAvatar />
        </Col>
        <Col md={6} sm={8} xs={8}>
          <TileCardGridIcon />
        </Col>
        <Col md={6} sm={8} xs={8}>
          <TileCardRowIcon />
        </Col>
        <Col md={6} sm={8} xs={8}>
          <TileCardStackIcon />
        </Col>
      </Row>
    </>
  );
};
