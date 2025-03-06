import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TodoType } from "./features/todoSlice";

//- hàm lấy toàn bộ todo
export const allTodo = (state: RootState) => state.todos.items;

//- ham  lấy ra giá trị search
export const searchChange = (state: RootState) => state.filter.search;

//- hàm lấy ra trạng thái cần lọc
export const statusFilter = (state: RootState) => state.filter.status;

export const todosRemainingSelector = createSelector(
  allTodo,
  searchChange,
  statusFilter,
  (todoList, searchText, status) => {
    return todoList.filter((item: TodoType) => {
      // Kiểm tra điều kiện searchText (nếu có)
      const matchesSearch = item.text
        .toLowerCase()
        .includes(searchText.toLowerCase());

      // Kiểm tra điều kiện status (nếu không phải "all" thì so sánh)
      const matchesStatus = status === "All" || item.status === status;

      // Trả về true nếu cả hai điều kiện đều đúng
      return matchesSearch && matchesStatus;
    });
  }
);

