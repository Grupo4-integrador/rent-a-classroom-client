import { HeaderContainer, Img, IconMenu, IconButton, HeaderGroup } from './header.style';
import Logo from '~components/assets/logo.png';

export function Header() {
	return (
		<HeaderContainer>
			<HeaderGroup>
				<IconButton>
					<IconMenu sx={{ fontSize: 30 }} />
				</IconButton>
				<Img src={Logo} />

				{/* Adicione outros itens de navegação aqui */}
			</HeaderGroup>
		</HeaderContainer>
	);
}
