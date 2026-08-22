import { createSlice } from "@reduxjs/toolkit";
import type { TInitialState } from "./tasks.type.ts";

const initialState: TInitialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default tasksSlice.reducer;
