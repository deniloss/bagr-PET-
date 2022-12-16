import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { $api } from 'shared/api/api';
import { NavigateOptions } from 'react-router';
import { To } from 'history';
import { ArticleReducer } from 'entities/Article/model/slice/ArticleSlice';
import { ArticleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/ArticleDetailsCommentsSlice';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createStore(initialState?: StateSchema, navigate?: (to: To, options?: NavigateOptions) => void) {
  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
  };

  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
    profile: profileReducer,
    ArticleDetails: ArticleReducer,
    ArticleDetailsComments: ArticleDetailsCommentsReducer,
  };

  return configureStore({
    devTools: __IS_DEV__,
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  });
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
