import { CounterSchema } from 'entities/Counter';
import { userSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { To } from 'history';
import { NavigateOptions } from 'react-router';
import { ArticleSchema } from 'entities/Article';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { CommentFormSchema } from 'features/AddCommentForm';

export interface StateSchema {
  counter: CounterSchema,
  user: userSchema,
  loginForm: LoginSchema,
  profile: ProfileSchema,
  ArticleDetails: ArticleSchema,
  ArticleDetailsComments: ArticleDetailsCommentSchema,
  CommentForm: CommentFormSchema,
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
