import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Page>{children}</Page>
    </>
  );
};

export default Layout;
