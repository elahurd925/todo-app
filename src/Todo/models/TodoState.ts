import TodoItem from "./TodoItem";

export default interface TodoState {
	items: { [id: string]: TodoItem }
}
