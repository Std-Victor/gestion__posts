import {createSlice} from "@reduxjs/toolkit";
import {loginUser, logOutUser, signUpUser} from "./user.api.calls";

const INITIAL_STATE = {
  currentUser: null,
  token: localStorage.getItem('ACCESS_TOKEN'),
  pending: false,
  errors:{
    login: null,
    signup: null
  }
}
const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers:{
    unsetErrors: state => {
      state.errors = {login: null, signup: null};
    }
  },
  extraReducers:{
    [loginUser.pending]: state => {
      state.pending = true;
    },
    [loginUser.fulfilled]: (state, {payload:{user, token}}) => {
      state.pending = false;
      state.currentUser = user;
      state.token = token;
      localStorage.setItem('ACCESS_TOKEN', token);
    },
    [loginUser.rejected]:(state,action) => {
      state.pending = false;
      state.errors.login = action.payload;
    },
    [signUpUser.pending]:state => {
      state.pending = true;
    },
    [signUpUser.fulfilled]:(state, {payload:{user, token}}) => {
      state.pending = false;
      state.currentUser = user;
      state.token = token;
      localStorage.setItem('ACCESS_TOKEN', token);
    },
    [signUpUser.rejected]:(state,action) => {
      state.pending = false;
      state.errors.signup = action.payload;
    },
    [logOutUser.pending]:state => {
      state.pending = true;
    },
    [logOutUser.fulfilled]:(state) => {
      state.pending = false;
      state.currentUser = null;
      state.token = null;
      localStorage.removeItem('ACCESS_TOKEN');
    },
    [logOutUser.rejected]:(state) => {
      state.pending = false;
    }
  }
})

export const { unsetErrors} = userSlice.actions
export default userSlice.reducer