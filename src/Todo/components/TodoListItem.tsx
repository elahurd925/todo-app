import * as React from "react";
import { IoIosCloseCircleOutline } from 'react-icons/io';

export interface TodoListItemProps {
	item: string,
	id: string,
	completed: boolean,
	onRemove: (id: string) => void
	onComplete: (id: string) => void
	onIncomplete: (id: string) => void
}

const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, props: TodoListItemProps) => {
	if (event.target.checked) {
		props.onComplete(props.id);
	} else {
		props.onIncomplete(props.id);
	}
}

const TodoListItem: React.SFC<TodoListItemProps> = (props: TodoListItemProps) => {
	return (
		<li>
			<input type="checkbox" onChange={(event) => onCheckboxChange(event, props)}></input>
			<span className={`pad-left-10 pad-right-10 ${props.completed ? 'completed' : ''}`}>{props.item}</span>
			<IoIosCloseCircleOutline className="close" color="#cc0000" onClick={() => { props.onRemove(props.id) }} />
		</li>
	);
}

export default TodoListItem;