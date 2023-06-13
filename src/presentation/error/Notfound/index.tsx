import * as S from './style';

import { useEffect } from 'react';
import { notFound404 } from '~components/assets/lotties';

const Notfound = () => {
	useEffect(() => {
		document.querySelector('#preloading-app')?.remove();
	}, []);

	return (
		<S.Container>
			<S.AnimateLottie animationData={notFound404} loop={false} />
			<S.Text>Pagina Nao Encontrada.</S.Text>
		</S.Container>
	);
};

export default Notfound;
