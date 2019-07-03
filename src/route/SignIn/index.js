import { connect } from 'react-redux';
import SignIn from './SignIn';

import { signIn } from '../../actions/signin';

const mapStateToProps = state => ({
	isFetching: state.auth.isFetching,
	error: state.global.error,
});

const mapDispatchToProps = dispatch => ({
	signIn: data => dispatch(signIn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);