import {  useState } from "react";
import { ContainerSearch } from "./style";

export const Search = (props) => {
  const myProps = { ...props };
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  myProps.handlePokemon(value);

  return (
    <ContainerSearch>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search Pokemon"
      />
    </ContainerSearch>
  );
};
