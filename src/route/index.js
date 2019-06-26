import * as urls from '../constants/urls';
import SignIn from './SignIn';
import NotFoundPage from '../components/NotFoundPage';

const routers = [
	{
		exact: true,
		path: urls.SIGN_IN,
		component: SignIn,
	},
	{
		component: NotFoundPage,
	},
];

export default routers;
