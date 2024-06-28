// Initial state with an empty list of tasks
const initialState = {
  tasks: [],
};

// Root reducer to handle different actions
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      // Add a new task to the list
      return { ...state, tasks: [...state.tasks, { text: action.payload, completed: false }] };
    case 'DELETE_TASK':
      // Remove a task by index
      return { ...state, tasks: state.tasks.filter((_, idx) => idx !== action.payload) };
    case 'EDIT_TASK':
      // Edit a task's text by index
      return {
        ...state,
        tasks: state.tasks.map((task, idx) =>
          idx === action.payload.index && action.payload.newText.trim()
            ? { ...task, text: action.payload.newText }
            : task
        ),
      };
    case 'TOGGLE_TASK':
      // Toggle the completion status of a task by index
      return {
        ...state,
        tasks: state.tasks.map((task, idx) =>
          idx === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    default:
      // Return the current state if action is not recognized
      return state;
  }
};

export default rootReducer;
