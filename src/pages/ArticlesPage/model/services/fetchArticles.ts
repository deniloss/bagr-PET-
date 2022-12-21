import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticles = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
  >(
    'pages/fetchArticles',
    async (_, ThunkApi) => {
      const {
        extra,
        rejectWithValue,
        dispatch,
      } = ThunkApi;

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
          },
        });

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (e) {
        return rejectWithValue(i18n.t('****'));
      }
    },
  );
