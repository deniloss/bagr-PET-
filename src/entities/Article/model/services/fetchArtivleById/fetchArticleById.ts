import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
  >(
    'articleDetails/fetchArticleById',
    async (id, thunkApi) => {
      const { extra, rejectWithValue } = thunkApi;

      try {
        const response = await extra.api.get<Article>(`/articles/${id}`);

        if (!response.data) {
          throw new Error();
        }
        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
