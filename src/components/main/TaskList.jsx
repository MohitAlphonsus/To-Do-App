import Task from './Task';
import { useTask } from '../../context/task-context';

export default function TaskList() {
	const { state } = useTask();

	return (
		<ul className="task-list">
			{state.tasks.length === 0 ? (
				<p className="empty-list-text">Add new tasks to manage.</p>
			) : (
				state.tasks.map(task => <Task key={task.id} task={task} />)
			)}
		</ul>
	);
}
