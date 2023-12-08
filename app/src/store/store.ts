import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profile/profileSlice";
import uiSlice from "./ui/uiSlice";
import publicationsSlice from "./publications/publicationsSlice";
import certificatesSlice from "./certificates/certificatesSlice";
import projectsSlice from "./projects/projectsSlice";
import worksSlice from "./works/worksSlice";
// ...

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    ui: uiSlice,
    publications: publicationsSlice,
    certificates: certificatesSlice,
    projects: projectsSlice,
    works: worksSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
