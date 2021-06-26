import React, { useContext } from "react";
import { SelectContext } from "./SelectContext";
import Select from "react-select";
import styled from "styled-components";

const SelectInput = ({ toggleDarkTheme }) => {
  const [selectedItem, setSelectedItem] = useContext(SelectContext);

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
      backgroundColor: state.isFocused
        ? state.selectProps.backgroundHover
        : state.selectProps.backgroundColor,
      borderColor: "#283640",
      color: state.selectProps.color,
      cursor: "pointer",
      display: "flex",
      padding: "16px 32px",
      alignItems: "center",
      "&:active": {
        backgroundColor: state.selectProps.backgroundColor,
      },
      "&:hover": {
        backgroundColor: state.selectProps.backgroundHover,
      },
    }),

    menuList: () => ({
      border: "0",
      borderRadius: "5px",
      backgroundColor: "transparent",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.selectProps.color,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.selectProps.color,
    }),
    singleValue: (base, state) => ({
      ...base,
      color: state.selectProps.color,
    }),
    valueContainer: (base, state) => ({
      ...base,
      color: state.selectProps.color,
    }),
    control: (styles, state) => ({
      ...styles,
      width: 210,
      height: 58,
      cursor: "pointer",
      backgroundColor: state.selectProps.backgroundColor,
      color: state.selectProps.color,
      display: "flex",
      borderRadius: "5px",
      paddingLeft: "20px",
      paddingRight: "20px",
      outline: "none",
      border: "none",
      boxShadow: state.isFocused
        ? "inset 0 0 4px #000000b3, 2px 2px 10px #1e272d63"
        : "2px 2px 10px #1e272d63",
    }),
  };

  let color = "";
  let backgroundColor = "";
  let backgroundHover = "";

  if (toggleDarkTheme) {
    color = "white";
    backgroundColor = "#283640";
    backgroundHover = "#1c2a32";
  } else {
    color = "black";
    backgroundColor = "white";
    backgroundHover = "#e0e0e0";
  }
  return (
    <SelectContainer>
      <Select
        color={color}
        backgroundColor={backgroundColor}
        backgroundHover={backgroundHover}
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
