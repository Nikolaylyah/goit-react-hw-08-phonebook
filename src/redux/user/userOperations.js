import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import {
  logInUser,
  logOutUser,
  refreshCurrenthUser,
  signUpUser,
} from "../../services/contactsApiService";

export const signUp = createAsyncThunk(
  "user/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await signUpUser(credentials);
      return response;
    } catch (error) {
      Notify.error("We already have a user with such email!");
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await logInUser(credentials);
      return response;
    } catch (error) {
      Notify.error("Login or password were rejected!");
      return rejectWithValue(error.message);
    }
  },
);

export const logOut = createAsyncThunk(
  "user/logout",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await logOutUser(credentials);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const refresh = createAsyncThunk(
  "user/refresh",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.user.token;

    if (!persistedToken) {
      return rejectWithValue();
    }

    const response = await refreshCurrenthUser(persistedToken);
    return response;
  },
);
