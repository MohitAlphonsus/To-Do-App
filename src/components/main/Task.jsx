import { useState } from 'react';
import { FaCircle, FaCheckCircle, FaTrash } from 'react-icons/fa';
import { useTask } from '../../context/task-context';

export default function Task({ task }) {
	const [checked, setChecked] = useState(false);
	const { taskDispatch } = useTask();

	function handleCheckTask() {
		setChecked(checked => !checked);
	}

	function handleDeleteTask(id) {
		taskDispatch({ type: 'DELETE_TASK', payload: id });
	}

	return (
		<li className={`${checked ? 'checked' : ''}`}>
			<button className="task-btn" onClick={handleCheckTask}>
				{checked ? <FaCheckCircle /> : <FaCircle className="task-icon" />}
			</button>
			<p>{task.task}</p>
			<button className="task-btn" onClick={() => handleDeleteTask(task.id)}>
				<FaTrash className="task-icon task-icon-delete" />
			</button>
		</li>
	);
}
