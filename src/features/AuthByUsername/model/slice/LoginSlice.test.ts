import { loginActions, loginReducer, LoginSchema } from 'features/AuthByUsername';

describe('LoginSlice.test', () => {
  test('return username', () => {
    const state: DeepPartial<LoginSchema> = { username: '' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('denilos'))).toEqual({ username: 'denilos' });
  });

  test('return password', () => {
    const state: DeepPartial<LoginSchema> = { password: '' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123123123'))).toEqual({ password: '123123123' });
  });
});
