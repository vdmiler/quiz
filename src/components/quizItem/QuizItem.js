import React from "react";
import styled from "styled-components";
import OptionList from "./optionList/OptionList";

const Item = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 20px auto 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const LeftSide = styled.div`
  display: flex;
`;

const RightSide = styled.div``;

const Number = styled.div`
  margin-right: 5px;
`;

const Question = styled.p``;

const QuizItem = ({ quiz, handleAnswer, currentId, quantity, indicator }) => {
  return (
    <Item>
      <Header>
        <LeftSide>
          <Number>{currentId}.</Number>
          <Question>{quiz.question}</Question>
        </LeftSide>
        <RightSide>{`${currentId} of ${quantity}`}</RightSide>
      </Header>
      <OptionList
        options={quiz.options}
        handleAnswer={handleAnswer}
        indicator={indicator}
      />
    </Item>
  );
};

export default QuizItem;
