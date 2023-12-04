import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProjectStateType, ProjectType } from "../../entities/types";

interface payload {
  projects: ProjectType[];
  activeProject: ProjectType;
}

// Define the initial state using that type
const initialState: ProjectStateType = {
  projects: [],
  activeProject: null,
};

export const projectsSlice = createSlice({
  name: "projects",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<payload["projects"]>) => {
      state.projects = action.payload;
      return;
    },
    setProject: (state, action: PayloadAction<payload["activeProject"]>) => {
      state.activeProject = action.payload;
      return;
    },
  },
});

export const { setProjects, setProject } = projectsSlice.actions;

export default projectsSlice.reducer;
