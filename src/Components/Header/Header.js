import React from "react";
import { Row } from "antd";
import { SearchLayout } from "./SearchLayout/SearchLayout";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchFilters } from "./SearchFilters/SearchFilters";
export const HEADER = props => {
  return (
    <>
      <Row>
        <SearchLayout />
      </Row>
      <SearchBar />
      <SearchFilters />
    </>
  );
};
