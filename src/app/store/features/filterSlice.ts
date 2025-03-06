import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StatusType = "All" | "init" | "doing" | "success" | "failure";


export interface filterState {
  search: string;
  status: StatusType;
}

const initState: filterState = {
  search: '',
  status: 'All'
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initState,
  reducers: {
    // Action để cập nhật search
    searchFilter: (state, action: PayloadAction<string>) => {
      state.search = action.payload; // Cập nhật giá trị search
    },

    // Action để cập nhật status
    statusFilter: (state, action: PayloadAction<StatusType>) => {
      state.status = action.payload; // Cập nhật giá trị status
    },
  },
});

// Xuất action và reducer
export const { searchFilter, statusFilter } = filterSlice.actions;
export default filterSlice.reducer;