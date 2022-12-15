import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  test('return error', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        error: ValidateProfileError.SERVER_ERROR,
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual(ValidateProfileError.SERVER_ERROR);
  });

  test('return undefined', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        error: undefined,
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
