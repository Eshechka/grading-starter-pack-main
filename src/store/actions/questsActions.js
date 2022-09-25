import { createSlice } from "@reduxjs/toolkit";
import { fetchQuest, fetchQuests } from "store/api-actions";

const questSlice = createSlice({
  name: "quest",
  initialState: {
    quest: null,
    quests: null,
    loading: false,
  },

  reducers: {},

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
      });

  },
});

export default questSlice.reducer;
