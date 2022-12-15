import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, userSchema } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'app/const/localstorage';

const initialState: userSchema = {
  _inited: false,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authUser: (state, action: PayloadAction<User>) => {
      state.AuthData = action.payload;
    },

    initAuthUser: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.AuthData = JSON.parse(user);
      }
      state._inited = true;
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.AuthData = undefined;
    },
  },
});

export const { actions: userActions } = UserSlice;
export const { reducer: userReducer } = UserSlice;
