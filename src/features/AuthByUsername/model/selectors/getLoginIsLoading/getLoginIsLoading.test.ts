import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
  test('return true value', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('return false value', () => {
    const state:DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: false,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
