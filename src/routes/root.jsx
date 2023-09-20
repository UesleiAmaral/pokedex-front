import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";

import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { AllPokemons } from "../pages/AllPokemons";
import { CreateCard } from "../pages/CreateCard";
import { UpdatePokemon } from "../pages/UpdatePokemon";
import { Sidebar } from "../components/Sidebar";

const ContainerApp = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const Root = () => {
  return (
    <ContainerApp >
      <Router id="page-wrap">

        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="all-pokemons" element={<AllPokemons />} />

          <Route path="create-card" element={<CreateCard />} />
          <Route path="update-card" element={<UpdatePokemon />} />
        </Routes>
      </Router>
    </ContainerApp>
  );
};
