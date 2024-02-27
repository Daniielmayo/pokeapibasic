// import { PokemonsResponse, SimplePokemons } from "@/app/pokemons/interfaces";
import { PokemonGrid } from "@/pokemons/components/PokemonGrid";
import { PokemonsResponse, SimplePokemons } from "@/pokemons/interfaces";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemons[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}offset=${offset}`
  ).then((response) => response.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("Esto es un error que no debería suceder");

  return pokemons;
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokémons <small className="text-blue-500"> estático</small>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
