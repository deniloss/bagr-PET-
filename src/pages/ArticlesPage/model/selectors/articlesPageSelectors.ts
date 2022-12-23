import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageView = (state: StateSchema) => state.ArticlesList.view;
export const getArticlesPageIsLoading = (state: StateSchema) => state.ArticlesList.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.ArticlesList.error;
export const getArticlesPageLimit = (state: StateSchema) => state.ArticlesList.limit;
export const getArticlesPageNum = (state: StateSchema) => state.ArticlesList.page;
export const getArticlesPageHasMore = (state: StateSchema) => state.ArticlesList.hasMore;
