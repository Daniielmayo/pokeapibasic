import { SimplePokemons } from "../interfaces";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemons[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
        // <span key={pokemon.id}>sdflasj</span>
      ))}
    </div>
  );
};
