import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { StateSchema } from './StateSchema';

const rootReducers: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer,
  loginForm: loginReducer,
  profile: profileReducer,
};

export function createStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    devTools: __IS_DEV__,
    reducer: rootReducers,
    preloadedState: initialState,
  });
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
