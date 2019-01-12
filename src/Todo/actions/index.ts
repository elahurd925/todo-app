import { Action } from "src/actions/types";

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS';
export const REMOVE_COMPLETED_ITEMS = 'REMOVE_COMPLETED_ITEMS';

export interface AddItem extends Action { type: typeof ADD_ITEM, payload: string }
export interface RemoveItem extends Action { type: typeof REMOVE_ITEM, payload: string }
export interface RemoveAllItems extends Action { type: typeof REMOVE_ALL_ITEMS }
export interface RemoveCompletedItems extends Action { type: typeof REMOVE_COMPLETED_ITEMS, payload: string[] }

export const addItem = (item: string): AddItem => {
	return { type: ADD_ITEM, payload: item };
}

export const removeItem = (id: string): RemoveItem => {
	return { type: REMOVE_ITEM, payload: id };
}

export const removeAllItems = (): RemoveAllItems => {
	return { type: REMOVE_ALL_ITEMS };
}

export const removeCompletedItems = (ids: string[]): RemoveCompletedItems => {
	return { type: REMOVE_COMPLETED_ITEMS, payload: ids };
}

export type Actions = AddItem | RemoveItem | RemoveAllItems | RemoveCompletedItems;
