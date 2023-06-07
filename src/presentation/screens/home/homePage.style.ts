import styled from "styled-components";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(../../../components/assets/fundo-tela-login.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 35%;
  height: 70%;
  background-image: linear-gradient(to top, white 81%, white 1%, #eeebeb 18%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  @media (max-width: 1200px) {
    width: 45%;
  }
  
  @media (max-width: 992px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    width: 75%;
  }
  
  
  @media (min-width: 320px) and (max-width:560px) {
    width: 90%;
  }
`;
export const Img = styled.img`
  display: flex;
  width: 100%;

`;

export const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #686868;

`;

export const InputGroup = styled.div`
  font-family: "Segoe UI", sans-serif;
  padding: 10px;
`;
export const Input = styled.input`
  font-size: 100%;
  width: 30vw;
  height: 45px;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  margin: 10px;

  @media (max-width: 1200px) {
    width: 40vw;
  }
  
  @media (max-width: 992px) {
    width: 45.5vw;
  }
  @media (max-width: 768px) {
    width: 45.5vw;
  }
  
  
  @media (min-width: 320px) and (max-width:560px) {
    width: 70vw;
  }
`;

export const ButtonGroup = styled.div`
  font-family: "Segoe UI", sans-serif;
  padding: 10px;
`;

export const Button = styled.button`
      font-size: 100%;
  width: 30vw;
  height: 45px;
  border-radius: 5px;
  margin: 10px;
  display: flex;

  @media (max-width: 1200px) {
    width: 40vw;
  }
  @media (max-width: 992px) {
    width: 45.5vw;
  }
  @media (max-width: 768px) {
    width: 45.5vw;
  }
  @media (min-width: 320px) and (max-width:560px) {
    width: 70vw;
  }
`;