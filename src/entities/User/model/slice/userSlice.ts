import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
