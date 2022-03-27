import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  max-width: ${({ width }) => width || "200px"};
  width: 100%;
  padding: ${({ padding }) => padding || "15px 0"};
  margin-top: ${({ marginTop }) =>
    marginTop ? marginTop + "!important" : null};
  margin: ${({ margin }) => margin || "0"};
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.secondary};
  border: none;
  border-radius: 3px;
  text-transform: ${({ ttu }) => (ttu ? "uppercase" : "none")};
  font-size: 18px;
  line-height: 0.9em;
  color: ${({ textColor }) => textColor || "#fff"};
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover,
  &:active {
    background-color: ${({ hover }) => hover};
  }
  @media ${({ theme }) => theme.media.tablet} {
    max-width: 169px;
    font-size: ${({ fz }) => fz || "16px"};
  }
`;

const Button = ({
  onClick,
  content,
  width,
  padding,
  marginTop,
  margin,
  bgColor,
  textColor,
  ttu = true,
  fz,
  hover,
}) => {
  return (
    <StyledButton
      type='button'
      onClick={onClick}
      width={width}
      padding={padding}
      marginTop={marginTop}
      margin={margin}
      bgColor={bgColor}
      textColor={textColor}
      ttu={ttu}
      fz={fz}
      hover={hover}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
