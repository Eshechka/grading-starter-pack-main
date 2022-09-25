import { createSlice } from "@reduxjs/toolkit";
import { bookQuest, fetchQuest, fetchQuests } from "store/api-actions";

const questSlice = createSlice({
  name: "quest",
  initialState: {
    quest: null,
    quests: null,
    loading: false,
    book: null,
  },

  reducers: {
    clearBook: (state) => {
      state.book = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuests.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuests.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.quests = payload;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchQuest.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.quest = payload;
      })
      .addCase(fetchQuest.rejected, (state) => {
        state.loading = false;
      })
      .addCase(bookQuest.fulfilled, (state, { payload }) => {
        state.book = true;
      })
      .addCase(bookQuest.rejected, (state) => {
        state.book = false;
      });
  },
});

export const { clearBook } = questSlice.actions;

export default questSlice.reducer;
