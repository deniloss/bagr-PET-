import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageView = (state: StateSchema) => state.ArticlesList.view;
export const getArticlesPageIsLoading = (state: StateSchema) => state.ArticlesList.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.ArticlesList.error;
