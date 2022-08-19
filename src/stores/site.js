import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
	dark: false,
};

const slice = createSlice({
	name: "site",
	initialState,
	reducers: {
		changeDarkMode: (state, action) => {
			state.dark = action.payload;
		},
	},
});

export const useSite = () => useSelector((state) => state.site);

export const { changeDarkMode } = slice.actions;

export default slice.reducer;
