import { configureStore } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosInstance } from 'axios';
import questSlice from '../store/actions/questsActions.js';


const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });


  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      throw error;
    }
  );

  return api;
};

export const api = createAPI();

export const store = configureStore({
  reducer: {
    quests: questSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
