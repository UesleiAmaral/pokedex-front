import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { Search } from "../../components/Search";
import { ContainerAllCard } from "./style";

import axios from "axios";
import { useState, useEffect } from "react";

export const AllPokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [value, setValue] = useState("");
  
  
  const updatePokemon = (data) => {
    setValue(data);
  }

  useEffect(() => {
    axios
      .get(`https://pokedex-api-4hn5.onrender.com/v1/pokemons/${value}`)
      .then((res) => setPokemon(res.data));
  }, [value]);
  return (
    <>
      <ContainerAllCard>
        <Search handlePokemon={updatePokemon} />
        <Card pokemons={pokemon} />
      </ContainerAllCard>
    </>
  );
};
