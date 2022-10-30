import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from 'entities/Profile';
import { Country } from 'app/const/common';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

const data: Profile = {
  firstname: 'admin',
  lastname: 'admin',
  age: 22,
  city: 'Moscow',
  country: Country.Germany,
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
  username: 'denilos',
};

describe('validateProfileData', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('without errors', async () => {
    const response = validateProfileData(data);

    expect(response).toEqual([]);
  });

  test('without names', async () => {
    const response = validateProfileData({ ...data, firstname: '', lastname: '' });

    expect(response).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('without city', async () => {
    const response = validateProfileData({ ...data, city: '' });

    expect(response).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test('without country', async () => {
    const response = validateProfileData({ ...data, country: undefined });

    expect(response).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('without age', async () => {
    const response = validateProfileData({ ...data, age: undefined });

    expect(response).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
});
