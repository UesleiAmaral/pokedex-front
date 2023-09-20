import { Card } from "../../components/Card";
import { Loading } from "../../components/Loading";
import { ContainerAllCard } from "./style";

import axios from "axios";
import { useState, useEffect } from "react";

export const AllPokemons = () => {
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const handleChange = (e) => {

    setValue(e.target.value);
  };

  useEffect(() => {
    const data =axios
      .get(`https://pokedex-api-4hn5.onrender.com/v1/pokemons/${value}`)
      .then((res) =>  setPokemon(res.data));
    
    
  }, [value]);

  return (
    <>
      <ContainerAllCard>
        <section>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search Pokemon"
          />
        </section>
        <Card pokemons={pokemon} />
      </ContainerAllCard>
    </>
  );
};
