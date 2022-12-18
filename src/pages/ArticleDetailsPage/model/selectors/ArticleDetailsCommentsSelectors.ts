import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsIsLoading = (state: StateSchema) => state.ArticleDetailsComments?.isLoading;
export const getArticleDetailsError = (state: StateSchema) => state.ArticleDetailsComments?.error;
