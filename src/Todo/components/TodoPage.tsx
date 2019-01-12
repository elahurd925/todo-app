import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import TodoList from "./TodoList";
import * as actions from "src/Todo/actions";
import TodoItem from "../models/TodoItem";
import { State } from "src/models/State";

export interface TodoPageProps {
	items: TodoItem[],
	addItem: (item: string) => void,
	removeItem: (id: string) => void,
	removeAllItems: () => void,
	removeCompletedItems: (ids: string[]) => void
}

interface TodoPageState {
	todoText: string,
	completedItemIds: string[]
}

class TodoPage extends React.Component<TodoPageProps, TodoPageState> {

	constructor(props: TodoPageProps) {
		super(props);

		this.state = {
			todoText: '',
			completedItemIds: []
		};
	}

	onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			this.props.addItem(this.state.todoText);
			this.setState({ todoText: '' });
		}
	}

	onTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ todoText: event.target.value });
	}

	onRemove = (id: string) => {
		this.props.removeItem(id);
		this.removeFromCompletedItemIds(id);
	}

	onComplete = (id: string) => {
		this.setState({ completedItemIds: [ ...this.state.completedItemIds, id ]});
	}

	onIncomplete = (id: string) => {
		this.removeFromCompletedItemIds(id);
	}

	removeFromCompletedItemIds = (id: string) => {
		const indexToRemove = this.state.completedItemIds.indexOf(id);
		this.setState(
		{
			completedItemIds: [ ...this.state.completedItemIds.slice(0, indexToRemove), ...this.state.completedItemIds.slice(indexToRemove + 1) ]
		});
	}

	removeAllItems = () => {
		this.props.removeAllItems();
		this.setState({ completedItemIds: [] });
	}

	removeCompletedItems = () => {
		this.props.removeCompletedItems(this.state.completedItemIds);
		this.setState({ completedItemIds: [] });
	}

	render() {
		return (
			<div id="todo-page" className="container pad-top-25">
				<h1 className="text-center">To-Do</h1>
				<div className="row justify-content-center pad-bottom-10">
					<button type="button" className="btn btn-info btn-sm" onClick={this.removeAllItems}>Clear All</button>
					<button type="button" className="btn btn-info btn-sm" onClick={this.removeCompletedItems}>Clear Completed</button>
				</div>
				<div className="row justify-content-center">
					<input type="text" placeholder="What needs to be done?" className="pad-all-5"
						value={this.state.todoText}
						onChange={this.onTodoChange}
						onKeyPress={this.onKeyPress}
					/>
				</div>
				<div className="row justify-content-center pad-all-10">
					<TodoList
						items={this.props.items}
						completedItems={this.state.completedItemIds}
						onRemove={this.onRemove}
						onComplete={this.onComplete}
						onIncomplete={this.onIncomplete} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: State) => {
	return {
		items: state.todos.items
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
	addItem: (item: string) => {
		dispatch(actions.addItem(item));
	},
	removeItem: (id: string) => {
		dispatch(actions.removeItem(id));
	},
	removeAllItems: () => {
		dispatch(actions.removeAllItems());
	},
	removeCompletedItems: (ids: string[]) => {
		dispatch(actions.removeCompletedItems(ids));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);