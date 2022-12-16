import {
  createEntityAdapter,
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { Article } from 'entities/Article';
import { fetchCommentsById } from 'pages/ArticleDetailsPage/model/services/fetchCommentsById';

const commentAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentAdapter.getSelectors<StateSchema>(
  (state) => state.ArticleDetailsComments || commentAdapter.getInitialState(),
);

const ArticleDetailsPageCommentsSlice = createSlice({
  name: 'ArticleDetailsPageComments',
  initialState: commentAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsById.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: ArticleDetailsCommentsReducer } = ArticleDetailsPageCommentsSlice;
