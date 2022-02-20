import {createSlice} from '@reduxjs/toolkit';
import runTimeState from '../initial-states/runTimeState';
import {
  getCategoriesWS,
  getGifWS,
  getSearchGifsWS,
  getTrendingGifsWS,
} from '../../WebService';

const RunTimeSlice = createSlice({
  name: 'runTime',
  initialState: runTimeState,
  reducers: {
    /**
     * change grip layout columns count by looping supported array
     * @param state
     */
    alterGridLayout(state) {
      state.gridColumnInd =
        (state.gridColumnInd + 1) % state.supportedColumns.length;

      state.gridColumnCount = state.supportedColumns[state.gridColumnInd];
      console.log(state.gridColumnCount);
    },
    /**
     * set the loading state of categories
     * @param state
     * @param action
     */
    isLoadingCategories(state, action) {
      state.loadingCategories = action.payload;
    },
    /**
     * set the categories data
     * @param state
     * @param action
     */
    setCategories(state, action) {
      state.categories = action.payload;
    },
    /**
     * appends fetched gifs to trending array
     * increment trendingOffset for making pagination
     * @param state
     * @param action
     */
    appendTrendingGifs(state, action) {
      state.trendingGifs.push(...action.payload);
      state.trendingOffset += state.requestLimit;
    },
    /**
     * appends fetched gifs to search array
     * increment searchOffset for making pagination
     * @param state
     * @param action
     */
    appendSearchGifs(state, action) {
      state.searchGifs.push(...action.payload);
      state.searchOffset += state.requestLimit;
    },
    /**
     * sets detailed image title and image src
     * @param state
     * @param action
     */
    setDetailedImage(state, action) {
      state.detailedImage = action.payload;
    },
    /**
     * set the loading state of gallery
     * @param state
     * @param action
     */
    isLoadingGifs(state, action) {
      state.loadingGifs = action.payload;
    },
    /**
     * clear search array
     * if same category is selected it will be unselected
     * else set selected category state to the selected item
     * set isSearching state depending on the searching data existing or not
     * @param state
     * @param action
     */
    setSelectedCategory(state, action) {
      state.searchOffset = 0;
      state.searchGifs = [];
      if (state.selectedCategory === action.payload) {
        state.selectedCategory = '';
        if (state.searchQuery === '') {
          state.isSearching = false;
        }
      } else {
        state.selectedCategory = action.payload;
        state.isSearching = true;
      }
    },
    /**
     * clear search array
     * apply search query to the searchQuery state
     * set isSearching state depending on the searching data existing or not
     * @param state
     * @param action
     */
    setSearchQuery(state, action) {
      state.searchOffset = 0;
      state.searchGifs = [];
      state.searchQuery = action.payload;
      if (state.searchQuery === '' && state.selectedCategory === '') {
        state.isSearching = false;
      } else {
        state.isSearching = true;
      }
    },
  },
});

/**
 * get Gifs main categories
 * @returns {(function(*): Promise<void>)|*}
 */
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

/**
 * get trending Gifs and append data to trendingGifs
 * @returns {(function(*, *): Promise<void>)|*}
 */
export const getTrending = () => {
  return async (dispatch, getState) => {
    const {requestLimit, trendingOffset} = getState().runTimeReducer;
    dispatch(RunTimeActions.isLoadingGifs(true));
    try {
      const response = await getTrendingGifsWS(requestLimit, trendingOffset);
      dispatch(RunTimeActions.appendTrendingGifs(response));
      dispatch(RunTimeActions.isLoadingGifs(false));
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * get search result Gifs and append data to searchGifs
 * @returns {(function(*, *): Promise<void>)|*}
 */
export const getSearchGifs = () => {
  return async (dispatch, getState) => {
    const {requestLimit, searchOffset, selectedCategory, searchQuery} =
      getState().runTimeReducer;
    dispatch(RunTimeActions.isLoadingGifs(true));
    try {
      const query = selectedCategory + ' ' + searchQuery;
      const response = await getSearchGifsWS(requestLimit, searchOffset, query);
      dispatch(RunTimeActions.appendSearchGifs(response));
      dispatch(RunTimeActions.isLoadingGifs(false));
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * get Gif details with the given id to show in the details page
 * @param id Gif id
 * @returns {(function(*): Promise<void>)|*}
 */
export const getGif = id => {
  return async dispatch => {
    try {
      const response = await getGifWS(id);
      dispatch(RunTimeActions.setDetailedImage(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const RunTimeActions = RunTimeSlice.actions;

export default RunTimeSlice;
