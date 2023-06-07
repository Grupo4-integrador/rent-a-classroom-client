import { Container, Box, InputGroup, Input, Button, ButtonGroup, Title, Img } from "./homePage.style";
import Logo from '../../../components/assets/logo.png';
export function HomePage() {
  return (
    <Container>
      <Box>
        <Img src={Logo}></Img>
        <Title>Login - Sistemas de Reservas de Espaços</Title>
        <InputGroup>
          <Input type="text" placeholder="Informe seu Login" />
          <Input type="text" placeholder="Insira sua Senha" />
        </InputGroup>
        <ButtonGroup>
        <Button>Login</Button>
        <Button>Esqueci minha senha</Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
