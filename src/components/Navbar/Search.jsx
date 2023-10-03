import React from "react";
import SearchIcon from "../../assets/search.svg";
const Search = () => {
  return (
    <div className="search">
      <img src={SearchIcon} alt="seacrh-icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search Facebook"
      />
    </div>
  );
};

export default Search;
