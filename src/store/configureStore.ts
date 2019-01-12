import { createStore, applyMiddleware, Reducer } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(reducers: Reducer, initialState = {}) {

	const middleware = applyMiddleware();
	
	if (process.env.NODE_ENV === 'production') {
		const store = createStore(reducers, initialState, middleware);
		return store;
	} else {
		const store = createStore(reducers, initialState, composeWithDevTools(middleware));
		return store;
	}
}