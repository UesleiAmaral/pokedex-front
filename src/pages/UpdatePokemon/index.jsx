import { forwardRef, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { ContainerCreateCard, Form, Submit } from "../CreateCard/style";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField,
} from "@mui/material";

import { schemas } from "../../scripts/schemas";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const pokemonUpdate = schemas.schema;

export const UpdatePokemon = () => {
  const [values, setValues] = useState(pokemonUpdate);
  const [msg, setMsg] = useState("");
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    if (id) {
      setDisabled(false);
      const data = axios
        .get(`https://pokedex-api-4hn5.onrender.com/v1/pokemon/${id}`)
        .then((res) => setValues(res.data[0]));
      return;
    }
    setDisabled(true);

    setValues(pokemonUpdate);
  }, [id]);

  const handleDelete = async () => {
    if (id >= 102) {
      const data = await axios
        .delete(`https://pokedex-api-4hn5.onrender.com/v1/deletePokemon/${id}`)
        .then((res) => res.data);

      if (data.status == 200) {
        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );
        setMsg("DELETADO COM SUCESSO!");
        setId(0);
        handleClickOpen();
        return;
      } else {
        setMsg("ID NÃO EXISTE!");
        handleClickOpen();
        return;
      }
    }

    setValues(pokemonUpdate);
    setId(0);
    setMsg("Voçê só pode deletar Pokemon criado por Você!");
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (values.name == "") {
      handleClickOpen();

      return setMsg("Nome não pode estar vazio!");
    }
    if (values.image == "") {
      handleClickOpen();

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
      setMsg("Enviado com sucesso!");
      handleClickOpen();

      return;
    }

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    setValues(pokemonUpdate);
    setMsg("Voçê só pode atualizar Pokemon criado por Você!");
    handleClickOpen();
  };

  const handleChange = (e) => {
    let { id, value } = e.target;

    setValues({ ...values, [id]: value });
  };

  return (
    <ContainerCreateCard>
      <Form>
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide"
          >
            <DialogTitle>{"Atenção!"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide">
                {msg}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>OK</Button>
            </DialogActions>
          </Dialog>
        </div>
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
        </div>
      </Form>
      <Card pokemons={[values]} />
    </ContainerCreateCard>
  );
};
