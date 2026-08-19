import { createSlice } from "@reduxjs/toolkit";
import tasksSlice from "../tasks/tasks.slice.ts";

interface initialState{
   
    priority: string;
   
}

const initialState = {
 priority: ""
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});

export default filtersSlice.reducer;