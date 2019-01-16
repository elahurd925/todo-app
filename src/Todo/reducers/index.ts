import { ADD_ITEM, REMOVE_ITEM, REMOVE_ALL_ITEMS, REMOVE_COMPLETED_ITEMS } from './../actions/index';
import TodoState from "../models/TodoState";
import { Actions } from "../actions";
import { v1 as uuidv1 } from 'uuid';
import * as _ from 'lodash'
import TodoItem from '../models/TodoItem';

const id1 = uuidv1();
const id2 = uuidv1();
const id3 = uuidv1();
const id4 = uuidv1();
const id5 = uuidv1();
export const defaultTodosState: TodoState = {
	items: {
		id1: {
			id: id1,
			text: "Wake up"
		},
		id2: {
			id: id2,
			text: "Drive to work"
		},
		id3: {
			id: id3,
			text: "Finish to-do app"
		},
		id4: {
			id: id4,
			text: "Drive home"
		},
		id5: {
			id: id5,
			text: "Cook dinner"
		}
	}
};

const todos = (state: TodoState = defaultTodosState, action: Actions): TodoState => {
	switch (action.type) {
		case ADD_ITEM:
			const newItem: TodoItem = {
				id: uuidv1(),
				text: action.payload
			};
			return { ...state, items: { ...state.items, [newItem.id]: newItem } };
		case REMOVE_ITEM:
			const idToRemove = action.payload;
			return { ...state, items: _.omit(state.items, idToRemove) };
		case REMOVE_ALL_ITEMS:
			return { ...state, items: {} };
		case REMOVE_COMPLETED_ITEMS:
			const idsToRemove = action.payload;
			return { ...state, items: _.omit(state.items, idsToRemove) };
		default:
			return state;
	}
};

export default todos;
