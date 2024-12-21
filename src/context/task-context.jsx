import { useReducer, createContext, useContext, useEffect } from 'react';

const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const initialState = {
	tasks: storedTasks,
};

function TaskReducer(state, action) {
	switch (action.type) {
		case 'ADD_TASK':
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
	}
}

const TaskContext = createContext();

function TaskProvider({ children }) {
	const [state, taskDispatch] = useReducer(TaskReducer, initialState);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(state.tasks));
	}, [state.tasks]);

	return (
		<TaskContext.Provider value={{ state, taskDispatch }}>
			{children}
		</TaskContext.Provider>
	);
}

function useTask() {
	const context = useContext(TaskContext);
	if (context === undefined)
		throw new Error('Task context was used outside the TaskProvider');

	return context;
}

export { TaskProvider, useTask };
