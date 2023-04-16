import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { HeroType } from '../../types';

type InitSlice = {
  heroes: HeroType[];
};

const initialState: InitSlice = {
  heroes: [],
};

export const getHeroesThunk = createAsyncThunk('heroes/allheroes', async () =>
  axios<HeroType[]>(`https://api.opendota.com/api/heroStats`)
    .then((res) => res.data)
    .catch((err) => console.log(err)),
);

const heroesSlice = createSlice({
  name: 'heroesSlice',
  initialState,
  reducers: {
    filterHeroes(state, action) {
      console.log(action.payload);
      state.heroes = state.heroes.filter((hero) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        hero.localized_name.includes(action.payload),
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHeroesThunk.fulfilled, (state, action) => {
      state.heroes = action.payload;
      console.log(state.heroes);
    });
  },
});
export const { filterHeroes } = heroesSlice.actions;
export default heroesSlice.reducer;
