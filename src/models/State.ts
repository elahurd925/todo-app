import TodoState from "src/Todo/models/TodoState";
import { defaultTodosState } from "src/Todo/reducers";

export interface State {
	todos: TodoState
}

export const defaultState: () => State = () => {
	return {
		todos: defaultTodosState
	};
};
