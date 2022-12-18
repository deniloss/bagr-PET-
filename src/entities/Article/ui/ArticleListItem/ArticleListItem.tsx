import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import viewIcon from 'shared/assets/icons/viewIcon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string
  article: Article,
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const {
    className,
    article,
    view,
  } = props;
  const { t } = useTranslation();

  if (view === ArticleView.TILES) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <div className={cls.card}>
          <div className={cls.imageWrapper}>
            <img className={cls.image} src={article.img} alt={article.title} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <div className={cls.infoWrapper}>
            <Text className={cls.types} text={article.type.join(' , ')} />
            <Text className={cls.views} text={String(article.views)} />
            <Icon className={cls.icon} Svg={viewIcon} />
          </div>
          <Text className={cls.title} text={article.title} />
        </div>

      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className])} />
  );
});
