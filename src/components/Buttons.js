import { incrementDispatch, decrementDispatch } from "../stores/utils";

export default function Buttons() {
	return (
		<div>
			<button
				onClick={() => {
					incrementDispatch();
				}}
			>
				Increment
			</button>
			<button
				onClick={() => {
					decrementDispatch();
				}}
			>
				Decrement
			</button>
		</div>
	);
}
