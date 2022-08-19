import Buttons from "./components/Buttons";
import Counter from "./components/Counter";

import { changeDarkModeDispatch } from "./stores/utils";
import { useSite } from "./stores/site";

function App() {
	const { dark } = useSite();

	return (
		<div>
			<Counter />
			<Buttons />
			<hr />
			<button
				onClick={() => {
					changeDarkModeDispatch(!dark);
				}}
			>
				Karanlık Mod ({dark.toString()})
			</button>
		</div>
	);
}

export default App;
