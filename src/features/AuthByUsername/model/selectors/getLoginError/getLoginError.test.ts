import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('return string', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });

  test('return undefined', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        error: '',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('');
  });
});
