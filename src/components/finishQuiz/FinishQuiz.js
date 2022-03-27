import Button from "@components/button/Button";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const List = styled.ul`
  margin: 20px 0;
`;

const Item = styled.li`
  color: ${({ answerResult }) => (answerResult ? "#1b5e20" : "#ff5252")};
`;

const Title = styled.h2`
  text-align: center;
`;

const Total = styled.p`
  text-align: center;
`;

const FinishQuiz = ({ questions, results, resetQuiz }) => {
  let countSuccess = 0;
  for (let key in results) {
    if (results[key] === "yes") {
      countSuccess++;
    }
  }
  return (
    <Wrapper>
      <Title>Finished</Title>
      <List>
        {questions.map((item, i) => {
          return (
            <Item
              key={i + Math.random()}
              answerResult={results[item.id] === "yes" ? true : false}
            >{`${i + 1}. ${item.question}`}</Item>
          );
        })}
      </List>
      <Total>{`Right ${countSuccess} of ${questions.length}`}</Total>
      <Button
        margin='30px auto 0 auto'
        content='Restart'
        onClick={() => resetQuiz()}
      />
    </Wrapper>
  );
};

export default FinishQuiz;
