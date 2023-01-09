import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { ArticleView } from 'entities/Article/model/types/article';

jest.mock('../fetchArticles/fetchArticles.ts');

describe('fetchNextArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      ArticlesList: {
        view: ArticleView.LIST,
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalledWith({ page: 3 });
  });
  test('fetchAritcleList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      ArticlesList: {
        view: ArticleView.LIST,
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        _inited: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
