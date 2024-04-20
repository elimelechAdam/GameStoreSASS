import React from "react";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  return (
    <form className="searchBar">
      <input
        type="text"
        name="search"
        placeholder="What are you looking for?"
        className=""
      />
      <select className="" defaultValue="All categories">
        <option value="All categories" disabled>
          All categories
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <CiSearch className="searchIcon" />
    </form>
  );
};
