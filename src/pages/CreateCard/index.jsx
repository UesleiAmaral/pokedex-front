import { forwardRef, useState } from "react";
import { Card } from "../../components/Card";
import { ContainerCreateCard, Form, Submit } from "./style";
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

import SendIcon from "@mui/icons-material/Send";
import { schemas } from "../../scripts/schemas";
const pokemonUser = schemas.schema;

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CreateCard = () => {
  const [values, setValues] = useState(pokemonUser);
  const [msg, setMsg] = useState("");

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function onSubmit(e) {
    e.preventDefault();

    if (values.name == "") {
      handleClickOpen();

      return setMsg("Nome não pode estar vazio!");
    }
    if (values.image == "") {
      handleClickOpen();

      return setMsg("imagem não pode estar vazio!");
    }
    if (values.abilities == "") {
      handleClickOpen();

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

    console.log(values)
    setValues(pokemonUser);
    setMsg("Enviado com sucesso!");
    handleClickOpen();
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

        <Submit primary type="submit" variant="contained" onClick={onSubmit}>
          ENVIAR
          <SendIcon />
        </Submit>
      </Form>
      <Card pokemons={[values]} />
    </ContainerCreateCard>
  );
};
