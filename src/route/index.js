import * as urls from '../constants/urls';
import SignIn from './SignIn';
import NotFoundPage from '../components/NotFoundPage';
import Dashboard from '../route/Dashboard';

const routers = [
	{
		exact: true,
		path: urls.SIGN_IN,
		component: SignIn,
	},
	{
		path: urls.DASHBOARD,
		component: Dashboard,
		privateRoute: true,
		withHeader: true,
	},
	{
		component: NotFoundPage,
	},
];

export default routers;
