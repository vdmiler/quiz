import React from "react";
import styled from "styled-components";

const Item = styled.li`
  color: ${({ indicator }) =>
    indicator === "yes"
      ? "#1b5e20"
      : indicator === "no"
      ? "#ff5252"
      : "inherit"};
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &::before {
    content: "- ";
  }
`;

const OptionItem = ({ option, handleAnswer, indicator }) => {
  return (
    <>
      <Item
        indicator={indicator ? indicator[option.id] : null}
        onClick={() => handleAnswer(option.id)}
      >
        {option.text}
      </Item>
    </>
  );
};

export default OptionItem;
