import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosClient from "../axios-client.js";

export const loginUser = createAsyncThunk(
  "user/login",
  async (user_data, {rejectWithValue}) => {
    try {
      const {data} = await axiosClient.post("/login", user_data);
      return data
    } catch (error) {
        // if(error.errors){
        //   return rejectWithValue(error.errors)
        // }else {
        //   return rejectWithValue(error.message)
        // }
      return rejectWithValue(error.message)
    }
  }
)

export const signUpUser = createAsyncThunk(
    "user/signUp",
    async (user_data, {rejectWithValue})=> {
      try {
        const {data} = await axiosClient.post("/signup", user_data)
        return data
      } catch (error) {
          if(error.errors){
            return rejectWithValue(error.errors)
          }else {
            return rejectWithValue(error.message)
          }

      }
    }
)

export const logOutUser = createAsyncThunk(
    "user/logOut",
    async () => {
      try {
        await axiosClient.post('/logout');
      } catch (error) {
        console.log(error);
      }
    }
)