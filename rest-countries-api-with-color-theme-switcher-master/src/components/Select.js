import React, { useState } from "react";
import styled from "styled-components";

const Select = () => {
  const [toggleSelect, setToggleSelect] = useState(false);

  const handleSelector = () => {
    setToggleSelect((prevToggleSelector) => !prevToggleSelector);
  };
  return (
    <SelectContainer onClick={handleSelector}>
      <div className="main-selector">
        <span>Filter by Region</span>
        <i className="fas fa-chevron-down"></i>
      </div>
      <ContentSelect toggle={toggleSelect}>
        <span>Africa</span>
        <span>America</span>
        <span>Asia</span>
        <span>Europe</span>
        <span>Oceania</span>
      </ContentSelect>
    </SelectContainer>
  );
};

export default Select;

const SelectContainer = styled.div`
  font-size: 14px;
  background-color: #283640;
  border-radius: 5px;
  color: white;
  padding: 22px 25px;
  height: 60px;
  cursor: pointer;
  position: relative;

  .main-selector {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      margin-right: 48px;
    }
  }
`;

const ContentSelect = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  position: absolute;
  top: 110%;
  left: 0;
  background-color: #283640;
  width: 100%;
  border-radius: 5px;
  height: ${(props) => (props.toggle ? "187px" : "0px")};
  opacity: ${(props) => (props.toggle ? "1" : "0")};
  transition: height 250ms ease-out, opacity 200ms ease-in-out;

  span {
    padding: 0 25px;
    padding-top: 14px;
    width: 100%;
    &:first-of-type {
      padding-top: 20px;
    }
    &:last-of-type {
      padding-bottom: 16px;
    }
  }
`;
