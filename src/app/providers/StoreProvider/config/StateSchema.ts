import { CounterSchema } from 'entities/Counter';
import { userSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { To } from 'history';
import { NavigateOptions } from 'react-router';

export interface StateSchema {
  counter: CounterSchema,
  user: userSchema,
  loginForm: LoginSchema,
  profile: ProfileSchema
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
}
