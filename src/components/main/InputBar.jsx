import { useEffect, useRef } from 'react';
import { useTask } from '../../context/task-context';

export default function InputBar() {
	const inputRef = useRef();
	const { taskDispatch } = useTask();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	function handleSubmit(e) {
		e.preventDefault();
		taskDispatch({
			type: 'ADD_TASK',
			payload: {
				id: Math.random().toString(),
				task: inputRef.current.value,
			},
		});

		inputRef.current.value = '';
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Create a new task" ref={inputRef} />
		</form>
	);
}
