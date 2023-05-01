import styled from "styled-components";
import { Type } from "../../@types/Pokemon.type";
import { typesToColor } from "../../utils";

interface ColorIdentificationByTypeProps {
  primaryType: Type;
}

interface CardProps {
  primaryType: Type;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;

  height: 335px;
  width: 198px;

  background: ${(props) => props.theme.colors.backgroundCard};
  border: 2px solid ${(props) => typesToColor(props.primaryType)};
  border-radius: 10px;
  box-shadow: 0px 3px 10px ${(props) => props.theme.colors.boxShadowCard};

  margin-right: 100px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const NumerationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;

  font-weight: 700;
  font-size: 12px;

  background: ${(props) => props.theme.colors.backgroundNumerationCard};
  border-radius: 9.6px;
  height: 19px;
  width: 39px;
  margin: 6px 0px 0px 6px;
  padding: 3px;

  color: ${(props) => props.theme.colors.fontColor};
`;

export const ColorIdentificationByType = styled.div<ColorIdentificationByTypeProps>`
  height: 16px;
  width: 19px;
  margin: 6px 6px 0px 0px;

  background: ${(props) => typesToColor(props.primaryType)};
  box-shadow: 0px 0px 6px ${(props) => typesToColor(props.primaryType)};
  border-radius: 1000px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;
  background: ${(props) => props.theme.colors.backgroundImageCard};
  box-shadow: 0px 0px 10px 10px
    ${(props) => props.theme.colors.boxShadowImageCard};
  border-radius: 75px;

  align-self: center;
`;

export const PokemonImage = styled.img`
  height: 140px;
  width: 140px;
  filter: saturate(150%);
`;

export const PokemonInfoContainer = styled.div`
  height: 119px;
  width: 150px;

  margin-top: 17px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
`;

export const PokemonNameContainer = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 19px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  color: ${(props) => props.theme.colors.fontColor};
`;

export const HeightAndWeightPokemonContainer = styled.div`
  width: 150px;
  height: 46px;
`;

export const TitleStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  opacity: 0.5;

  color: ${(props) => props.theme.colors.fontColor};
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StatsValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.6px 5.89px 1.59px 5.39px;

  width: 47px;
  height: 19px;

  background: ${(props) => props.theme.colors.backgroundStatusCard};
  color: ${(props) => props.theme.colors.fontColor};

  border-radius: 9px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 150px;
`;

export const TypeTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;

  color: ${(props) => props.theme.colors.fontColor};

  opacity: 0.5;
`;

export const TypeText = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;

  color: ${(props) => props.theme.colors.fontColor};
`;
