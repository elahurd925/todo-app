import * as React from "react";
import TodoListItem from "./TodoListItem";
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoItem from "../models/TodoItem";

export interface TodoListProps {
	items: TodoItem[],
	completedItems: string[],
	onRemove: (id: string) => void,
	onComplete: (id: string) => void,
	onIncomplete: (id: string) => void
}

const TodoList: React.SFC<TodoListProps> = (props: TodoListProps) => {
	return (
		<ul className="pad-top-10">
			<ReactCSSTransitionGroup
				transitionName="fade"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}
			>
				{props.items.map((item) => {
					return <TodoListItem
						id={item.id}
						key={item.id}
						item={item.text}
						completed={props.completedItems.find((id) => id === item.id) ? true : false}
						onRemove={props.onRemove}
						onComplete={props.onComplete}
						onIncomplete={props.onIncomplete} />
				})}
			</ReactCSSTransitionGroup>
		</ul>
	);
}

export default TodoList;