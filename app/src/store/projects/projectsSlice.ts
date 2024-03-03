import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  ProjectState,
  PayloadProjects,
} from "../../entities/entities";

const initialState: ProjectState = {
  projects: [],
  activeProject: null,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (
      state,
      action: PayloadAction<PayloadProjects["projects"]>
    ) => {
      state.projects = action.payload;
      return;
    },
    setProject: (
      state,
      action: PayloadAction<PayloadProjects["activeProject"]>
    ) => {
      state.activeProject = action.payload;
      return;
    },
  },
});

export const { setProjects, setProject } = projectsSlice.actions;

export default projectsSlice.reducer;
