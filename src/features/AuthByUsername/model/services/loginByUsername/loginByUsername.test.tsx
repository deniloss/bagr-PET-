import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/ loginByUsername';
import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success', async () => {
    const userValue = { username: '123', password: '123' };
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: { username: '123', password: '123' } }));
    const result = await thunk.callThunk(userValue);

    expect(thunk.dispatch).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('error', async () => {
    const userValue = { username: '123', password: '123' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(userValue);

    expect(thunk.dispatch).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(undefined);
  });
});
