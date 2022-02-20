import {createSlice} from '@reduxjs/toolkit';
import runTimeState from '../initial-states/runTimeState';
import {getCategoriesWS} from '../../WebService';

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
    isLoadingCategories(state, action) {
      state.loadingCategories = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
      console.log(state.categories);
    },
  },
});

export const getCategories = () => {
  console.log('0');
  return async dispatch => {
    console.log('1');
    dispatch(RunTimeActions.isLoadingCategories(true));

    try {
      console.log('2');
      const response = await getCategoriesWS();
      console.log(response);
      dispatch(RunTimeActions.setCategories(response));
      dispatch(RunTimeActions.isLoadingCategories(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const RunTimeActions = RunTimeSlice.actions;

export default RunTimeSlice;
