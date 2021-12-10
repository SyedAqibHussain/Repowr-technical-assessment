import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../redux/reducers/index';

const middleware = [thunk, logger];
const store = createStore(
	reducers,
	{},
	compose(applyMiddleware(...middleware))
);

export default store;
