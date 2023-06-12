import {FooterContainer, Copyright } from './footer.style'
export function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} Desenvolvido por Grupo 4 - Uniamérica Engenharia de Software
      </Copyright>
    </FooterContainer>
  );
}