import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";

export const metaData = {
  title: "Favoritos",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos{" "}
        <small className="text-blue-500"> Global State</small>
        <FavoritePokemons />
      </span>
    </div>
  );
}
