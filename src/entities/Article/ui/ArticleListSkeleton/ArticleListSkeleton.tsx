import React, { memo } from 'react';
import { ArticleView } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListSkeleton.module.scss';

interface ArticleListSkeletonProps {
  className?: string,
  view: ArticleView
}

export const ArticleListSkeleton = memo((props: ArticleListSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(cls.card, {}, [className, cls[view]])}>
        <div className={cls.header}>
          <Skeleton className={cls.avatar} width="20px" height="20px" />
          <Skeleton className={cls.username} height="20px" width="150px" />
          <Skeleton className={cls.date} height="20px" width="200px" />
        </div>
        <Skeleton className={cls.title} height="30px" width="40%" />
        <Skeleton className={cls.types} height="25px" width="20%" />
        <Skeleton className={cls.image} height="200px" width="100%" />
        <Skeleton className={cls.subtitle} height="200px" width="100%" />
        <div className={cls.footer}>
          <Skeleton className={cls.button} height="35px" width="20%" />
          <Skeleton className={cls.views} height="20px" width="10%" />
          <Skeleton className={cls.icon} height="20px" width="10%" />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListSkeleton, {}, [className, cls[view]])}>
      <div className={cls.card}>
        <div className={cls.imageWrapper} />
        <div className={cls.infoWrapper}>
          <Skeleton className={cls.types} height="15px" width="10%" />
          <Skeleton className={cls.views} height="15px" width="25%" />
          <Skeleton className={cls.icon} height="15px" width="10%" />
        </div>
        <Skeleton className={cls.title} height="30px" width="50%" />
      </div>
    </div>
  );
});
