


export function validateTodoInput(inputValue: string) {

	if (inputValue.length === 0) {
		return "To-do cannot be empty!";
	}

	return null;
}