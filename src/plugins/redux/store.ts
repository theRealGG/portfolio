import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import sectionReducers from './features/sectionSlice';

const rootReducer = combineReducers({
  sections: sectionReducers
});

const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({ reducer: rootReducer, preloadedState });

const store = setupStore();

export default store;
export { setupStore };
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
