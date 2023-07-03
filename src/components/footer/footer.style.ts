import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: #f1f1f1;
	padding: 0px;
	text-align: center;
	z-index: 1;
	border: 1px solid rgba(0, 0, 0, 0.25);
	box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Copyright = styled.p`
	font-size: 10px;
	color: #888;
`;
