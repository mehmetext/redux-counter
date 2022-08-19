import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
	count: 0,
};

const slice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.count++;
		},
		decrement: (state) => {
			state.count--;
		},
	},
});

export const useCounter = () => useSelector((state) => state.counter);

export const { increment, decrement } = slice.actions;

export default slice.reducer;
