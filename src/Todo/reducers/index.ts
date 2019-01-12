import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS, REMOVE_COMPLETED_ITEMS } from './../actions/index';
import TodoState from "../models/TodoState";
import { Actions } from "../actions";
import { v1 as uuidv1 } from 'uuid';
import TodoItem from '../models/TodoItem';

export const defaultTodosState: TodoState = {
	items: [
		{
			id: uuidv1(),
			text: "Wake up"
		},
		{
			id: uuidv1(),
			text: "Drive to work"
		},
		{
			id: uuidv1(),
			text: "Finish to-do app"
		},
		{
			id: uuidv1(),
			text: "Drive home"
		},
		{
			id: uuidv1(),
			text: "Cook dinner"
		},
		{
			id: uuidv1(),
			text: "Read a book"
		},
		{
			id: uuidv1(),
			text: "Go to sleep"
		}
	]
};

const todos = (state: TodoState = defaultTodosState, action: Actions): TodoState => {
	switch (action.type) {
		case ADD_ITEM:
			const newItem: TodoItem = {
				id: uuidv1(),
				text: action.payload
			};
			return { ...state, items: [...state.items, newItem ] };
		case REMOVE_ITEM:
			const idToRemove = action.payload;
			const newList = [ ...state.items ];
			const indexToRemove = newList.findIndex((item) => item.id === idToRemove);
			if (indexToRemove === -1) {
				return state;
			} else {
				newList.splice(indexToRemove, 1);
				return { ...state, items: newList };
			}
		case REMOVE_ALL_ITEMS:
			return { ...state, items: [] }
		case REMOVE_COMPLETED_ITEMS:
			const idsToRemove = action.payload;
			const newItems = [ ...state.items ];
			for (const id of idsToRemove) {
				const indexToRemove = newItems.findIndex((item) => item.id === id);
				if (indexToRemove === -1) {
					continue;
				}
				newItems.splice(indexToRemove, 1);
			}
			return { ...state, items: newItems };
		default:
			return state;
	}
};

export default todos;
