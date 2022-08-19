import store from ".";
import { increment, decrement } from "./counter";
import { changeDarkMode } from "./site";

export const incrementDispatch = () => {
	store.dispatch(increment());
};

export const decrementDispatch = () => {
	store.dispatch(decrement());
};

export const changeDarkModeDispatch = (darkMode) => {
	store.dispatch(changeDarkMode(darkMode));
};
