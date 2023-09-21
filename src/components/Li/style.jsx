import styled from "@emotion/styled";

export const ContainerLi = styled.li`
  background-color: ${(props) => props.backgroundColorLi || "#ffff"};
  font-size: 14px;
  padding: ${(props)=> props.padding || "3px"};

  border-radius: 5px;
  border: 1px solid ${(props) => props.borderColorLi || "none"};

  margin: 5px 0;

`;
