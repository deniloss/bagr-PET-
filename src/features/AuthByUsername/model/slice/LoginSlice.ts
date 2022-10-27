import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';
import { loginByUsername } from '../services/loginByUsername/ loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  error: '',
  isLoading: false,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action:PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state, action) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: loginActions } = LoginSlice;
export const { reducer: loginReducer } = LoginSlice;
