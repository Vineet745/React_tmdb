import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies : [],
  tvshow: [],
}

export const counterSlice = createSlice({
  name:"movie",
  initialState,
  reducers: { 
    loadimages: (state, action) => {
      state.movies = action.payload;
    },
    loadtvshow: (state, action) => {
      state.tvshow = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadimages,loadtvshow } = counterSlice.actions;

export default counterSlice.reducer