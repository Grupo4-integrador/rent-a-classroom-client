import { styled } from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderContainer = styled.nav`
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	width: 100%;
	background-color: #f1f1f1;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const HeaderGroup = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 20px;
`;

export const Img = styled.img`
	display: flex;
	width: 70%;
	transform: translate(-50% -50%);
	top: 0;

	@media (max-width: 768px) {
		align-items: center;
		justify-content: flex-start;
		width: 80%;
	}
`;

export const IconButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	cursor: pointer;
`;

export const IconMenu = styled(MenuIcon)`
	color: rgba(0, 0, 0, 0.8);
	border-radius: 50%;
	padding: 10px;
	&:hover {
		color: #02e78f;
	}
`;
