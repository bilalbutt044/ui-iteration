import React from "react";
import { SearchDropDown } from "./SearchDropDown/SearchDropDown";
import { SearchTree } from "./SearchTree/SearchTree";
export const SearchFilters = props => {
  return (
    <>
      <SearchDropDown />
      <SearchTree />
    </>
  );
};
