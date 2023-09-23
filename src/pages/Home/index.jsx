import { ContainerHome } from "./style";

import  { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { schemas } from "../../scripts/schemas";
import { Card } from "../../components/Card";
import axios from "axios";

export const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  const data = axios
    .get(`https://pokedex-api-4hn5.onrender.com/v1/pokemons/`)
    .then((res) => setPokemon(res.data));

  return (
    <ContainerHome>
      <section>
        <h1>
          Bem Vindo a{" "}
          <a href="https://pokedex-api-4hn5.onrender.com/" rel="noreferrer" target="_blank">
            {" "}
            pokédex-API
          </a>
        </h1>
        <p>Uma API criada para ser simples e facil de usar</p>
      </section>

      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Pagination, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
        >
          {pokemon.map((item, i) => {
            if (i >= 51 && i <= 55) {
              return (
                <SwiperSlide key={i}>
                  <Card key={i} pokemons={[item]} />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </ContainerHome>
  );
};
