import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly.test', () => {
  test('return true', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
  });

  test('return false', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    };
    expect(getProfileReadOnly(state as StateSchema)).toEqual(false);
  });
});
