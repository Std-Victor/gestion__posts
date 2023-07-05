import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosClient from "../axios-client";

export const fetchPostsData = createAsyncThunk(
    "posts/fetch",
    async (_,{rejectWithValue}) => {
      try {
        const {data} = await axiosClient.get("/posts");
        return data;
      } catch (error) {
        return rejectWithValue(error)
      }
    }
)

export const fetchPostCategories = createAsyncThunk(
    "post/category",
    async (_, {rejectWithValue})=>{
      try {
        const {data} = await axiosClient.get("/categories");
        return data;
      } catch (error){
        return rejectWithValue(error);
      }
    }
)

export const getPostData = createAsyncThunk(
    "posts/getPost",
    async (post_id, {rejectWithValue})=>{
      try {
        const {data} = await axiosClient.get(`/posts/${post_id}`);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
)

export const addPost = createAsyncThunk(
    "posts/addPost",
    async (post_data, {rejectWithValue})=>{
      try {
        const { data:{message} } = await axiosClient.post("/posts", post_data)
        return message;
      } catch (error) {
        if(error.errors){
          return rejectWithValue(error.errors)
        }else {
          return rejectWithValue(error.message)
        }
      }
    }
)

export const updatePost = createAsyncThunk(
    "posts/update",
    async (post_data, {rejectWithValue})=> {
      try {
        const {data:{message}} = await axiosClient.put(`/posts/${post_data.id}`, post_data);
        return message;
      } catch (error) {
        if(error.errors){
          return rejectWithValue(error.errors)
        }else {
          return rejectWithValue(error.message)
        }
      }
    }
)

export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async (post_id, {rejectWithValue})=> {
      try {
        const {data:{message}} = await axiosClient.delete(`/posts/${post_id}`);
        return message;
      } catch (error){
        return rejectWithValue(error.message);
      }
    }
)