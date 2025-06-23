import { configureStore } from '@reduxjs/toolkit';
import assignmentsReducer from './assignmentsSlice';

const store = configureStore({
  reducer: {
    assignments: assignmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
