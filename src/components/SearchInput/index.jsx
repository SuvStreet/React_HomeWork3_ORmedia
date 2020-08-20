import React from "react";

import './SearchInput.sass';

const SearchInput = () => {
  // компонент
  return (
    <div className="inputAliveSearch">
      <input type="text" placeholder="Найти задачу..." id="search" className="aliveSearch" />
    </div>
  );
};

export default SearchInput;