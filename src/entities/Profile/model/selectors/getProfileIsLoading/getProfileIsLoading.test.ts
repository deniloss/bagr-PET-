import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('return true', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('return false', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });
});
