import {createSlice} from '@reduxjs/toolkit';
import categoryService from '../services/category.service';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    categoriesRequested: (state) => {
      state.isLoading = true;
    },
    categoriesReceived: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    },
    categoriesRequestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const uploadCategoriesList = () => async (dispatch) => {
  dispatch(categoriesRequested());
  try {
    const data = await categoryService.get();
    dispatch(categoriesReceived(data));
  } catch (error) {
    dispatch(categoriesRequestFailed(error));
  }
};

export const getCategories = () => (state) => state.categories.entities;
export const getCategoriesLoadingStatus = () => (state) => state.categories.isLoading;
export const {
  categoriesRequested,
  categoriesReceived,
  categoriesRequestFailed,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
