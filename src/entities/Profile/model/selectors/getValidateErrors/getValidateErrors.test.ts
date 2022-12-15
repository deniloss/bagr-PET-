import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { getValidateErrors } from './getValidateErrors';

describe('getValidateErrors.test', () => {
  test('return undefined', () => {
    const state:DeepPartial<StateSchema> = {
      profile: {
        validateErrors: undefined,
      },
    };
    expect(getValidateErrors(state as StateSchema)).toEqual(undefined);
  });

  test('with 1 object', () => {
    const errors: ValidateProfileError[] = [ValidateProfileError.SERVER_ERROR];

    const state:DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };
    expect(getValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test('more than 1 object', () => {
    const errors: ValidateProfileError[] = [
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
    ];

    const state:DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };
    expect(getValidateErrors(state as StateSchema)).toEqual(errors);
  });
});
