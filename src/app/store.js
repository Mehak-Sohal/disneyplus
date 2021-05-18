import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice.js";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
