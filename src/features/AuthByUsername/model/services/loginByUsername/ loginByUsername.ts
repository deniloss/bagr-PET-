import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import i18n from 'i18next';
import { USER_LOCAL_STORAGE_KEY } from 'app/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

export interface loginProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  loginProps,
  ThunkConfig<string>
  >(
    'login/loginByUsername',
    async (AuthData, ThunkApi) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
      } = ThunkApi;

      try {
        const response = await extra.api.post<User>('/login', AuthData);

        if (!response.data) {
          throw new Error();
        }
        dispatch(userActions.authUser(response.data));
        localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
        return response.data;
      } catch (e) {
        return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
      }
    },
  );
