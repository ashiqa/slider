import React, { useState, useEffect } from "react";
import "./style.scss";

function Search() {
  const [searchState, setSearchState] = useState();

  useEffect(() => {
    setSearchState(true);
  }, []);

  const searchToggle = () => {
    if (searchState) {
      setSearchState(false);
    } else {
      setSearchState(true);
    }
  };
  const searchFx = () => {
    alert("will search");
  };

  return (
    <div className={searchState ? "search-wrapper" : "search-wrapper active"}>
      <div className="input-holder">
        <input
          type="text"
          className="search-input"
          placeholder="Type to search"
        />
        <button
          className="search-icon"
          onClick={searchState ? searchToggle : searchFx}
        >
          <span />
        </button>
      </div>
      <span className="close" onClick={searchToggle} />
    </div>
  );
}
export default Search;
