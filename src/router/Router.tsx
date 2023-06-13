import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../presentation/screens/home';
import { Dashboard } from 'src/presentation/screens/dashboard';
import { ForgotPassword } from 'src/presentation/screens/forgotPassword';
const router = createBrowserRouter([
	{
		path: '/home',
		element: <HomePage />
	},
	{
		path: '/dashboard',
		element: <Dashboard />
	},
	{
		path: '/forgotPassword',
		element: <ForgotPassword />
	}
]);

export function Router() {
	return <RouterProvider router={router} />;
}
