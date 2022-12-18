import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, getProfileForm, validateProfileData } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

export const saveProfileData = createAsyncThunk<
  Profile,
  string | undefined,
  ThunkConfig<ValidateProfileError[]>
  >(
    'profile/saveProfileData',
    async (userId, thunkApi) => {
      const { extra, rejectWithValue, getState } = thunkApi;

      const formData = getProfileForm(getState());

      const errors = validateProfileData(formData);

      if (errors?.length) {
        return rejectWithValue(errors);
      }

      try {
        const response = await extra.api.put<Profile>(`/profile/${userId}`, formData);

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
      }
    },
  );
