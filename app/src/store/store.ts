import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profile/profileSlice";
import uiSlice from "./ui/uiSlice";
import publicationsFeedSlice from "./publicationsFeed/publicationsFeedSlice";
import projectsSlice from "./projects/projectsSlice";
import certificatesSlice from "./certificates/certificatesSlice";
import worksSlice from "./works/worksSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice,
    ui: uiSlice,
    publicationsFeed: publicationsFeedSlice,
    projects: projectsSlice,
    certificates: certificatesSlice,
    works: worksSlice,
  },
});
