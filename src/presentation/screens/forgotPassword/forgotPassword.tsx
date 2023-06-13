import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Container,
	Box,
	InputGroup,
	Input,
	Img,
	HeaderBox,
	ButtonGroup,
	Label,
	ErrorMessage,
	Overlay
} from '../home/homePage.style';
import { SubTitles, Title, SuccessMessage } from './forgotPassword.style';

import Logo from '~components/assets/logo.png';

export function ForgotPassword() {
	const [loginValue, setLoginValue] = useState('');
	const [isLoginFocused, setLoginFocused] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const navigate = useNavigate();

	const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLoginValue(e.target.value);
	};

	const handleLoginFocus = () => {
		setLoginFocused(true);
	};

	const handleLoginBlur = () => {
		setLoginFocused(false);
	};

	const handleFormSubmit = async () => {
		if (loginValue === '') {
			setErrorMessage('Informe o seu login.');
			setSuccessMessage('');
			return;
		}

		try {
			const response = await fetch('URL_DO_SEU_BACKEND', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ login: loginValue })
			});

			const data = await response.json();

			if (response.ok) {
				setErrorMessage('');
				setSuccessMessage(data.message);
			} else {
				setErrorMessage(data.error);
				setSuccessMessage('');
			}
		} catch (error) {
			setErrorMessage('Ocorreu um erro ao processar a solicitação.');
			setSuccessMessage('');
		}
	};

	useEffect(() => {
		if (successMessage) {
			const timeoutId = setTimeout(() => {
				navigate('/');
			}, 5000);

			return () => clearTimeout(timeoutId);
		}
	}, [successMessage, navigate]);

	return (
		<Container>
			<Overlay />
			<Box>
				<HeaderBox>
					<Img src={Logo} alt='Logo' />
				</HeaderBox>
				<Title>Recuperação de Senha</Title>
				<SubTitles>
					Preencha o campo abaixo para enviarmos um e-mail com a recuperação da sua senha
				</SubTitles>
				<InputGroup>
					<Input
						type='text'
						className='teste'
						value={loginValue}
						onChange={handleLoginChange}
						onFocus={handleLoginFocus}
						onBlur={handleLoginBlur}
					/>
					<Label focused={isLoginFocused} hasValue={loginValue !== ''}>
						Informe seu Login
					</Label>
				</InputGroup>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				{successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
				<ButtonGroup>
					<Input
						type='button'
						className='forgetPassword-bt'
						value='Enviar'
						onClick={handleFormSubmit}
					/>
				</ButtonGroup>
			</Box>
		</Container>
	);
}
