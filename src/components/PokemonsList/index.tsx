import { useEffect, useState, useCallback } from "react";
import { Pokemon } from "../../@types/types";
import { PokemonCard } from "../PokemonCard";
import * as Styled from "./styles";
import { axiosInstance } from "../../services/axios";
import { formatPokemon } from "../../utils";
import { Pagination } from "../Pagination";
import { POKEMONS_PER_PAGE as pokemonsPerPage } from "../../constant";

export const PokemonsList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsCount, setPokemonsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [offsetValue, setOffsetValue] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const getPokemons = useCallback(async () => {
    setIsLoading(true);

    const response: any = await axiosInstance.get(
      `/pokemon?limit=${pokemonsPerPage}&offset=${offsetValue}`
    );
    setPokemonsCount(response.data.count);

    const pokemons = response.data.results;

    const formattedPokemons: Pokemon[] = await Promise.all(
      pokemons.map(async (pokemon: any) => {
        const formattedPokemon = await formatPokemon(pokemon);
        return formattedPokemon;
      })
    );
    setPokemons(formattedPokemons);

    setIsLoading(false);
  }, [offsetValue]);

  useEffect(() => {
    if (currentPage === 1) {
      setOffsetValue(0);
      return;
    }
    setOffsetValue(pokemonsPerPage * currentPage - pokemonsPerPage);
  }, [currentPage]);

  useEffect(() => {
    getPokemons();
  }, [offsetValue, getPokemons]);

  return (
    <Styled.Container>
      {!isLoading && (
        <Styled.PokemonsContainer>
          {pokemons.map((pokemon, idx) => (
            <PokemonCard key={`${idx} - ${pokemon.name}`} pokemon={pokemon} />
          ))}
        </Styled.PokemonsContainer>
      )}

      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        pokemonsCount={pokemonsCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Styled.Container>
  );
};
