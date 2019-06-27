import React, { Component, Fragment } from 'react';
import { Redirect, Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routers from '../index';
import { SIGN_IN } from '../../constants/urls';
import NotFoundPage from '../../components/NotFoundPage';
import Header from '../../components/Header';

import 'antd/dist/antd.css';

export const history = createBrowserHistory();

class App extends Component {
	
  render() {

    const block = (header, RenderComponent, props) => (
		<Fragment>
			{header && <Header />}
			<div className="wrapper">
				<RenderComponent {...props} />
			</div>
		</Fragment>
	);

    return (
      <Router history={history}>
        <Switch>
			{routers.map((el, i) => (
				<Route
					key={i}
					path={el.path}
					exact={el.exact}
					render={props => {
						if (!el.component) {
							return block(el.withHeader, <NotFoundPage />, props);
						}

						if (el.privateRoute) {
							const token = JSON.parse(localStorage.getItem('token'));
							if (!token) {
								return <Redirect to={SIGN_IN} />;
							}

							return block(el.withHeader, el.component, props);
						}
						return block(el.withHeader, el.component, props);
					}}
				/>
			))}
		</Switch>
      </Router>
    )
  }
}

export default App;