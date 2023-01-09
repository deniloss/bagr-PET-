import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article/model/types/article';

export const getArticlesPageView = (state: StateSchema) => state.ArticlesList?.view || ArticleView.LIST;
export const getArticlesPageIsLoading = (state: StateSchema) => state.ArticlesList?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.ArticlesList?.error;
export const getArticlesPageLimit = (state: StateSchema) => state.ArticlesList?.limit;
export const getArticlesPageNum = (state: StateSchema) => state.ArticlesList?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) => state.ArticlesList?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => state.ArticlesList?._inited;
