import styled from "@emotion/styled";

export const ContainerNavbar = styled.nav`
  width: 100%;
  height: 15vh;
  display: flex;
  column-gap: 30px;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 100;
  background-color: aliceblue;
  box-shadow: 0 0 10px black;


  > a {
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: fit-content;
    text-decoration: none;
    color: black;
    letter-spacing: 6px;
  }
`;
