import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from 'pages/ArticleDetailsPage/model/selectors/ArticleDetailsCommentsSelectors';

describe('Article.test', () => {
  test('getArticleDetailsIsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      ArticleDetailsComments: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('getArticleError(false)', () => {
    const state: DeepPartial<StateSchema> = {
      ArticleDetailsComments: {
        error: 'false',
      },
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('false');
  });
});
