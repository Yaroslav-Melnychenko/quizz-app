import initialState from '../../store/initialState';

export default (state = initialState.auth, { type, payload }) => {
	switch (type) {
		case 'SIGN_IN_REQUEST': {
			return { ...state, isFetching: true };
		}
		case 'SIGN_IN_REQUEST_SUCCESS': {
			const {
				data: { token },
      } = payload;
      console.log('payload', payload);
			return { ...state, isFetching: false, token };
		}

		case 'SIGN_IN_REQUEST_ERROR': {
			return { ...state, isFetching: false };
		}

		default:
			return state;
	}
};