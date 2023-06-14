import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiFetch from "../../axios/axios";

import {
  Container,
  Box,
  InputGroup,
  Input,
  Title,
  Img,
  HeaderBox,
  ButtonGroup,
  Label,
  ErrorMessage
} from "./homePage.style";
import Logo from "../../../src/components/assets/logo.png";

interface LoginResponse {
  data: string;
}

export function HomePage() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isLoginFocused, setLoginFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValue(e.target.value);
  };

  const handleLoginFocus = () => {
    setLoginFocused(true);
  };

  const handleLoginBlur = () => {
    setLoginFocused(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  const handleSubmit = async () => {
    // Validar os dados antes de enviar para o back-end
    if (!loginValue || !passwordValue) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    try {
      await apiFetch.post<LoginResponse>('/authenticator/login', {
        email: loginValue,
        senha: passwordValue,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Erro na requisição:", error);
      setError("Ocorreu um erro ao processar a solicitação");
    }
  };

  return (
    <Container>
      <Box>
        <HeaderBox>
          <Img src={Logo} />
        </HeaderBox>
        <Title>Sistemas de Reservas de Espaços</Title>
        <InputGroup>
          <Input
            type="text"
            className="teste"
            value={loginValue}
            onChange={handleLoginChange}
            onFocus={handleLoginFocus}
            onBlur={handleLoginBlur}
          />
          <Label focused={isLoginFocused} hasValue={loginValue !== ""}>
            Informe seu Login
          </Label>
        </InputGroup>
        <InputGroup>
          <Input
            type="password"
            className="teste"
            value={passwordValue}
            onChange={handlePasswordChange}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
          />
          <Label focused={isPasswordFocused} hasValue={passwordValue !== ""}>
            Insira sua Senha
          </Label>
        </InputGroup>
        <ButtonGroup>
          <Input
            type="button"
            className="login-bt"
            value="Login"
            onClick={handleSubmit}
          />
          <Link to="/forgotPassword" style={{ textDecoration: "none" }}>
            <Input
              type="button"
              className="forgetPassword-bt"
              value="Esqueci a senha"
            />
          </Link>
        </ButtonGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Box>
    </Container>
  );
}
