import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/user.slice.js";
import postReducer from "./post/post.slice.js";
import logger from 'redux-logger';
export const store = configureStore({
  reducer:{
    user: userReducer,
    post: postReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})