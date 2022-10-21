import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from 'entities/Profile/model/types/profile';
import { fetchProfileData } from 'entities/Profile';

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

  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions } = ProfileSlice;
export const { reducer: profileReducer } = ProfileSlice;
