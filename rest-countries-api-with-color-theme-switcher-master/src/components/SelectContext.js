import React, { useState, createContext } from "react";

export const SelectContext = createContext();

export const SelectProvider = (props) => {
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <SelectContext.Provider value={[selectedItem, setSelectedItem]}>
      {props.children}
    </SelectContext.Provider>
  );
};
