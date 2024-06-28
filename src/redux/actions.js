// Action to add a task
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

// Action to delete a task by index
export const deleteTask = (index) => ({
  type: 'DELETE_TASK',
  payload: index,
});

// Action to edit a task by index with new text
export const editTask = (index, newText) => ({
  type: 'EDIT_TASK',
  payload: { index, newText },
});

// Action to toggle the completion status of a task by index
export const toggleTask = (index) => ({
  type: 'TOGGLE_TASK',
  payload: index,
});
