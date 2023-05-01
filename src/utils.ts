import { Pokemon, Type, TypeObject } from "./@types/Pokemon.type";
import { axiosInstance } from "./services/axios";
import { theme } from "./theme/theme";

export const firstLetterUpperCase = (string: string): string => {
  return string[0].toUpperCase() + string.substring(1);
};

export const typesToColor = (type: Type): string => {
  const typeToColor = {
    normal: theme.colors.normalTypeColor,
    fire: theme.colors.fireTypeColor,
    water: theme.colors.waterTypeColor,
    grass: theme.colors.grassTypeColor,
    flying: theme.colors.flyingTypeColor,
    fighting: theme.colors.fightingTypeColor,
    poison: theme.colors.poisonTypeColor,
    electric: theme.colors.electricTypeColor,
    ground: theme.colors.groundTypeColor,
    rock: theme.colors.rockTypeColor,
    psychic: theme.colors.psychicTypeColor,
    ice: theme.colors.iceTypeColor,
    bug: theme.colors.bugTypeColor,
    ghost: theme.colors.ghostTypeColor,
    steel: theme.colors.steelTypeColor,
    dragon: theme.colors.dragonTypeColor,
    dark: theme.colors.darkTypeColor,
    fairy: theme.colors.fairyTypeColor,
  };

  return typeToColor[type];
};

export const formatPokemon = async (pokemon: any) => {
  const urlToGetPokemonInfo = pokemon.url.replace(
    "https://pokeapi.co/api/v2",
    ""
  );

  const response = await axiosInstance.get(urlToGetPokemonInfo);

  var pokemonTypes = [] as TypeObject[];

  for (const type of response.data.types) {
    const formattedType = {
      name: type.type.name,
    };
    pokemonTypes.push(formattedType);
  }

  const formattedPokemon = {
    height: formatHeight(response.data.height),
    image: response.data.sprites.other["official-artwork"].front_default,
    name: firstLetterUpperCase(response.data.forms[0].name),
    pokedexNumber: formatPokedexNumber(response.data.id),
    weight: formatWeight(response.data.weight),
    types: pokemonTypes,
  } as Pokemon;

  return formattedPokemon;
};

const formatPokedexNumber = (pokedexNumber: number) => {
  return "#" + String(pokedexNumber).padStart(4, "0");
};

/** Converte decímetro para metro */
const formatHeight = (height: number) => {
  return height / 10;
};

/** Converte hectograma para quilograma */
const formatWeight = (weight: number) => {
  return weight / 10;
};
