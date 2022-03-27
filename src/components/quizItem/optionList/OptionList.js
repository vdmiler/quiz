import React from "react";
import styled from "styled-components";
import OptionItem from "./optionItem/OptionItem";

const List = styled.ul``;

const OptionList = ({ options, handleAnswer, indicator }) => {
  return (
    <List>
      {options.map((item, i) => {
        return (
          <OptionItem
            key={i + Math.random()}
            option={item}
            handleAnswer={handleAnswer}
            indicator={indicator}
          />
        );
      })}
    </List>
  );
};

export default OptionList;
