import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import { Box, BoxGrid, Container, Paragraph, Overlay } from './dashboard.style';

import BoxLab from '~components/assets/laboratorio.jpg';
import BoxAud from '~components/assets/Auditorio.jpg';
import BoxMeet from '~components/assets/reuniao.jpg';
import BoxClass from '~components/assets/sala-aula.jpeg';
import { Footer } from '~components/footer';

const StyledBox = styled(Box)`
	background-size: cover;
	background-position: fixed;
	background-repeat: no-repeat;
`;
export function Dashboard() {
	return (
		<Container>
			<BoxGrid>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<StyledBox style={{ backgroundImage: `url(${BoxAud})` }}>
						<Overlay />
						<Paragraph>Auditório</Paragraph>
					</StyledBox>
				</Link>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<StyledBox style={{ backgroundImage: `url(${BoxLab})` }}>
						<Overlay />
						<Paragraph>Laboratórios</Paragraph>
					</StyledBox>
				</Link>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<StyledBox style={{ backgroundImage: `url(${BoxClass})` }}>
						<Overlay />
						<Paragraph>Salas de Aulas</Paragraph>
					</StyledBox>
				</Link>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<StyledBox style={{ backgroundImage: `url(${BoxMeet})` }}>
						<Overlay />
						<Paragraph>Salas de Reuniões</Paragraph>
					</StyledBox>
				</Link>
			</BoxGrid>
			<Footer />
		</Container>
	);
}
