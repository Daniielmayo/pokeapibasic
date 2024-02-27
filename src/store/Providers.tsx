"use client";
import { Provider } from "react-redux";

import { useEffect } from "react";
import { store } from "./";
import { setFavoritePokemons } from "./pokemon/pokemons";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    store.dispatch(setFavoritePokemons(favorites));
    //     return favorites
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
