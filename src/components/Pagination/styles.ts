import styled from "styled-components";

interface ButtonProps {
  backgroundColor: string;
  color: string;
  clickable: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 50px;
`;

export const Button = styled.div<ButtonProps>`
  cursor: ${(props) => props.clickable && "pointer"};
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 25px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  margin-right: 20px;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.clickable &&
    `:hover {
    margin-top: -10px;
  }`}
`;
