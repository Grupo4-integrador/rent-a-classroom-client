import { Container, Box, InputGroup, Input, Label } from "./homePage.style";
export function HomePage() {
  return (
    <Container>
      <Box>
        <p>Login - Sistemas de Reservas de Espaços</p>
        <InputGroup>
          <Input type="text" placeholder="Login" />
        </InputGroup>
        <InputGroup>
          <Input type="text" placeholder="Senha" />
        </InputGroup>
        <button>Login</button>
        <button>Esqueci minha senha</button>
      </Box>
    </Container>
  );
}
