import styled from 'styled-components';
import Lottie from 'lottie-react';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 999;
	background: #0c1525;
`;

export const AnimateLottie = styled(Lottie)`
	width: 250px;
`;

export const Text = styled.label`
	margin-top: 10px;
	color: #fafafa;
	text-align: center;
	font-size: 18px;
`;
