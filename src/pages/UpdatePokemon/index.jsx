import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { ContainerCreateCard, Form, Submit } from "../CreateCard/style";
import axios from "axios";
import { TextField } from "@mui/material";

import { schemas } from "../../scripts/schemas";
import { AlertComponent } from "../../components/Alert";

const pokemonUpdate = schemas.schema;

export const UpdatePokemon = () => {
  const [values, setValues] = useState(pokemonUpdate);
  const [msg, setMsg] = useState("");
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [disabled, setDisabled] = useState(true);

  const handleClose = () => {
    setTimeout(() => {
      setOpen((prevState) => !prevState);
      setSeverity("error");
    }, 3000);
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    if (id) {
      setDisabled(false);
      axios
        .get(`https://pokedex-api-4hn5.onrender.com/v1/pokemon/${id}`)
        .then((res) => setValues(res.data[0]));
      return;
    }
    setDisabled(true);

    setValues(pokemonUpdate);
  }, [id]);

  const handleDelete = async () => {
    if (!id) {
      setMsg("ESCOLHA UM ID!");
      setOpen((item) => !item);
      handleClose();
      return;
    }

    if (id >= 102) {
      const data = await axios
        .delete(`https://pokedex-api-4hn5.onrender.com/v1/deletePokemon/${id}`)
        .then((res) => res.data);

      if (data.status == 200) {
        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );
        setSeverity("success");
        setMsg("DELETADO COM SUCESSO!");

        setOpen((item) => !item);
        handleClose();
        setId(0);
        return;
      } else {
        setMsg("ID NÃO EXISTE!");
        setOpen((item) => !item);
        handleClose();
        return;
      }
    }

    setValues(pokemonUpdate);
    setId(0);
    setMsg("Voçê só pode deletar Pokemon criado por Você!");
    setOpen((item) => !item);
    handleClose();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      setMsg("ESCOLHA UM ID!");
      setOpen((item) => !item);
      handleClose();
      return;
    }

    if (values.name == "") {
      setOpen((item) => !item);
      handleClose();

      return setMsg("Nome não pode estar vazio!");
    }
    if (values.image == "" || values.image == pokemonUpdate.image) {
      setOpen((item) => !item);
      handleClose();
      return setMsg("imagem não pode estar vazio!");
    }

    if (id >= 102) {
      await axios
        .put(
          `https://pokedex-api-4hn5.onrender.com/v1/updatePokemon/`,
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

      setValues(pokemonUpdate);
    setSeverity("success");
      setMsg("Enviado com sucesso!");
      setOpen((item) => !item);
      handleClose();
      return;
    }

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    setValues(pokemonUpdate);
    setMsg("Voçê só pode atualizar Pokemon criado por Você!");
    setOpen((item) => !item);
    handleClose();
  };

  const handleChange = (e) => {
    let { id, value } = e.target;

    setValues({ ...values, [id]: value });
  };

  return (
    <ContainerCreateCard>
      <Form>
        <h1>ATUALIZAR OU EXCLUIR</h1>
        <p>Digite um ID existente Para iniciar a edição</p>
        <TextField
          error
          fullWidth
          id="id"
          label="id"
          variant="standard"
          onChange={onChangeId}
          required={true}
          title="Digite um ID valido!"
        />
        <TextField
          error
          fullWidth
          id="name"
          label="Nome"
          variant="standard"
          onChange={handleChange}
          required={true}
          disabled={disabled}
          title=""
        />
        <TextField
          error
          fullWidth
          id="image"
          label="Imagem"
          variant="standard"
          onChange={handleChange}
          required={true}
          disabled={disabled}
        />
        <div>
          <Submit type="submit" variant="contained" onClick={handleDelete}>
            EXCLUIR
          </Submit>
          <Submit primary type="submit" variant="contained" onClick={onSubmit}>
            ATUALIZAR
          </Submit>
          <AlertComponent isOpen={open} msg={msg} severity={severity} />
        </div>
      </Form>
      <Card pokemons={[values]} />
    </ContainerCreateCard>
  );
};
