import {createSlice} from '@reduxjs/toolkit';
import itemService from '../services/item.service';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    itemsRequested: (state) => {
      state.isLoading = true;
    },
    itemsReceived: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    },
    itemsRequestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    itemCreatRequested: (state) => {
      state.isLoading = true;
    },
    itemCreateReceived: (state, action) => {
      state.isLoading = false;
      state.entities.push(action.payload);
    },
    itemCreateFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    itemDeleteRequested: (state) => {
      state.isLoading = true;
    },
    itemDeleteReceived: (state, action) => {
      state.isLoading = false;
      state.entities = state
          .entities.filter((item)=> item._id !== action.payload);
    },
    itemDeleteFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const uploadItemList = () => async (dispatch) => {
  dispatch(itemsRequested());
  try {
    const data = await itemService.get();
    dispatch(itemsReceived(data));
  } catch (error) {
    dispatch(itemsRequestFailed(error));
  }
};
export const createItem = (payload) => async (dispatch) => {
  dispatch(itemCreatRequested());
  try {
    const data = await itemService.create(payload);
    await dispatch(itemCreateReceived(data));
  } catch (error) {
    dispatch(itemCreateFailed(error));
  }
};
export const deleteItem = (id) => async (dispatch) => {
  dispatch(itemDeleteRequested());
  try {
    await itemService.delete(id);
    dispatch(itemDeleteReceived(id));
  } catch (error) {
    dispatch(itemDeleteFailed(error));
  }
};

export const getItems = () => (state) => state.items.entities;
export const getItemsLoadingStatus = () => (state) => state.items.isLoading;
export const {
  itemsRequested,
  itemsReceived,
  itemsRequestFailed,
  itemCreatRequested,
  itemCreateReceived,
  itemCreateFailed,
  itemDeleteRequested,
  itemDeleteReceived,
  itemDeleteFailed,
} = itemsSlice.actions;

export default itemsSlice.reducer;
