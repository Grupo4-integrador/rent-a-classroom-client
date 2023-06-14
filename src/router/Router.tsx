import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Notfound from 'src/presentation/error/Notfound';
import { Dashboard } from 'src/presentation/screens/dashboard';
import { ForgotPassword } from 'src/presentation/screens/forgotPassword';
import Error from '../presentation/error/Error';
import { HomePage } from '../presentation/screens/home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <Error />
	},
	{
		path: '/forgotPassword',
		element: <ForgotPassword />
	},
	{
		path: '/dashboard',
		element: <Dashboard />
	},
	{
		path: '*',
		element: <Notfound />
	}
]);

export function Router() {
	return <RouterProvider router={router} />;
}
