import { useCounter } from "../stores/counter";

export default function Counter() {
	const { count } = useCounter();

	return <h1>{count}</h1>;
}
