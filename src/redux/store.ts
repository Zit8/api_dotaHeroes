import { configureStore, combineReducers } from '@reduxjs/toolkit';
import heroesSlices from '../features/HeroSlice/heroesSlices';
import favSlice from '../features/FavoritesSlice/FavSlice';

const rootReducer = combineReducers({
  heroes: heroesSlices,
  favSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
