import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PayloadUi, UiState } from "../../entities/entities";

// THEME
// True - White
// False - Black

const initialState: UiState = {
  theme: false,
  alert: {
    status: false,
    message: "",
    type: "",
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme: (state) => {
      state.theme = !state.theme;
    },
    setAlert: (state, action: PayloadAction<PayloadUi["alert"]>) => {
      state.alert.status = action.payload.status;
      state.alert.message = action.payload.message;
      state.alert.type = action.payload.type;
    },
  },
});

export const { setTheme, setAlert } = uiSlice.actions;

export default uiSlice.reducer;
