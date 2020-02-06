import React from "react";
import { Row } from "antd";
import { SearchLayout } from "./SearchLayout";
import { SearchBar } from "./SearchBar";
import { SearchFilters } from "./SearchFilters";
export const HEADER = props => {
  return (
    <div className="header">
      <Row>
        <SearchLayout />
      </Row>
      <SearchBar />
      <SearchFilters />
    </div>
  );
};
