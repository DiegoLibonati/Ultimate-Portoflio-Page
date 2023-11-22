import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProfileStateType } from "../../entities/types";

interface payload {
  profile: {
    id: number;
    frontPage: string;
    avatar: string;
    username: string;
    title: string;
    description: string;
    status: string;
  };
}

// Define the initial state using that type
const initialState: ProfileStateType = {
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
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<payload["profile"]>) => {
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
