import * as React from "react";
import { Route, Switch } from "react-router";
import TodoPage from "./Todo/components/TodoPage";

export function getRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={TodoPage} />
		</Switch>
	);
}