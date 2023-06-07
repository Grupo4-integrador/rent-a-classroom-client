import React, { useState } from "react";

import {
  Container,
  Box,
  InputGroup,
  Input,
  Title,
  Img,
  HeaderBox,
  ButtonGroup,
  Label
} from "./homePage.style";
import Logo from "../../../components/assets/logo.png";

export function HomePage() {
  const [loginClicked, setLoginClicked] = useState(false);

  const handleLoginClick = () => {
    setLoginClicked(true);
    alert("Botão de login clicado!");
  };
  return (
    <Container>
      <Box>
        <HeaderBox>
          <Img src={Logo}></Img>
        </HeaderBox>
        <Title>Sistemas de Reservas de Espaços</Title>
        <InputGroup>
          <Input type="text" className="teste" placeholder=""/>
          <Label>Informe seu Login</Label>
        </InputGroup>
        <InputGroup>
          <Input type="password"  className="teste" placeholder=""/>
          <Label>Insira sua Senha</Label>
        </InputGroup>
        <ButtonGroup>
          <Input
            type="button"
            className="login-bt"
            value="Login"
            onClick={handleLoginClick}
          />
          <Input
            type="button"
            className="forgetPassword-bt"
            value="Esqueci a senha"
          ></Input>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
