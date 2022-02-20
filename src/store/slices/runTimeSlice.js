import {createSlice} from '@reduxjs/toolkit';
import runTimeState from '../initial-states/runTimeState';
import {getCategoriesWS, getTrendingGifsWS} from '../../WebService';

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
    },
    appendTrendingGifs(state, action) {
      state.trendingGifs.push(...action.payload);
      state.trendingOffset += state.requestLimit;
    },
  },
});

export const getCategories = () => {
  return async dispatch => {
    dispatch(RunTimeActions.isLoadingCategories(true));

    try {
      const response = await getCategoriesWS();
      dispatch(RunTimeActions.setCategories(response));
      dispatch(RunTimeActions.isLoadingCategories(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTrending = () => {
  return async (dispatch, getState) => {
    const {requestLimit, trendingOffset} = getState().runTimeReducer;
    try {
      const response = await getTrendingGifsWS(requestLimit, trendingOffset);
      dispatch(RunTimeActions.appendTrendingGifs(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const RunTimeActions = RunTimeSlice.actions;

export default RunTimeSlice;
