import { CounterSchema } from 'entities/Counter';
import { userSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleSchema } from 'entities/Article';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { CommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ScrollSaveSchema } from 'features/scrollSave';

export interface StateSchema {
  counter: CounterSchema,
  user: userSchema,
  CommentForm: CommentFormSchema,
  scrollSave: ScrollSaveSchema,

  // async
  loginForm?: LoginSchema,
  profile?: ProfileSchema,
  ArticleDetails?: ArticleSchema,
  ArticleDetailsComments?: ArticleDetailsCommentSchema,
  ArticlesList?: ArticlesPageSchema,
}

export type stateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: stateSchemaKey, reducer: Reducer) => void;
  remove: (key: stateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
