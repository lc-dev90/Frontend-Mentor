import React, { useContext } from "react";
import { SelectContext } from "./SelectContext";
import Select from "react-select";
import styled from "styled-components";

const options = [
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    border: 0,
    backgroundColor: state.isFocused ? "#1c2a32" : "#283640",
    borderColor: "#283640",
    color: "white",
    cursor: "pointer",
    display: "flex",
    padding: "16px 32px",
    alignItems: "center",
    "&:active": {
      backgroundColor: "#1c2a32",
    },
  }),

  menuList: () => ({
    border: "0",
    borderRadius: "5px",
    backgroundColor: "transparent",
  }),
  dropdownIndicator: () => ({
    color: "white",
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  valueContainer: (base) => ({
    ...base,
    color: "white",
  }),
  control: (styles, state) => ({
    ...styles,
    width: 210,
    height: 58,
    cursor: "pointer",
    backgroundColor: "#283640",
    display: "flex",
    borderRadius: "5px",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: "white",
    outline: "none",
    border: "none",
    boxShadow: state.isFocused ? "inset 0 0 4px #000000b3" : "",
  }),
  placeholder: () => ({
    color: "white",
  }),
};

const SelectInput = () => {
  const [selectedItem, setSelectedItem] = useContext(SelectContext);
  return (
    <SelectContainer>
      <Select
        styles={selectStyles}
        options={options}
        isClearable={false}
        isSearchable={false}
        placeholder="Filter by Region"
        components={{
          IndicatorSeparator: () => null,
        }}
        onChange={(e) => setSelectedItem(e.value)}
      />
    </SelectContainer>
  );
};

export default SelectInput;

const SelectContainer = styled.div``;
