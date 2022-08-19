import { useSelector, useDispatch } from "react-redux";

import {
	increment,
	decrement,
	incrementByAmount,
} from "../redux/counter/counterSlice";

export default function Counter() {
	const counterValue = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>{counterValue}</h1>
			<div>
				<button onClick={() => dispatch(increment())}>Increment</button>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
				<button onClick={() => dispatch(incrementByAmount(5, 2))}>
					Increment 5
				</button>
			</div>
		</div>
	);
}
