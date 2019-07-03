import React, { Component } from 'react';
import { Form, Icon, Input, Button, Spin, message } from 'antd';
import { isEqual, isString } from 'lodash';
import { Redirect } from 'react-router-dom';
import './SignIn.css';

class SignIn extends Component {

  handleSubmit = e => {
    const { signIn } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        signIn(values);
      }
    });
  };

  componentDidUpdate(prevProps) {
		const { error } = this.props;
		if (!isEqual(prevProps.error, error) && isString(error)) {
			message.error('This is an error message');
		}
	}

  render() {

    if (JSON.parse(localStorage.getItem('token'))) {
			return <Redirect to={'/dashboard'} />;
		}

    const { form: { getFieldDecorator }, isFetching } = this.props;

    return (
      <div className="login-form">
        {/* { !error ? message.error(error) : null } */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ type: "email", required: true, message: 'The input is not valid E-mail!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" disabled={isFetching}>
              Log in { isFetching ? <Spin indicator={ <Icon type="loading" style={{ fontSize: 16, marginLeft: '10px' }} spin /> } /> : null }
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(SignIn);

export default WrappedNormalLoginForm;