import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

export const Container = styled.nav`
	display: flex;
	align-items: center;
	position: fixed;
	top: 0;
	width: 100%;
	background-color: #f1f1f1;
	border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const HeaderGroup = styled.div<{ open: number }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: ${({ open }) => (open ? '15%' : '20px')};
	transition: margin-left 0.3s ease-in-out;
`;

export const Img = styled.img`
	display: flex;
	width: 70%;
	transform: translate(-50% -50%);
	top: 0;
	margin-right: 20px;
`;

export const IconButton = styled.div<{ open: number }>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	cursor: pointer;
	margin-right: ${({ open }) => (open ? '20px' : '0')};
	transition: margin-right 0.3s ease-in-out;
`;

export const IconMenu = styled(MenuIcon)`
	color: rgba(0, 0, 0, 0.8);
	border-radius: 50%;
	padding: 10px;
	&:hover {
		color: #02e78f;
		transition: 0.4s;
	}
`;

export const SideBarContainer = styled.div<{ open: number }>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: fixed;
	top: 0;
	width: ${({ open }) => (open ? '15%' : '3%')};
	height: 98%;
	background-color: #f1f1f1;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
	z-index: -999;
	transition: width 0.3s ease-in-out;

	@media (max-width: 768px) {
		width: ${({ open }) => (open ? '30%' : '10%')};
	}
`;

export const SideBarContent = styled.ul`
	list-style-type: none;
	padding: 10px;
	margin: 0;
`;

export const SideBarItem = styled.li<{ active?: boolean }>`
	padding: 10px;
	cursor: pointer;
	background-color: ${({ active }) => (active ? '#02e78f' : 'transparent')};
	color: ${({ active }) => (active ? '#ffffff' : '#000000')};
	transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
	padding: 20px;

	&:hover {
		background-color: #02e78f;
		color: #ffffff;
		text-decoration: none;
	}
`;
