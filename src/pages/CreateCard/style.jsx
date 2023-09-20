import styled from "@emotion/styled";
import { Button, FormControl } from "@mui/material";

export const ContainerCreateCard = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding-top: 110px;
  

  position: relative;
  margin-bottom: 0;
  height: 100vh;
  h1 {
    width: 100%;
    text-align: center;
  }
`;

export const Submit = styled(Button)`
  background-color: ${(props) => (props.primary ? "#468328" : "red")};
  color: #ffffffdd;

  &:hover {
    background-color: ${(props) => (props.primary ? "#78c850" : "ligthred")};

    color: black;
  }

  text-shadow: none;

  > svg {
    margin-left: 10px;
  }
`;

export const Form = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  width: 320px;
  height: fit-content;

  border-radius: 5px;

  padding: 20px 40px;
  border: 1px solid RGB(128, 128, 128);

  >div{
    display: flex;
    gap: 30px;
  }
`;


export const ContainerAlert = styled.div`
  display: flex;
  align-items: end;

  height: 100vh;
  background-color: red;

`