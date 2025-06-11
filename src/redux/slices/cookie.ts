import { COOKIE_INITIAL_STATE } from "@/lib/redux.lib";
import { createSlice } from "@reduxjs/toolkit";

const cookieSlice = createSlice({
  name: "cookie",
  initialState: COOKIE_INITIAL_STATE,
  reducers: {
    setLayoutPadding: (state, action) => {
      state.layoutPadding = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setLayoutPadding, setTheme } = cookieSlice.actions;
export default cookieSlice.reducer;
