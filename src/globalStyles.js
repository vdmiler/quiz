import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2em;
  color: #fff;
  background-color: #ce93d8;
  padding: 0;
  margin: 0;
    @media (max-width: 767.98px) {
      font-size: 16px;
    }
  }

  p {
    margin: 0;
  }

  div, p, form, input, a, span, button, ul, li {
    box-sizing: border-box;
  }

  ul, li {
    display: block;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5 {
    text-transform: uppercase;
    line-height: 1.2em;
    margin: 0;
  } 

  h1 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #555555;
    transition: all .5s ease;
    &:hover,
    &._active {
      color: #555555;
    }
  }

  input {
    outline: none;
    margin: 0;
  }

  img {
    object-fit: cover;
    max-width: 100%;
  }
`;

export const theme = {
  colors: {
    primary: "#fff",
    secondary: "#000",
  },
  media: {
    desktopL: "(max-width: 1399.98px)",
    desktop: "(max-width: 1199.98px)",
    tablet: "(max-width: 991.98px)",
    landscape: "(max-width: 767.98px)",
    portrait: "(max-width: 575.98px)",
  },
};
