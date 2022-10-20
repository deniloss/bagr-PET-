import { CounterSchema } from 'entities/Counter';
import { userSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';

export interface StateSchema {
  counter: CounterSchema,
  user: userSchema,
  loginForm: LoginSchema,
  profile: ProfileSchema
}
