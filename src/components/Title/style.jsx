import styled from "@emotion/styled";

export const ContainerTitle = styled.h1`
  text-align: center;
  background-color:${(props)=> props.backgroundColor || "white"};
  border-radius: 5px;
  position: relative;

  font-size: 18px;
  padding: 5px 0;

  span{
    position: absolute;
    top: 0;
    left: 5px;
    font-size: 16px;
    font-weight: normal;
  }
`;