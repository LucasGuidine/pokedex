import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.white};
  font-family: "Roboto";
  font-size: 50px;
  justify-content: center;
  font-weight: 700;
  padding: 50px 0px 100px;
`;
