import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, getProfileForm } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData';

export const saveProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
  >(
    'profile/saveProfileData',
    async (_, thunkApi) => {
      const { extra, rejectWithValue, getState } = thunkApi;

      const formData = getProfileForm(getState());

      const errors = validateProfileData(formData);

      if (errors?.length) {
        return rejectWithValue(errors);
      }

      try {
        const response = await extra.api.put<Profile>('/profile', formData);

        return response.data;
      } catch (e) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
      }
    },
  );
