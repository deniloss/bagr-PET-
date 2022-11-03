import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { fetchArticleById } from '../services/fetchArticleById';
import { ArticleSchema } from '../types/ArticleSchema';

const initialState: ArticleSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const ArticleSlice = createSlice({
  name: 'ArticleSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: ArticleActions } = ArticleSlice;
export const { reducer: ArticleReducer } = ArticleSlice;
