import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WorkStateType, WorkType } from "../../entities/types";

interface payload {
  works: WorkType[];
  activeWork: WorkType;
}

// Define the initial state using that type
const initialState: WorkStateType = {
  works: [],
  activeWork: null,
};

export const worksSlice = createSlice({
  name: "works",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setWorks: (state, action: PayloadAction<payload["works"]>) => {
      state.works = action.payload;
      return;
    },
    setWork: (state, action: PayloadAction<payload["activeWork"]>) => {
      state.activeWork = action.payload;
      return;
    },
  },
});

export const { setWorks, setWork } = worksSlice.actions;

export default worksSlice.reducer;
