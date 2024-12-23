import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa6';

export default function Header() {
	const [toggleTheme, setToggleTheme] = useState(false);

	function handleToggleTheme() {
		setToggleTheme(prevThemeMode => !prevThemeMode);
	}

	return (
		<header>
			<h1>TODO</h1>
			<button onClick={handleToggleTheme}>
				{toggleTheme ? <FaMoon /> : <FaSun />}
			</button>
		</header>
	);
}
