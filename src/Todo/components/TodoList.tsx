import * as React from "react";
import TodoListItem from "src/Todo/components/TodoListItem";
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoItem from "src/Todo/models/TodoItem";

export interface TodoListProps {
	items: { [id: string]: TodoItem },
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
				{Object.keys(props.items).map((itemId) => {
					return <TodoListItem
						id={itemId}
						key={itemId}
						item={props.items[itemId].text}
						completed={props.completedItems.find((id) => id === itemId) ? true : false}
						onRemove={props.onRemove}
						onComplete={props.onComplete}
						onIncomplete={props.onIncomplete} />
				})}
			</ReactCSSTransitionGroup>
		</ul>
	);
}

export default TodoList;