import React from "react";
import { Input } from "antd";

const { Search } = Input;

export const SearchBar = props => {
  return (
    <Search
      placeholder="search"
      onSearch={value => console.log(value)}
      className="search-bar"
    />
  );
};
