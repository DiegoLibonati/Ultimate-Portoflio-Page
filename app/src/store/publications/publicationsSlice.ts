import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PublicationStateType, PublicationType } from "../../entities/types";

interface payload {
  publications: PublicationType[];
  activePublication: PublicationType;
  likes: {
    idPublication: number | undefined;
    likes: number;
  };
}

// Define the initial state using that type
const initialState: PublicationStateType = {
  publications: [],
  activePublication: null,
};

export const publicationsSlice = createSlice({
  name: "publications",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPublications: (
      state,
      action: PayloadAction<payload["publications"]>
    ) => {
      state.publications = action.payload;
      return;
    },
    setPublication: (
      state,
      action: PayloadAction<payload["activePublication"]>
    ) => {
      state.activePublication = action.payload;
      return;
    },
    setLikes: (state, action: PayloadAction<payload["likes"]>) => {
      if (
        state.activePublication &&
        action.payload.idPublication === state.activePublication.id
      ) {
        state.activePublication!.likes = action.payload.likes;
      }

      if (state.publications.length > 0) {
        state.publications.map((publication: PublicationType) => {
          if (publication.id === action.payload.idPublication) {
            publication.likes = action.payload.likes;
          }
          return publication;
        });
      }

      return;
    },
  },
});

export const { setPublications, setPublication, setLikes } =
  publicationsSlice.actions;

export default publicationsSlice.reducer;
