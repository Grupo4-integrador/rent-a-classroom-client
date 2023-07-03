import { useState } from 'react';
import {
	Img,
	IconMenu,
	IconButton,
	HeaderGroup,
	SideBarContainer,
	Container,
	SideBarContent,
	SideBarItem
} from './header.style';
import Logo from '~components/assets/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CloseIcon from '@mui/icons-material/Close';

export const Header = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<Container>
			<HeaderGroup open={isSidebarOpen ? 1 : 0}>
				<Img src={Logo} />
			</HeaderGroup>
			<SideBarContainer open={isSidebarOpen ? 1 : 0}>
				<IconButton open={isSidebarOpen ? 1 : 0} onClick={toggleSidebar}>
					{isSidebarOpen ? (
						<CloseIcon sx={{ fontSize: 30 }} />
					) : (
						<IconMenu sx={{ fontSize: 30 }} />
					)}
				</IconButton>
				<SideBarContent>
					<SideBarItem>
						<HomeIcon />
						Dashboard
					</SideBarItem>
					<SideBarItem>
						<AccountCircleIcon />
						Profile
					</SideBarItem>
				</SideBarContent>
				<SideBarItem>
					<ExitToAppIcon />
					Logout
				</SideBarItem>
			</SideBarContainer>
		</Container>
	);
};
