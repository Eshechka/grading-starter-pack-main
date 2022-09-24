import { createSlice } from "@reduxjs/toolkit";
import { fetchQuests } from "store/api-actions";

const questSlice = createSlice({
  name: "quest",
  initialState: {
    quests: null,
    loading: false,
  },
  reducers: {
    // setQuests(state, { payload }) {
    //   state.quests = payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuests.pending, (state) => {
      state.loading = true;
    })
      .addCase(fetchQuests.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.quests = payload;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.loading = false;
      });

  },
});

// export const { setQuests } = questSlice.actions;

export default questSlice.reducer;
