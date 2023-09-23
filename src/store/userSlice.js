import {createSlice, createAction} from '@reduxjs/toolkit';
import localStorageService from '../services/localStorage.service';
import authService from '../services/auth.service';
import {toast} from 'react-toastify';
import {generateAuthError} from '../utils/generateAuthError';
import userService from '../services/user.service';

const initialState = localStorageService.getAccessToken() ?
{
  entities: null,
  isLoading: true,
  error: null,
  auth: {userId: localStorageService.getUserId()},
  isLoggedIn: true,
  isRegistering: false,
}:
{
  entities: null,
  isLoading: false,
  error: null,
  auth: null,
  isLoggedIn: false,
  isRegistering: false,
};


const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.auth = action.payload._id;
      state.isLoggedIn = true;
      state.error = null;
    },
    authRequestFailed: (state, action) => {
      state.entities = null;
      state.auth = null;
      state.error = action.payload;
    },
    userCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
    },
    userUpdateSuccess: (state, action) => {
      state.entities = action.payload;
    },
    authRequested: (state) => {
      state.error = null;
    },
    userLoadRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.auth = action.payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
  },
});
const {reducer: userReducer, actions} = usersSlice;
const {
  authRequestFailed,
  authRequestSuccess,
  userLoggedOut,
  userUpdateSuccess,
  userLoadRequestSuccess,
} = actions;

const authRequested = createAction('users/authRequested');
const userLoadRequested = createAction('users/userLoadRequested');
const userLoadRequestFailed = createAction('users/userLoadRequestFailed');
const userUpdateFailed = createAction('users/userUpdateFailed');
const userUpdateRequested = createAction('users/userUpdateRequested');

export const signUp = (payload) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register(payload);
      console.log(data);
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess(data.user));
    } catch (error) {
      const {code, message} = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else if (code === 500) {
        dispatch(authRequestFailed('Server error. Please repeat latter...'));
      }
    }
  };
export const signUpWithGoogle = (payload) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.registerWithGoogle(payload);
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess(data.user));
    } catch (error) {
      const {code, message} = error.response.data.error;
      if (code === 400) {
        const errorMessage = generateAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else if (code === 500) {
        dispatch(authRequestFailed('Server error. Please repeat latter...'));
      }
    }
  };
export const loginWithGoogle = (payload) =>async (dispatch) =>{
  const {email} = payload;
  dispatch(authRequested());
  try {
    const data = await authService.loginWithGoogle({email});
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess(data.user));
  } catch (error) {
    const {code, message} = error.response.data.error;
    if (code === 400) {
      const errorMessage = generateAuthError(message);
      dispatch(authRequestFailed(errorMessage));
    } else if (code === 500) {
      dispatch(authRequestFailed('Server error. Please repeat latter...'));
    }
  }
};
export const login = ({payload}) => async (dispatch) => {
  const {email, password} = payload;
  dispatch(authRequested());
  try {
    const data = await authService.login({email, password});
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess(data.user));
  } catch (error) {
    const {code, message} = error.response.data.error;
    if (code === 400) {
      const errorMessage = generateAuthError(message);
      dispatch(authRequestFailed(errorMessage));
    }
  }
};
export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  history.push('/');
};
export const updateUser = (payload) => async (dispatch) => {
  dispatch(userUpdateRequested());
  try {
    const {content} = await userService.update(payload);
    dispatch(userUpdateSuccess(content));
    toast.dark('User info updated', {
      hideProgressBar: true,
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    history.push(`/user`);
  } catch (error) {
    dispatch(userUpdateFailed(error.message));
  }
};
export const loadUser = () => async (dispatch) => {
  dispatch(userLoadRequested());
  try {
    const content = await userService.getCurrentUser();
    dispatch(userLoadRequestSuccess({...content}));
  } catch (error) {
    console.log(error);
    dispatch(userLoadRequestFailed(error.message));
  }
};
export const getUser = () => (state) => state.user.entities;
export const getIsLoadingUser = () => (state) => state.user.isLoading;
export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getAuthErrors = () => (state) => state.user.error;

export default userReducer;
