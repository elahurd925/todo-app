import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import configureStore from 'src/store/configureStore';
import rootReducer from 'src/reducers';
import { State } from 'src/models/State';

interface Props {
	initialState?: State
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