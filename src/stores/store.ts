import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./list/listSlice";

const store = configureStore({
	reducer: {
		counter: listReducer,
	},
});

export default store;
