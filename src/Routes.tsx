import * as React from "react";
import { Route, Switch } from "react-router";
import TodoPage from "./Todo/components/TodoPage";
import About from "./Todo/components/About";

export function getRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={TodoPage} />
			<Route exact path="/about" component={About} />
		</Switch>
	);
}