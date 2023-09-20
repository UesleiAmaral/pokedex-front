import { ContainerCard, ContainerLoading } from "./style";
import { Title } from "../Title";
import { LinkImage } from "../LinkImage";
import { Section } from "../Section";
import { Li } from "../Li";
import { Loading } from "../Loading";

export const Card = (props) => {
  const myProps = { ...props };

  if (!myProps.pokemons[0]) {
    return (
      <ContainerLoading>
        <Loading />
      </ContainerLoading>
    );
  }

  return (
    <>
      {myProps.pokemons.map((pokemon) => (
        <ContainerCard
          key={pokemon.id}
          backgroundColor={pokemon.types[0].colors.primaryColor || "#78C850"}
          borderColor={pokemon.types[0].colors.borderColor || "#4E8234"}
        >
          <Title
            title={pokemon.name}
            backgroundColor={
              pokemon.types[0].colors.secondaryColor || "#A7DB8D"
            }
            id={pokemon.id}
          />
          <LinkImage
            backgroundColor={
              pokemon.types[0].colors.secondaryColor || "#A7DB8D"
            }
            image={pokemon.image}
          />
          <Section
            backgroundColor={
              pokemon.types[0].colors.secondaryColor || "#A7DB8D"
            }
            title={"Abilities"}
            height={"96px"}
          >
            <ul>
              {pokemon.abilities.map((item, i) => {
                if (item) {
                  return (
                    <Li key={i} borderColorLi={"black"}>
                      {item}
                    </Li>
                  );
                }
              })}
            </ul>
          </Section>

          <Section
            backgroundColor={
              pokemon.types[0].colors.secondaryColor || "#A7DB8D"
            }
            title={"Type"}
            height={"56px"}
          >
            <ul>
              {pokemon.types.map((item, i) => (
                <Li
                  key={i}
                  backgroundColorLi={item.colors.primaryColor || "#C183C1"}
                  borderColorLi={item.colors.secondaryColor || "#4E8234"}
                >
                  <span>{item.name}</span>
                </Li>
              ))}
            </ul>
          </Section>
        </ContainerCard>
      ))}
    </>
  );
};
