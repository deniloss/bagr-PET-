import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleError = (state: StateSchema) => state.ArticleDetails.error;
export const getArticleData = (state: StateSchema) => state.ArticleDetails.data;
export const getArticleIsLoading = (state: StateSchema) => state.ArticleDetails.isLoading;
