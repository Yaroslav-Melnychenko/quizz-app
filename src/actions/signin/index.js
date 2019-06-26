import axios from '../../axiosConfig';
import { SIGN_IN_URL } from '../../constants/apiUrls';

const signInRequest = payload => ({
	type: 'SIGN_IN_REQUEST',
	payload,
});

const signInRequestSuccess = payload => ({
	type: 'SIGN_IN_REQUEST_SUCCESS',
	payload,
});

const signInRequestError = payload => ({
	type: 'SIGN_IN_REQUEST_ERROR',
	payload,
});

export const signIn = payload => dispatch => {
	dispatch(signInRequest());
	return axios({ method: 'POST', url: SIGN_IN_URL, data: payload })
		.then(response => {
      const { data } = response;
      // console.log('from action', data);
			if (data) {
				localStorage.setItem('token', JSON.stringify(data));

				return dispatch(signInRequestSuccess(response));
			}
			const err = {
				errors: [
					{
						message: 'User is not valid for this portal',
					},
				],
			};

			throw err;
		})
		.catch(err => {
			dispatch(signInRequestError());
			// dispatch(setErrors(err.response));
		});
};