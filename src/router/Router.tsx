import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../presentation/screens/home';
import { Dashboard } from 'src/presentation/screens/dashboard';
import { ForgotPassword } from 'src/presentation/screens/forgotPassword';
import Notfound from 'src/presentation/error/Notfound';
import Error from '../presentation/error/Error';

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
