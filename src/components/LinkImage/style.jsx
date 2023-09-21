import styled from "@emotion/styled";

export const ContainerImage = styled.figure`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.backgroundColor || "#BF4F74"};
  border-radius: 10px;
  border: none;
  img {
    padding: 20px;
    width: 100%;
    height: 120px;
  }
`;
