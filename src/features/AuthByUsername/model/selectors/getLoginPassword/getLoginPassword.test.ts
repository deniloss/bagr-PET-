import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
  test('return string', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
});
