import axios from 'axios';

const AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL_REMOTE,
	headers: {
		'Content-Type': 'application/json',
	},
});

AxiosInstance.interceptors.request.use(
	config => {
		if (JSON.parse(localStorage.getItem('token'))) {
			return {
				...config,
				headers: { ...config.headers, 'Authorization': JSON.parse(localStorage.getItem('token')) },
			};
		}

		return config;
	},
	error => Promise.reject(error),
);

export default info => {
	const { url, method = 'GET', params, data } = info;
	const result = AxiosInstance({ url, method, params, data });
	return result;
};
