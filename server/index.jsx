import axios from "axios";

export const getPokemons = async () => {
  const pokemons = await axios
    .get("https://pokedex-api-4hn5.onrender.com/v1/pokemons")
    .then((res) => res.data)
    .catch((error) => console.log(error));
  
  return await pokemons;
};
