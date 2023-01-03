import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { articlesPageActions, articlesPageReducer, getArticles } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import {
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { ArticleView } from 'entities/Article/model/types/article';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

const initialReducers: ReducersList = {
  ArticlesList: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const inited = useSelector(getArticlesPageInited);

  useInitialEffect(() => {
    if (!inited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticles({
        page: 1,
      }));
    }
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleViewSelector
          className={cls.viewSelector}
          onChangeView={onChangeView}
          view={view}
        />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlesPage;
