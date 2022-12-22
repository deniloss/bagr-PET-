import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles';
import { useSelector } from 'react-redux';
import { articlesPageActions, getArticles } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(fetchArticles());
  });

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleViewSelector
        className={cls.viewSelector}
        onChangeView={onChangeView}
        view={view}
      />
      <ArticleList
        isLoading={false}
        view={view}
        articles={articles}
      />
    </div>
  );
};

export default ArticlesPage;
