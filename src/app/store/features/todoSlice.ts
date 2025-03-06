// todoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Định nghĩa type cho các trạng thái
export type StatusType = "init" | "doing" | "success" | "failure";

// Kiểu dữ liệu cho Todo
export interface TodoType {
  id: string;
  text: string;
  status: StatusType;
  completed: boolean;
}


// Kiểu dữ liệu cho state ban đầu là mảng các obj
interface TodoState {
  items: TodoType[];
}

const initialState: TodoState = {
  items: [
    {
      id: "sdnf",
      text: "Learn redux",
      status: "init",
      completed: false,
    },
    {
      id: "dfnjnvcx",
      text: "Play football",
      status: "doing",
      completed: false,
    },
    {
      id: "kxjncvc",
      text: "Learn Javascript",
      status: "success",
      completed: true,
    },
    {
      id: "kxdjjncvc",
      text: "Study Next",
      status: "doing",
      completed: false,
    },
    {
      id: "kxsdjncvc",
      text: "Sleep",
      status: "failure",
      completed: true,
    },
  ],
};

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo: (state, action: PayloadAction<Todo>) => {
//       state.items.push(action.payload);
//     },
//     removeTodo: (state, action: PayloadAction<number>) => {
//       state.items = state.items.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    //- ham them todo
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.items.unshift(action.payload);
    },

    //- ham xoa todo
    removeTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },

    //hàm check todo
    checkTodo: (state, action: PayloadAction<string>) => {
      const currentTodo = state.items.find((item) => item.id === action.payload);
      if(currentTodo){
        currentTodo.completed = !currentTodo.completed
      }
    }
  },
});

// Export actions
export const { addTodo, removeTodo, checkTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
