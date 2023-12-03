import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profile/profileSlice";
import uiSlice from "./ui/uiSlice";
import publicationsSlice from "./publications/publicationsSlice";
import certificatesSlice from "./certificates/certificatesSlice";
// ...

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    ui: uiSlice,
    publications: publicationsSlice,
    certificates: certificatesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
