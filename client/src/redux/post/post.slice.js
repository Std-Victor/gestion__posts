import { createSlice } from "@reduxjs/toolkit";
import {addPost, deletePost, fetchPostCategories, fetchPostsData, getPostData, updatePost} from "./post.api.calls";

const INITIAL_STATE = {
  posts: null,
  currentPost: null,
  categories: null,
  message: null,
  pending: false,
  errors: null,
};
const postSlice = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    unsetState: (state) => {
      state.errors = null;
      state.message = null;
    },
  },
  extraReducers: {
    [fetchPostsData.pending]: (state) => {
      state.pending = true;
    },
    [fetchPostsData.fulfilled]: (state, action) => {
      state.pending = false;
      state.posts = action.payload;
    },
    [fetchPostsData.rejected]: (state, action) => {
      state.pending = false;
      state.errors = action.payload;
    },

    [fetchPostCategories.pending]: (state) => {
      state.pending = true;
    },
    [fetchPostCategories.fulfilled]: (state, action) => {
      state.pending = false;
      state.categories = action.payload;
    },
    [fetchPostCategories.rejected]: (state, action) => {
      state.pending = false;
      state.errors = action.payload;
    },

    [getPostData.pending]: (state) => {
      state.pending = true;
    },
    [getPostData.fulfilled]: (state, action) => {
      state.pending = false;
      state.currentPost = action.payload;
    },
    [getPostData.rejected]: (state, action) => {
      state.pending = false;
      state.errors = action.payload;
    },

    [addPost.pending]: (state) => {
      state.pending = true;
    },
    [addPost.fulfilled]: (state, action) => {
      state.pending = false;
      state.message = action.payload;
    },
    [addPost.rejected]: (state, action) => {
      state.pending = false;
      state.errors = action.payload;
    },

    [updatePost.pending]: (state) => {
      state.pending = true;
    },
    [updatePost.fulfilled]: (state, action) => {
      state.pending = false;
      state.message = action.payload;
    },
    [updatePost.rejected]: (state, action) => {
      state.pending = false;
      state.errors = action.payload;
    },

    [deletePost.pending]: (state) => {
      state.pending = true;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.pending = false;
      state.message = action.payload;
    },
    [deletePost.rejected]: (state, action) => {
      state.pending = false;
      state.errors = action.payload;
    },
  },
});

export const { unsetState } = postSlice.actions;
export default postSlice.reducer;
