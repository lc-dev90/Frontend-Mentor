import React, { useState, createContext } from "react";

export const SearchContext = createContext();

export const MovieProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState([]);
  return (
    <SearchContext.Provider value={[searchTerm, setSearchTerm]}>
      {props.children}
    </SearchContext.Provider>
  );
};
