import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ApiState, PayloadApi } from "../../entities/entities";

const initialState: ApiState = {
  apis: [],
};

export const apisSlice = createSlice({
  name: "apis",
  initialState,
  reducers: {
    setApis: (state, action: PayloadAction<PayloadApi["apis"]>) => {
      state.apis = action.payload;
      return;
    },
  },
});

export const { setApis } = apisSlice.actions;

export default apisSlice.reducer;
