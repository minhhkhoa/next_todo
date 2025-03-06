import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import FilterReducer from "./features/filterSlice";


//- tao store luu tru
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: FilterReducer,
  },
});

// Lấy kiểu RootState và AppDispatch từ store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;