import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import configureStore from './store/configureStore';
import rootReducer from './reducers';

interface Props {
	initialState?: any // create State object
	children?: any
}

export default class Root extends React.Component<Props> {
	render() {
		const initialState = this.props.initialState ? this.props.initialState : {};
		const store: Store = configureStore(rootReducer, initialState);

		return (
			<Provider store={store}>
				{this.props.children}
			</Provider>
		);
	}
}