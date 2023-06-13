import { FC, useEffect } from 'react';
import { useRouteError } from 'react-router-dom';
import Notfound from './Notfound';

interface ErrorProps {
	codeError?: string;
}

const Error: FC<ErrorProps> = () => {
	const error: any = useRouteError();

	useEffect(() => {
		document.querySelector('#preloading-app')?.remove();
	}, []);

	return <Notfound />;
};

export default Error;
