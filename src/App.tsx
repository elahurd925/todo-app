import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { getRoutes } from "./Routes";

class App extends React.Component {
	public render() {
		return (
			<div className="app-wrapper">
				<BrowserRouter>
					{ getRoutes() }
				</BrowserRouter>
			</div>
		);
	}
}

export default App;