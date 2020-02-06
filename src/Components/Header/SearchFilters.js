import React from "react";
import { SearchDropDown } from "./SearchDropDown";
import { SearchTree } from "./SearchTree";
export const SearchFilters = props => {
  return (
    <>
      <SearchDropDown />
      <SearchTree />
    </>
  );
};
