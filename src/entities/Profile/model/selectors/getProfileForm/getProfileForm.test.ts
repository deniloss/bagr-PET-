import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from 'entities/Profile';
import { Country } from 'app/const/common';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('return profile form object', () => {
    const data: Profile = {
      firstname: 'admin',
      lastname: 'admin',
      age: 22,
      city: 'Moscow',
      country: Country.Germany,
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      username: 'denilos',
    };
    const state:DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
});
