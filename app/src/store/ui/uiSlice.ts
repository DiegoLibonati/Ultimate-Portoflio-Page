import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import { UiStateType } from "../../entities/types";

interface payload {
  alert: {
    status: boolean;
    message: string;
    type: string;
  };
}

// THEME
// True - White
// False - Black

// Define the initial state using that type
const initialState: UiStateType = {
  theme: false,
  alert: {
    status: false,
    message: "",
    type: "",
  },
};

export const uiSlice = createSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = !state.theme;
    },
    setAlert: (state, action: PayloadAction<payload["alert"]>) => {
      state.alert.status = action.payload.status;
      state.alert.message = action.payload.message;
      state.alert.type = action.payload.type;
    },
  },
});

export const { setTheme, setAlert } = uiSlice.actions;

export default uiSlice.reducer;
