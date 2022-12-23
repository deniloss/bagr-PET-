import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface fetchArticlesProps {
  page?: number
}

export const fetchArticles = createAsyncThunk<
  Article[],
  fetchArticlesProps,
  ThunkConfig<string>
  >(
    'pages/fetchArticles',
    async (props, ThunkApi) => {
      const { page = 1 } = props;
      const {
        extra,
        rejectWithValue,
        dispatch,
        getState,
      } = ThunkApi;

      const limit = getArticlesPageLimit(getState());

      try {
        const response = await extra.api.get<Article[]>('/articles', {
          params: {
            _expand: 'user',
            _page: page,
            _limit: limit,
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
