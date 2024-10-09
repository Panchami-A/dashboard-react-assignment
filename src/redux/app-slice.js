import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Automatically detects the system's theme preference (light or dark)
  darkMode:
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
};

const appSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    // No need for a toggle function since we're using the browser's theme preference
    setDarkMode: (state, action) => {
      console.log(
        window.matchMedia("prefers-color-scheme"),
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
      state.darkMode = action.payload;
    },
  },
});

export const { setDarkMode } = appSlice.actions;
export default appSlice.reducer;
