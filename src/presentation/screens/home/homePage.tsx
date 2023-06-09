import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
import Logo from "../../../components/assets/logo.png";

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

    // Enviar os dados para o back-end
    try {
      const response = await fetch('URL_DO_BACKEND', {
        method: 'POST',
        body: JSON.stringify({ login: loginValue, password: passwordValue }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Verificar a resposta do back-end
      if (response.ok) {
        // Sucesso! Redirecionar para a página desejada
        navigate("/dashboard");
      } else {
        // O back-end retornou um erro, tratar a mensagem de erro
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      // Ocorreu um erro durante a comunicação com o back-end
      setError('Ocorreu um erro ao processar a solicitação');
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
