import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
	reducer: {
		counter: counterReducer, // Connect the counter slice to the store
	},
});

export default store;
