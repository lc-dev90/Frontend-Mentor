import React from "react";
import styled from "styled-components";

const Select = () => {
  return (
    <SelectContainer>
      <div>
        <span>Filter by Region</span>
        <i className="fas fa-chevron-down"></i>
      </div>
    </SelectContainer>
  );
};

export default Select;

const SelectContainer = styled.div`
  font-size: 14px;
  background-color: #283640;
  border-radius: 5px;
  color: white;
  padding: 22px 32px;
  height: 60px;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      margin-right: 48px;
    }
  }
`;
