import styled  from "@emotion/styled";

export const ContainerCard = styled.div`

width: 250px;
display: flex;
flex-direction: column;
justify-content: space-around;
gap: 10px;

background-color: ${(props) => props.backgroundColor || "#BF4F74"};
padding:8px;
border: 2px solid ${(props) => props.borderColor || "#000000"};
border-radius: 10px;

`;
export const ContainerLoading = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
