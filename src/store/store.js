import {configureStore} from '@reduxjs/toolkit';
import RunTimeSlice from './slices/runTimeSlice';

const store = configureStore({
  reducer: {
    runTimeReducer: RunTimeSlice.reducer,
  },
});

export default store;
