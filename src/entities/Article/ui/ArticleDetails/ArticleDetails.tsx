import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CalendarIcon from 'shared/assets/icons/article_calendar.svg';
import ViewIcon from 'shared/assets/icons/viewIcon.svg';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getArticleData, getArticleError, getArticleIsLoading } from 'entities/Article/model/selectors/Article';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleReducer } from 'entities/Article/model/slice/ArticleSlice';
import cls from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArtivleById/fetchArticleById';

interface ArticleDetailsProps {
  className?: string
  id: string
}

const initialReducers: ReducersList = {
  ArticleDetails: ArticleReducer,
};

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const error = useSelector(getArticleError);
  const article = useSelector(getArticleData);
  const isLoading = useSelector(getArticleIsLoading);
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} block={block} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} block={block} />;
    case ArticleBlockType.WARNING:
      return null;
    default:
      return null;
    }
  }, []);

  const onReturnToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

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
  } else {
    content = (
      <>
        <Button theme={ThemeButton.OUTLINE} onClick={onReturnToList}>
          {t('Назад к списку')}
        </Button>
        <div className={cls.avatarWrapper}>
          <Avatar src={article?.img} size={200} />
        </div>
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.M}
        />
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={ViewIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <Text text={String(article?.createdAt)} />
        </div>

        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
};
