import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Router, Route, Switch } from 'react-router-dom';

import rootReducer from './reducers/rootReducer';

import Home from './routes/Home';
import Pizza from './routes/Pizza';
import Burger from './routes/Burger';
import Sides from './routes/Sides';
import Location from './routes/Location';
import NoMatch from './routes/NoMatch';

import './scss/styles.scss';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

const rootEl = document.getElementById('root');
const store = applyMiddleware(reduxThunk)(createStore)(rootReducer);

ReactDom.render(
	<Provider store={store}>
			<Router history={ history }>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/pizza-menu" component={Pizza}/>
					<Route path="/burger-menu" component={Burger}/>
					<Route path="/sides-menu" component={Sides}/>
					<Route path="/find-us" component={Location}/>
					<Route component={NoMatch}/>
			  </Switch>
		</Router>
	</Provider>, rootEl);

