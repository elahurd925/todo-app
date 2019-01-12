import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Root from './Root';
import './styles/scss/app.scss';

ReactDOM.render(
	<Root>
		<BrowserRouter>
			<Route path="/" component={ App } />
		</BrowserRouter>
	</Root>,
	document.getElementById('root') as HTMLElement,
);