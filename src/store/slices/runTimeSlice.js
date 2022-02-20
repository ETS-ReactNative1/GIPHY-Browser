import {createSlice} from '@reduxjs/toolkit';
import runTimeState from '../initial-states/runTimeState';

const RunTimeSlice = createSlice({
  name: 'runTime',
  initialState: runTimeState,
  reducers: {
    alterGridLayout(state) {
      state.gridColumnInd =
        (state.gridColumnInd + 1) % state.supportedColumns.length;

      state.gridColumnCount = state.supportedColumns[state.gridColumnInd];
      console.log(state.gridColumnCount);
    },
  },
});

export const RunTimeActions = RunTimeSlice.actions;

export default RunTimeSlice;
