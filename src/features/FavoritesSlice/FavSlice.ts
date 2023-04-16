import { createSlice } from '@reduxjs/toolkit';
import type { HeroType } from '../../types';

const initialState: HeroType[] = [];

const favSlice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addHero(state, action) {
      state.push(action.payload);
    },
    deleteFav(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addHero, deleteFav } = favSlice.actions;
export default favSlice.reducer;
