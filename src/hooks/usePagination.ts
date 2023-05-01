// import { useState, useEffect } from "react";
// import { axiosInstance } from "../services/axios";
// import { POKEMONS_PER_PAGE as itensPerPage } from "../constant";
// import { Pokemon } from "../@types/types";
// import { formatPokemon } from "../utils";

// export default function usePagination() {
//   //   const [itensCount, setItensCount] = useState(0);
//   let itensCount = 0;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [offsetValue, setOffsetValue] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
//   const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);

//   //   const getItensCount = async () => {
//   //     const response: any = await axiosInstance.get(`/pokemon?limit=0&offset=0`);
//   //     setItensCount(response.data.count);
//   //   };

//   const getAllPokemons = async () => {
//     setIsLoading(true);

//     const responseItensCount: any = await axiosInstance.get(
//       `/pokemon?limit=0&offset=0`
//     );
//     itensCount = responseItensCount.data.count;

//     const response: any = await axiosInstance.get(
//       `/pokemon?limit=${itensCount}&offset=0`
//     );

//     const pokemons = response.data.results;

//     const formattedPokemons: Pokemon[] = await Promise.all(
//       pokemons.map(async (pokemon: any) => {
//         const formattedPokemon = await formatPokemon(pokemon);
//         return formattedPokemon;
//       })
//     );
//     setAllPokemons(formattedPokemons);

//     setIsLoading(false);
//   };

//   const getPokemons = async () => {
//     setPokemons(
//       allPokemons.slice(currentPage - 1 * itensPerPage, itensPerPage)
//     );
//   };

//   useEffect(() => {
//     console.log("pokemons", pokemons);
//   }, [pokemons]);

//   useEffect(() => {
//     getAllPokemons();
//   }, []);

//   useEffect(() => {
//     console.log("teste");
//     getPokemons();
//   }, [allPokemons]);

//   return {
//     itensCount,
//     currentPage,
//     setCurrentPage,
//     isLoading,
//     pokemons,
//     allPokemons,
//   };
// }

import { useState, useCallback, useEffect } from "react";

import { axiosInstance } from "../services/axios";

import { POKEMONS_PER_PAGE as pokemonsPerPage } from "../constant";

import { Pokemon } from "../@types/types";

import { formatPokemon } from "../utils";

export default function usePagination() {
  const [itensCount, setItensCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const [offsetValue, setOffsetValue] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getPokemons = useCallback(async () => {
    setIsLoading(true);

    const response: any = await axiosInstance.get(
      `/pokemon?limit=${pokemonsPerPage}&offset=${offsetValue}`
    );

    setItensCount(response.data.count);

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

  return { itensCount, currentPage, setCurrentPage, isLoading, pokemons };
}
