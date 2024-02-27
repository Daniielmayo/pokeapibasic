import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SimplePokemons } from "@/pokemons/interfaces";

interface PokemonsState {
  favorites: {[key: string]: SimplePokemons};
}

// const getInitialState = () => {
//     // if(typeof localStorage === "undefined")return {};

//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
//     return favorites
// }

const initialState:PokemonsState = {
    favorites: {}
// ...getInitialState(),
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {

    setFavoritePokemons(state, action:PayloadAction<{[key: string]: SimplePokemons}>){
      state.favorites = action.payload
    },

    toggleFavorite(state, action:PayloadAction<SimplePokemons>){

        const pokemon = action.payload;
        const {id}= pokemon

        if(!!state.favorites[id]){
            delete state.favorites[id]
            // return
        }else{
            
            state.favorites[id] = pokemon
        }
        // todo: NO SE DEBE DE HACER EN REDUX
        localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
    }

  },
});

export const {toggleFavorite,setFavoritePokemons} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
