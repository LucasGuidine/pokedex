export type Type =
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "flying"
  | "fighting"
  | "poison"
  | "electric"
  | "ground"
  | "rock"
  | "psychic"
  | "ice"
  | "bug"
  | "ghost"
  | "steel"
  | "dragon"
  | "dark"
  | "fairy";

export interface TypeObject {
  name: Type;
}

export interface Pokemon {
  pokedexNumber: string;
  image: string;
  name: string;
  weight: number;
  height: number;
  types: TypeObject[];
}
