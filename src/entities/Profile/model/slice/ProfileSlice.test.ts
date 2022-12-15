import {
  profileActions,
  profileReducer,
  ProfileSchema,
} from 'entities/Profile';

describe('ProfileSlice.test', () => {
  test('change of readonly state', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.onChangeReadOnly(true)))
      .toEqual({ readonly: true });
  });
});
