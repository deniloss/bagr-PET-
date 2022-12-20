import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleListSkeleton } from 'entities/Article';
import { ArticleView, Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string
  articles: Article[]
  view?: ArticleView
  isLoading: boolean
}

export const ArticleList = memo((props : ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.LIST,
    isLoading,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      className={cls.card}
      article={article}
      view={view}
      key={article.id}
    />
  );

  if (isLoading) {
    return (
      <ArticleListSkeleton view={view} />
    );
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  );
});
