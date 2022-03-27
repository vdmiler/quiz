import React from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  padding: 0 calc(20px + (167 - 20) * ((100vw - 320px) / (1407 - 320)));
`;

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
