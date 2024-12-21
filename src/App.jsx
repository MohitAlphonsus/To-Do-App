import Header from './components/Header';
import Main from './components/main/Main';
import { TaskProvider } from './context/task-context';

export default function App() {
	return (
		<TaskProvider>
			<div className="app-container">
				<Header />
				<Main />
			</div>
		</TaskProvider>
	);
}
