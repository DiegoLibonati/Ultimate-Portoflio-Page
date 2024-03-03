import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PublicationFeedState, PayloadPublicationFeed } from "../../entities/entities";

const initialState: PublicationFeedState = {
  publicationsFeed: [],
  activePublicationFeed: null,
};

export const publicationsFeedSlice = createSlice({
  name: "publicationsFeed",
  initialState,
  reducers: {
    setPublicationsFeed: (
      state,
      action: PayloadAction<PayloadPublicationFeed["publicationsFeed"]>
    ) => {
      state.publicationsFeed = action.payload;
      return;
    },
    setPublicationFeed: (
      state,
      action: PayloadAction<PayloadPublicationFeed["activePublicationFeed"]>
    ) => {
      state.activePublicationFeed = action.payload;
      return;
    },
  },
});

export const { setPublicationsFeed, setPublicationFeed } = publicationsFeedSlice.actions;

export default publicationsFeedSlice.reducer;
