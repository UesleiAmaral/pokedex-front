import { useState } from "react";
import { Card } from "../../components/Card";
import { ContainerCreateCard, Form, Submit } from "./style";
import { AlertComponent } from "../../components/Alert";
import axios from "axios";
import { TextField } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import { schemas } from "../../scripts/schemas";
const pokemonUser = schemas.schema;

export const CreateCard = () => {
  const [values, setValues] = useState(pokemonUser);
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");

  const handleClose = () => {
    setTimeout(() => {
      setOpen((prevState) => !prevState);
      setSeverity("error");
    }, 2000);
  };

  async function onSubmit(e) {
    e.preventDefault();

    if (values.name == "") {
      setOpen((item) => !item);
      handleClose();

      return setMsg("Nome não pode estar vazio!");
    }

    if (values.image == "" || values.image == pokemonUser.image) {
      setOpen((item) => !item);
      handleClose();

      return setMsg("imagem não pode estar vazio!");
    }
    if (values.abilities == "") {
      setOpen((item) => !item);
      handleClose();

      return setMsg("abilidade não pode estar vazio!");
    }

    await axios
      .post(
        `https://pokedex-api-4hn5.onrender.com/v1/createNewPokemon/`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data);

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    setValues(pokemonUser);
    setSeverity("success");
    setMsg("Enviado com sucesso!");
    setOpen((item) => !item);
    handleClose();
  }

  const handleChange = (e) => {
    let { id, value } = e.target;

    if (id == "abilities") {
      return setValues({ ...values, [id]: [value] });
    }

    setValues({ ...values, [id]: value });
  };

  return (
    <ContainerCreateCard>
      <Form>
        <h1>CRIE SEU POKÉMON</h1>

        <TextField
          error
          fullWidth
          id="name"
          label="Nome"
          variant="standard"
          onChange={handleChange}
          required={true}
        />
        <TextField
          error
          fullWidth
          id="image"
          label="Imagem"
          variant="standard"
          onChange={handleChange}
          required={true}
        />
        <TextField
          error
          fullWidth
          id="abilities"
          label="Abilidade"
          variant="standard"
          onChange={handleChange}
          required={true}
        />
        
        <div>
          <Submit primary type="submit" variant="contained" onClick={onSubmit}>
            ENVIAR
            <SendIcon />
          </Submit>
          <AlertComponent isOpen={open} msg={msg} severity={severity} />
        </div>
      </Form>
      <Card pokemons={[values]} />
    </ContainerCreateCard>
  );
};
