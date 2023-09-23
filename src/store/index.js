import {configureStore, combineReducers} from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import categoriesReducer from './categorySlice.js';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  user: userReducer,
});
export default configureStore({
  reducer: rootReducer,
});
