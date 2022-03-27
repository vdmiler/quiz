import FinishQuiz from "@components/finishQuiz/FinishQuiz";
import QuizItem from "@components/quizItem/QuizItem";
import Section from "@components/section/Section";
import React, { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin-bottom: 30px;
`;

const Quiz = () => {
  const [quiz, setQuiz] = useState({
    activeId: 0,
    indicator: null,
    finishedQuiz: false,
    results: {},
    list: [
      {
        id: 0,
        question: "What was the first computer that had a colour display?",
        rightAnswerId: 2,
        options: [
          { id: 1, text: "iMac" },
          { id: 2, text: "Apple II" },
          { id: 3, text: "BBC Micro" },
          { id: 4, text: "Amiga 500" },
        ],
      },
      {
        id: 1,
        question: "What do you call a computer's main circuit board?",
        rightAnswerId: 3,
        options: [
          { id: 1, text: "Surfboard" },
          { id: 2, text: "Ironing Board" },
          { id: 3, text: "Motherboard" },
          { id: 4, text: "Fatherboard" },
        ],
      },
      {
        id: 2,
        question: "Who created the first modern computer? ",
        rightAnswerId: 2,
        options: [
          { id: 1, text: "Robert E Kahn" },
          { id: 2, text: "Charles Babbage" },
          { id: 3, text: "Bharles Cabbage" },
          { id: 4, text: "The Wu Tang Clan" },
        ],
      },
    ],
  });
  const handleAnswer = (id) => {
    let results = quiz.results;
    if (quiz.indicator && quiz.indicator[id] === "yes") {
      return;
    }
    if (quiz.list[quiz.activeId].rightAnswerId === id) {
      if (!results[quiz.activeId]) {
        results[quiz.activeId] = "yes";
      }
      setQuiz((prevState) => ({
        ...prevState,
        indicator: { [id]: "yes" },
        results,
      }));
      const timer = window.setTimeout(() => {
        if (quiz.activeId + 1 === quiz.list.length) {
          setQuiz((prevState) => ({
            ...prevState,
            finishedQuiz: true,
          }));
        } else {
          setQuiz((prevState) => ({
            ...prevState,
            activeId: quiz.activeId + 1,
            indicator: null,
          }));
        }
        window.clearTimeout(timer);
      }, 500);
    } else {
      results[quiz.activeId] = "no";
      setQuiz((prevState) => ({
        ...prevState,
        indicator: { [id]: "no" },
        results,
      }));
    }
  };

  const resetQuiz = () => {
    setQuiz((prevState) => ({
      ...prevState,
      activeId: 0,
      indicator: null,
      finishedQuiz: false,
      results: {},
    }));
  };
  return (
    <Section>
      <Title>Quiz</Title>
      {quiz.finishedQuiz ? (
        <FinishQuiz
          questions={quiz.list}
          results={quiz.results}
          resetQuiz={resetQuiz}
        />
      ) : (
        <QuizItem
          quiz={quiz.list[quiz.activeId]}
          handleAnswer={handleAnswer}
          currentId={quiz.activeId + 1}
          quantity={quiz.list.length}
          indicator={quiz.indicator}
        />
      )}
    </Section>
  );
};

export default Quiz;
