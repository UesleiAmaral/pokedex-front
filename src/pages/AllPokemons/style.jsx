import styled from "@emotion/styled";

export const ContainerAllCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  padding: 0 2rem;

  margin-top: 110px;

  > section {
    width: fit-content;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 35px;
    right: 35px;
    z-index: 1000;
  }
  input {
    padding: 2px 10px;
    width: 20rem;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 0 0 4px black;


    font-size: 18px;
  }

  ::placeholder {
    font-size: 16px;
  }
`;