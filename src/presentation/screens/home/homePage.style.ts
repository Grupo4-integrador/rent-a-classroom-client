import styled from "styled-components";

import backgroundImg from "../../../components/assets/fundo-tela-login.png";

interface LabelProps {
  focused: boolean;
  hasValue: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImg});
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
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  border-radius: 10px;
  @media (max-width: 1200px) {
    width: 45%;
  }
  @media (max-width: 992px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    width: 75%;
  }
  @media (min-width: 320px) and (max-width: 560px) {
    width: 90%;
  }
`;

export const HeaderBox = styled.div`
  background-color: #eeebeb;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 2px solid #8f8989c9;

`;

export const Img = styled.img`
  display: flex;
  width: 100%;
  transform: translate(-50% -50%);
  top: 0;

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
  position: relative;
`;

export const ButtonGroup = styled.div`
  .login-bt {
    background-color: rgb(1, 231, 142);
    color: #fff;
    border: none;
    display: flex;
    justify-content: center;
    font-size: 20;
    line-height: 1.5;
    font-family: sans-serif;
    cursor: pointer;

  }
  .login-bt:hover{
    background-color:#0000ee;
    transition: all 0.6s ease;
  }
  .forgetPassword-bt {
    display: flex;
    border: solid 0.5px #0000ee;
    color: #0000ee;
    justify-content: center;
    cursor: pointer;
  }
  .forgetPassword-bt:hover{
    background-color:rgba(0, 0, 238, 0.8);
    color:white;
    transition: all 0.6s ease;
  }
`;
export const Input = styled.input`
  font-size: 100%;
  width: 30vw;
  height: 45px;
  outline: none;
  border: 0.5px solid rgb(200, 200, 200);
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

  @media (min-width: 320px) and (max-width: 560px) {
    width: 70vw;
  }

`;

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: ${({ focused, hasValue }) => (focused || hasValue ? '0' : '24px')};
  left: ${({ focused, hasValue }) => (focused || hasValue ? '30px' : '20px')};
  background: transparent;
  transition: all 0.3s ease;



  ${Input}:focus ~ & {
   top: 0px;
   left: 30px;
   background: white;
   color: #0000ee;
  }
  ${Input}:placeholder-shown + & {
    top: 0px;
    left: 30px;
    background: white;
    color: #686868;
  }
 pointer-events: none;
 transition: all 0.3s ease;
`;

export const ErrorMessage = styled.p`
color: red;
font-size: 14px;
margin-top: 5px;
font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size:15px;
`;