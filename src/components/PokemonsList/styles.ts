import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  padding: clamp(24px, 8vw, 100px);
`;

export const PokemonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 198px), 1fr));
  gap: 26px;
  justify-content: center;
`;
