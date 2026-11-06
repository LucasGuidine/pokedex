import styled from "styled-components";

interface ButtonProps {
  backgroundColor: string;
  color: string;
  clickable: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 50px auto 0;
`;

export const Button = styled.div<ButtonProps>`
  cursor: ${(props) => props.clickable && "pointer"};
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 25px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.clickable &&
    `:hover {
    margin-top: -10px;
  }`}

  @media (max-width: 480px) {
    height: 36px;
    width: 36px;
  }
`;
