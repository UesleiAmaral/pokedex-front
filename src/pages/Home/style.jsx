import styled from "@emotion/styled";

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  width: 100%;
  height: 100vh;
  color: #000000;

      a{
        color: #ffff;
        text-decoration: none;
      }

  > section {
    >h1,
    >p {
      font-size: 35px;
      color: #ffff;
      width: 100%;
      text-align: center;
    }
    
    >p{
      font-size: 20px;
      margin-top: 20px;

    }




  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 50px;
    margin-top: 30px;
  }
`;
