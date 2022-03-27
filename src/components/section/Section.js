import Container from "@components/container/Container";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 100px 0;
`;

const Section = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Section;
