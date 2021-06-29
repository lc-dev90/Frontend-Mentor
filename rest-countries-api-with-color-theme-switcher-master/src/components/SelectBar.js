import React from "react";
import styled from "styled-components";
import Select from "react-select";

const SelectBar = () => {
  let toggleDarkTheme = true;
  const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

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

  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? state.selectProps.backgroundHover
        : state.selectProps.backgroundColor,
      borderColor: "#283640",
      color: state.selectProps.color,
      cursor: "pointer",
      display: "flex",
      fontSize: "13px",
      padding: "12px 32px",
      alignItems: "center",
      "&:active": {
        backgroundColor: state.selectProps.backgroundColor,
      },
      "&:hover": {
        backgroundColor: state.selectProps.backgroundHover,
      },
      "&:nth-of-type(5)": {
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
      },
      "&:nth-of-type(1)": {
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
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
      height: 56,
      fontSize: "13px",
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
      />
    </SelectContainer>
  );
};

export default SelectBar;

const SelectContainer = styled.div``;