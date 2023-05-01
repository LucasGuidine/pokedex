import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  padding: 0px 100px;
`;

export const PokemonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 270px);
  gap: 26px;

  flex-direction: column;
  justify-content: center;
`;

export const SearchInput = styled.input`
  caret-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.background};
  border-width: 0px;
  border-bottom-width: 1px;
  width: 300px;
  height: 16px;
  font-size: 16px;
  margin-top: 20px;
  padding: 5px;
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const SearchTitle = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.white};
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  flex-direction: column;
  font-size: 25px;
`;
