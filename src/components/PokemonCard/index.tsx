import { Pokemon } from "../../@types/types";
import { firstLetterUpperCase } from "../../utils";
import * as Styled from "./styles";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Styled.Card primaryType={pokemon.types[0].name}>
      <Styled.TopContainer>
        <Styled.NumerationContainer>
          {pokemon.pokedexNumber}
        </Styled.NumerationContainer>
        <Styled.ColorIdentificationByType primaryType={pokemon.types[0].name} />
      </Styled.TopContainer>
      <Styled.ImageContainer>
        <Styled.PokemonImage src={pokemon.image} alt={pokemon.name} />
      </Styled.ImageContainer>

      <Styled.PokemonInfoContainer>
        <Styled.PokemonNameContainer>
          {pokemon.name}
        </Styled.PokemonNameContainer>
        <Styled.HeightAndWeightPokemonContainer>
          <Styled.TitleStats>
            <div>Weight</div>
            <div>Height</div>
          </Styled.TitleStats>

          <Styled.StatsContainer>
            <Styled.StatsValue>{pokemon.weight} kg</Styled.StatsValue>
            <Styled.StatsValue>{pokemon.height} m</Styled.StatsValue>
          </Styled.StatsContainer>
        </Styled.HeightAndWeightPokemonContainer>

        <Styled.TypeContainer>
          <Styled.TypeTitle>Type:&nbsp;</Styled.TypeTitle>

          {pokemon.types.map((type, idx) => (
            <Styled.TypeText key={`${idx} - ${type.name}`}>
              {firstLetterUpperCase(type.name)}
              {idx + 1 !== pokemon.types.length && <>&nbsp;/&nbsp;</>}
            </Styled.TypeText>
          ))}
        </Styled.TypeContainer>
      </Styled.PokemonInfoContainer>
    </Styled.Card>
  );
};
