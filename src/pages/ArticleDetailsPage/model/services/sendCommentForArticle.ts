import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';
import { getArticleData } from 'entities/Article/model/selectors/Article';
import { fetchCommentsById } from 'pages/ArticleDetailsPage/model/services/fetchCommentsById';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
  >(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
      const {
        extra, dispatch, rejectWithValue, getState,
      } = thunkApi;

      const userData = getUserAuthData(getState());
      const article = getArticleData(getState());

      if (!userData || !text || !article) {
        return rejectWithValue('no data');
      }

      try {
        const response = await extra.api.post<Comment>('/comments', {
          articleId: article.id,
          userId: userData.id,
          text,
        });

        if (!response.data) {
          throw new Error();
        }

        dispatch(fetchCommentsById(article.id));

        return response.data;
      } catch (e) {
        return rejectWithValue('error');
      }
    },
  );
