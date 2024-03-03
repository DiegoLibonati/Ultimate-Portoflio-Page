import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WorkState, PayloadWork } from "../../entities/entities";

const initialState: WorkState = {
  works: [],
  activeWork: null,
};

export const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {
    setWorks: (state, action: PayloadAction<PayloadWork["works"]>) => {
      state.works = action.payload;
      return;
    },
    setWork: (state, action: PayloadAction<PayloadWork["activeWork"]>) => {
      state.activeWork = action.payload;
      return;
    },
  },
});

export const { setWorks, setWork } = worksSlice.actions;

export default worksSlice.reducer;
