import initialState from '../../store/initialState';

export default (state = initialState.global, { type, payload }) => {
	switch (type) {
		case 'SET_ERRORS': {
			if (!payload) {
				return initialState.global;
			}
			const { data } = payload;

			if (!data) {
				return state;
			}

      const { error } = data;

			if (error) {
				return { error: error };
			}

			const { message, code } = data;

			if (message) {
				return { error: message, code };
			}

			return state;
		}

		default:
			return state;
	}
};
