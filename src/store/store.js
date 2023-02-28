import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "../store/Reducer/Counterslice"
import showReducer from "../store/Reducer/Counterslice"
export const store = configureStore({
  reducer: {
    moviefetch: movieReducer,
    showfetch: showReducer,
  },
})