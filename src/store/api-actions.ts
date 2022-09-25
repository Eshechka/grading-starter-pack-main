import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../const';
import { AppDispatch, State } from 'types/state';
import { Quest } from 'types/quest';


export const fetchQuests = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'quests/fetchAll',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Quest[]>(APIRoute.Quests);
    return data;
  },
);

export const fetchQuest = createAsyncThunk<Quest, { id: string }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'quests/fetchOne',
  async ({ id }, { dispatch, extra: api }) => {
    const { data } = await api.get<Quest>(`${APIRoute.Quests}/${id}`);
    return data;
  },
);
