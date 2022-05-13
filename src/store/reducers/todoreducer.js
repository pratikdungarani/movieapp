import { createSlice } from "@reduxjs/toolkit";

// Todo App
export const todoSlice = createSlice({
  name: "todoapp",
  initialState: { data: [] },
  reducers: {
    addItem: (state, action) => {
      state.data.push(action.payload);
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = todoSlice.actions;
export default todoSlice.reducer;
