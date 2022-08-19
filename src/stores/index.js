import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import site from "./site";

const store = configureStore({
	reducer: {
		counter,
		site,
	},
});

export default store;
