import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile/model/types/profile';

const initialState: ProfileSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
  readonly: true,
};

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
