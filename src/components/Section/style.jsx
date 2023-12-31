import  styled  from "@emotion/styled";

export const ContainerSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px;
  border-radius: 5px;


  ul {
    width: 100%;
      height: ${(props) => props.height || "none"};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    margin-top: 6px;
    border-radius: 5px;
  }

`;
