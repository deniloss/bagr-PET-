// todo Сделать тесты

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'i18next';
import { USER_LOCAL_STORAGE_KEY } from 'app/const /localstorage';

export interface loginProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, loginProps, {rejectValue: string}>(
  'login/loginByUsername',
  async (AuthData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', AuthData);

      if (!response.data) {
        throw new Error();
      }
      thunkAPI.dispatch(userActions.authUser(response.data));
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
    }
  },
);
