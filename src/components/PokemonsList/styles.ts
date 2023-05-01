import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  padding: 100px;
`;

export const PokemonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  gap: 26px;

  flex-direction: column;
  justify-content: center;
`;
