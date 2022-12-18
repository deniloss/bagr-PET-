import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from 'entities/Profile';
import { Country } from 'app/const/common';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('return profile object', () => {
    const data: Profile = {
      id: '1',
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
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
});
