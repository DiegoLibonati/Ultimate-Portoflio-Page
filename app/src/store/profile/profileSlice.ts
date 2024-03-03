import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PayloadProfile, ProfileState } from "../../entities/entities";

const initialState: ProfileState = {
  id: 0,
  frontPage: "",
  avatar: "",
  username: "",
  title: "",
  description: "",
  status: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<PayloadProfile["profile"]>) => {
      state.id = action.payload.id;
      state.frontPage = action.payload.frontPage;
      state.avatar = action.payload.avatar;
      state.username = action.payload.username;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.status = action.payload.status;
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
