import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleData, getArticleError, getArticleIsLoading } from 'entities/Article/model/selectors/Article';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string
  id: string
}

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const error = useSelector(getArticleError);
  const article = useSelector(getArticleData);
  const isLoading = useSelector(getArticleIsLoading);

  React.useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке страницы')} />
    );
  }

  return (
    <div className={classNames(cls.ArticleDetails, {}, [className])}>
      {content}
    </div>
  );
};
